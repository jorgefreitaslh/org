import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import moment from 'moment';

import axios from 'axios';

//Style
import {
    App,
    Body,
    Title,
    Text,
    InfoData,
    ContentModal,
    TitleModal,
    Close,
    Href,
    Cancel,
    Loader,
    Cancelled,
    CancelText
} from './style.js';

//Components
import Header from '../../components/HeaderNav/header';

//Images
import seta from '../../assets/img/seta.svg';
import load from '../../assets/img/loader.gif';
import imgok from '../../assets/img/ok.svg';

function Call() {

    const history = useHistory();
    const location = useLocation();

    const [UpId, setUpId] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState([]);
    const [call, setCall] = useState('');
    const [name, setName] = useState('');

    const [cancel, setCancel] = useState(false);
    const [canceled, setCanceled] = useState(false);

    useEffect(async () => {
        const getDate = await axios.get(`/api/upcoming/${location.state.id}`);
        const Get = getDate.data.upcoming;
        setPriority(Get.priority);
        setDate(Get.date);
        setCall(Get.call);
        setUpId(Get.id);
        setName(Get.name);
    }, [])

    async function CancelCall() {
        setCancel(true);
        const cancel = await axios.delete(`/api/upcoming/${UpId}`);
        if (cancel) {
            setCanceled(true)
        }
    };

    return (
        <App>
            <Header />
            <Body welcome={true} bottom={true}>
                <ContentModal>
                    <Close src={seta} onClick={() => {
                        history.push({
                            pathname: '/volunteer-dashboard',
                            state: {
                                email: location.state.email,
                                type: location.state.type
                            }
                        })
                    }} />
                    <Title left={true}>
                        {name}
                    </Title>
                    <Title modal={true} left={true}>
                        {priority}
                    </Title>
                    {cancel === false ?
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TitleModal>
                                1-to-1 Mentoring Call
                            </TitleModal>
                            <TitleModal size={true}>
                                You requested a call for the following top priority:
                            </TitleModal>
                            <Text modal={true}>
                                {priority}
                            </Text>
                            <TitleModal size={true}>
                                You requested a call for the following times:
                            </TitleModal>
                            <InfoData modal={true}>
                                {moment(date).format('DD MMM h:mm')}
                            </InfoData>
                            <TitleModal size={true}>
                                Link of your call:
                            </TitleModal>
                            <Href modal={true} onClick={() => { window.open(`https://meet.jit.si/${call}`) }} >
                                https://meet.jit.si/{call}
                            </Href>
                            <Cancel onClick={CancelCall}>
                                Cancel
                            </Cancel>
                        </div>
                        :
                        canceled === true ?
                            <div style={{ height: '20vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Cancelled src={imgok} />
                                <CancelText>
                                    Cancelado com sucesso!
                                </CancelText>
                            </div>
                            :
                            <div style={{ height: '20vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Loader src={load} />
                                <CancelText>
                                    Cancelando...
                                </CancelText>
                            </div>
                    }
                </ContentModal>
            </Body>
        </App>
    )
}

export default Call;