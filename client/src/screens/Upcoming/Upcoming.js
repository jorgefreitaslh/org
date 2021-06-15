import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import axios from 'axios';

//Style
import {
    App,
    Body,
    Logo,
    Space,
    Info,
    Title,
    Text,
    Select,
    Button,
    Load,
    ImageOk
} from './style.js';

//Images
import logo from '../../assets/img/logoheader.png';
import loader from '../../assets/img/loading.gif';
import imgok from '../../assets/img/ok.svg';

function Upcoming() {

    document.title = 'Appointment | Org';
    const history = useHistory();

    const [ID, setID] = useState('');
    const [select, setSelect] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [exp, setExp] = useState('');
    const [skill, setSkill] = useState('');
    const [volunteer, setVolunteer] = useState('');
    const [learner, setLearner] = useState('');
    const [call, setCall] = useState('')
    const [hour, setHour] = useState([]);
    const [load, setLoad] = useState(false);
    const [ok, setOk] = useState(false);

    const [on, setOn] = useState(true);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    useEffect(async () => {
        var hora = urlParams.get('hour')
        let hourArray = hora.split(",");
        setHour(hourArray)
        setName(urlParams.get('name'))
        setCountry(urlParams.get('country'))
        setExp(urlParams.get('exp'))
        setSkill(urlParams.get('skill'))
        setLearner(urlParams.get('learner'))
        setVolunteer(urlParams.get('volunteer'))
        var crypto = require("crypto");
        var code = crypto.randomBytes(20).toString('hex');
        setCall(code)
        if (select !== '') {
            setOn(false)
        }

        const getRequests = await axios.get(`/api/requests/`);
        const Requests = getRequests.data.request;

        const filter = Requests.filter(({ learnerId }) => learner.includes(learnerId));
        filter.map(id => {
            if (JSON.parse(id.volunteers) === volunteer) {
                if (id.dates.toString() === hour.toString()) {
                    setID(id.id)
                }
            }
            return null
        });
    }, [select])

    const handleChangeHour = e => {
        setSelect(e.target.value);
    }

    const Create = async () => {
        const body = {
            learnerId: learner,
            volunteerId: volunteer,
            date: select,
            priority: skill,
            experience: exp,
            name: name,
            call: call
        }
        const register = await axios.post('/api/upcoming/', (body));
        const del = await axios.delete(`/api/requests/${ID}`);
        if (register && del) {
            setOk(true)
        }
    }

    return (
        <App>
            <Body>
                <Logo src={logo} onClick={() => { history.push('/') }} />
                {load === false ?
                    <Info>
                        <Title>Requested</Title>
                        <Title subtitle={true}>{skill}</Title>
                        <Text>Informations:</Text>
                        <Text size={true} top={true}>{name}</Text>
                        <Text size={true} top={true}>{country}</Text>
                        <Space />
                        <Text>Experience:</Text>
                        <Text size={true} top={true}>{exp}</Text>
                        <Space />
                        <Text>Select schedule:</Text>
                        <Select
                            value={select}
                            onChange={handleChangeHour}
                        >
                            <option value={null}>Select Hour</option>
                            {
                                hour.length > 0 ? hour.map(item => (
                                    <option value={item}>{moment(item).format('DD MMM hh:mm')}</option>
                                ))
                                    :
                                    null
                            }
                        </Select>
                        <Button
                            disabled={on}
                            on={on}
                            onClick={() => {
                                setLoad(true)
                                Create()
                            }}
                        >
                            Confirm Call
                            </Button>
                    </Info>
                    :
                    <div>
                        {
                            ok === false ?
                                <Info load={true}>
                                    <Load src={loader} />
                                </Info>
                                :
                                <Info load={true}>
                                    <ImageOk src={imgok} />
                                    <Title conclude={true}>
                                        Concluido
                                    </Title>
                                    <Text>
                                        You will receive an email with the room link for a call.
                                    </Text>
                                </Info>
                        }
                    </div>
                }
            </Body>
        </App>
    )
}

export default Upcoming;