import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';

import axios from 'axios';

//Style
import {
    App,
    Body,
    Div,
    Title,
    Text,
    Menu,
    Information,
    Info,
    InfoText,
    InfoData,
    Buttons,
    Button,
    Modal,
    ContentModal,
    TitleModal,
    Close,
    Cancel,
    Href,
    Loader,
    Cancelled,
    CancelText,
    Evaluate,
    Space,
    DivCourses,
    Courses,
    ColumnCourses,
    ImageCourses,
    TextCourses
} from './style.js';

//Components
import Header from '../../components/HeaderNav/header';
import Footer from '../../components/Footer/footer';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

//Images
import close from '../../assets/img/close.svg';
import load from '../../assets/img/loader.gif';
import imgok from '../../assets/img/ok.svg';
import marketing from '../../assets/img/marketing.jpeg';
import design from '../../assets/img/design.jpeg';
import reuniao from '../../assets/img/reuniao.jpeg';
import ecommerce from '../../assets/img/ecommerce.jpeg';

function Dashboard() {

    document.title = 'Org Organisation';
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const location = useLocation();

    const ID = location.state.email;
    const [select, setSelect] = useState('Upcoming');
    const [um, set1] = useState(true);
    const [dois, set2] = useState(false);
    const [tres, set3] = useState(false);
    const [Requested, setRequested] = useState([]);
    const [Upcoming, setUpcoming] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [request, setRequest] = useState('');

    const [priority, setPriority] = useState('');
    const [dates, setDates] = useState([]);
    const [date, setDate] = useState([]);
    const [call, setCall] = useState('');
    const [experience, setExperience] = useState('');
    const [UpId, setUpId] = useState('');
    const [volunteerId, setVolunteerId] = useState('');
    const [VolunteerName, setVolunteerName] = useState('');
    const [VolunteerLastName, setVolunteerLastName] = useState('');

    const [evaluate, setEvaluate] = useState('');
    const [rate, setRate] = useState('');

    const [cancel, setCancel] = useState(false);
    const [canceled, setCanceled] = useState(false);
    const [reload, setReload] = useState(false);
    const [state, setState] = useState('');

    useEffect(async () => {
        const AllRequests = await axios.get('/api/requests');
        const Requests = AllRequests.data.request;
        const filter = Requests.filter(({ learnerId }) => ID.includes(learnerId));
        setRequested(filter);

        const AllUpcoming = await axios.get('/api/upcoming');
        const Upcomings = AllUpcoming.data.upcoming;
        const filtered = Upcomings.filter(({ learnerId }) => ID.includes(learnerId));
        setUpcoming(filtered);

        const AllCompleted = await axios.get('/api/completed');
        const Completeds = AllCompleted.data.completed;
        const filtercompleted = Completeds.filter(({ learnerId }) => ID.includes(learnerId));
        setCompleted(filtercompleted);

        setReload(false)
        setLoading(false)
    }, [select, reload])

    async function openModal() {
        const getDate = await axios.get(`/api/requests/${request}`);
        const getVolunteer = await axios.get(`/api/volunteers/${volunteerId}`);
        const Get = getDate.data.request;
        setVolunteerName(getVolunteer.data.volunteer.firstName);
        setVolunteerLastName(getVolunteer.data.volunteer.lastName);
        setPriority(Get.priority);
        setDates(Get.dates);
        setExperience(Get.experience);
        setShow(true);
    };

    async function openModal2() {
        const getDate = await axios.get(`/api/upcoming/${request}`);
        const Get = getDate.data.upcoming;
        setPriority(Get.priority);
        setDate(Get.date);
        setCall(Get.call);
        setUpId(Get.id);
        setExperience(Get.experience);
        setShow2(true);
    };

    async function openModal3() {
        const getCompleted = await axios.get(`/api/completed/${request}`);
        const getVolunteer = await axios.get(`/api/volunteers/${volunteerId}`);
        const Get = getCompleted.data.completed;
        setVolunteerName(getVolunteer.data.volunteer.firstName);
        setRate(getVolunteer.data.volunteer.rate);
        setEvaluate(getVolunteer.data.volunteer.rate);
        setPriority(Get.priority);
        setDate(Get.date);
        setUpId(Get.id);
        setShow3(true);
    };

    async function Rate() {
        setCancel(true);
        const body = {
            rate: evaluate === '0' ? Number(rate) : (Number(evaluate) + Number(rate)) / 2
        }
        const update = await axios.put(`/api/volunteers/${volunteerId}`, body);
        const body2 = {
            evaluate: true
        }
        const update2 = await axios.put(`/api/completed/${request}`, body2);
        if (update && update2) {
            setCanceled(true)
            setReload(true)
        }
    };

    async function CancelCall() {
        setState('Cancela')
        setCancel(true);
        const cancel = await axios.delete(`/api/upcoming/${UpId}`);
        if (cancel) {
            setCanceled(true)
            setReload(true)
        }
    };

    async function Completed() {
        setState('Completa')
        setCancel(true);
        const body = {
            learnerId: ID,
            volunteerId: volunteerId,
            date: date,
            priority: priority
        }
        const register = await axios.post('/api/completed/', (body));
        const del = await axios.delete(`/api/upcoming/${UpId}`);
        if (register && del) {
            setCanceled(true)
            setReload(true)
        }
    }

    return (
        <App>
            <Body welcome={true} bottom={true}>
                <Div>
                    <Title>
                        Dashboard
                    </Title>
                </Div>
                <Div bottom={true}>
                    <Title bottom={true}>
                        1-to-1 Mentoring Calls
                    </Title>
                    <Menu>
                        <Text click={um} onClick={() => {
                            setSelect('Upcoming')
                            set1(true)
                            set2(false)
                            set3(false)
                        }}>
                            Upcoming{Upcoming.length > 0 ? `(${Upcoming.length})` : null}
                        </Text>
                        <Text click={dois} onClick={() => {
                            setSelect('Requested')
                            set1(false)
                            set2(true)
                            set3(false)
                        }}>
                            Requested{Requested.length > 0 ? `(${Requested.length})` : null}
                        </Text>
                        <Text click={tres} onClick={() => {
                            setSelect('Completed')
                            set1(false)
                            set2(false)
                            set3(true)
                        }}>
                            Completed{completed.length > 0 ? `(${completed.length})` : null}
                        </Text>
                    </Menu>
                    {
                        um === true ?
                            <Information>
                                {
                                    Upcoming.length > 0 ? Upcoming.map(item => (
                                        <Info>
                                            <InfoText title={true} top={true}>
                                                {select}
                                            </InfoText>
                                            <InfoText>
                                                Your priority:<br />
                                                <span style={{ color: '#000' }}>
                                                    {item.priority}
                                                </span>
                                            </InfoText>
                                            <InfoText top={true}>
                                                Scheduled call time:
                                            </InfoText>
                                            <InfoData>
                                                {moment(item.date).format('DD MMM h:mm')}
                                            </InfoData>
                                            <Button
                                                onClick={() => {
                                                    setRequest(item.id)
                                                    if (request === item.id) {
                                                        openModal2()
                                                    }
                                                }}>
                                                View details
                                            </Button>
                                        </Info>
                                    ))
                                        :
                                        <Title bottom={true} padding={true}>
                                            You have no future Appointments.
                                        </Title>
                                }
                            </Information>
                            :
                            null
                    }
                    {
                        dois === true ?
                            <Information>
                                {
                                    Requested.length > 0 ? Requested.map(item => (
                                        <Info>
                                            <InfoText title={true} top={true}>
                                                {select}
                                            </InfoText>
                                            <InfoText>
                                                You requested help for the following top priority:<br />
                                                <span style={{ color: '#000' }}>
                                                    {item.priority}
                                                </span>
                                            </InfoText>
                                            <InfoText top={true}>
                                                You requested a call for the following times:
                                            </InfoText>
                                            <div style={{ width: '30vw', display: 'flex', overflowY: 'scroll' }}>
                                                {item.dates.length > 0 ? item.dates.map(date => (
                                                    <InfoData>
                                                        {moment(date).format('DD MMM h:mm')}
                                                    </InfoData>
                                                ))
                                                    :
                                                    null
                                                }
                                            </div>
                                            <Button
                                                onClick={() => {
                                                    setRequest(item.id)
                                                    setVolunteerId(item.volunteers)
                                                    if (request === item.id) {
                                                        openModal()
                                                    }
                                                }}
                                            >
                                                View details of your request
                                            </Button>
                                        </Info>
                                    ))
                                        :
                                        <Title bottom={true} padding={true}>
                                            You have no Requests.
                                        </Title>

                                }
                            </Information>
                            :
                            null
                    }
                    {
                        tres === true ?
                            <Information>
                                {
                                    completed.length > 0 ? completed.map(item => (
                                        <Info>
                                            <InfoText title={true} top={true}>
                                                {select}
                                            </InfoText>
                                            <InfoText>
                                                Your priority:<span style={{ color: '#000' }}> {item.priority}</span>
                                            </InfoText>
                                            <InfoText top={true}>
                                                Volunteer e-mail:<span style={{ color: '#000' }}> {item.volunteerId}</span>
                                            </InfoText>
                                            <InfoText top={true}>
                                                Date:<span style={{ color: '#000' }}> {moment(item.date).format('DD MMM h:mm')}</span>
                                            </InfoText>
                                            {item.evaluate === 'true' ?
                                                <Button
                                                    disable={true}
                                                    completed={true}
                                                    off={true}
                                                >
                                                    Evaluated!
                                            </Button>
                                                :
                                                <Button
                                                    completed={true}
                                                    onClick={() => {
                                                        setRequest(item.id)
                                                        setVolunteerId(item.volunteerId)
                                                        if (request === item.id) {
                                                            openModal3()
                                                        }
                                                    }}
                                                >
                                                    Evaluate the Volunteer
                                            </Button>
                                            }
                                        </Info>
                                    ))
                                        :
                                        <Title bottom={true} padding={true}>
                                            You have no completed Appointments.
                                        </Title>
                                }
                            </Information>
                            :
                            null
                    }
                </Div>
                <Div bottom={true}>
                    <Title bottom={true}>
                        Guidelines
                    </Title>
                    <Buttons>
                        <Button div={true}>
                            1-to-1 Mentoring Call Guideline
                        </Button>
                        <Button div={true}>
                            Workshop Guideline
                        </Button>
                    </Buttons>
                    <Space />
                </Div>
                <Div bottom={true} nobottom={true}>
                    <Title bottom={true}>
                        Online Courses
                    </Title>
                    <DivCourses>
                        <ColumnCourses>
                            <Courses onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                                history.push({
                                    pathname: '/skills/workshop',
                                    state: {
                                        email: location.state.email,
                                        type: 'business'
                                    }
                                })

                            }}>
                                <ImageCourses src={marketing} />
                                <TextCourses div={true}>
                                    Workshop Guideline
                                </TextCourses>
                            </Courses>
                            <Courses>
                                <ImageCourses src={reuniao} />
                                <TextCourses div={true}>
                                    Business Strategy
                                </TextCourses>
                            </Courses>
                        </ColumnCourses>
                        <ColumnCourses>
                            <Courses>
                                <ImageCourses src={design} />
                                <TextCourses div={true}>
                                    Design & Branding
                                </TextCourses>
                            </Courses>
                            <Courses>
                                <ImageCourses src={ecommerce} />
                                <TextCourses div={true}>
                                    E-Commerce
                                </TextCourses>
                            </Courses>
                        </ColumnCourses>
                    </DivCourses>
                </Div>
            </Body>
            <Modal
                visible={show}
            >
                <ContentModal>
                    <Close src={close} onClick={() => { setShow(false) }} />
                    <Title left={true}>
                        Requested
                    </Title>
                    <Title modal={true} left={true}>
                        A/B Testing
                    </Title>
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
                    <div style={{ marginLeft: '1vw', width: '43vw', display: 'flex', overflowY: 'scroll' }}>
                        {dates.length > 0 ? dates.map(date => (
                            <InfoData>
                                {moment(date).format('DD MMM h:mm')}
                            </InfoData>
                        ))
                            :
                            null
                        }
                    </div>
                    <TitleModal size={true}>
                        Here is what you have written in your request:
                    </TitleModal>
                    <Text modal={true}>
                        {experience}
                    </Text>
                    <TitleModal size={true}>
                        Volunteer:
                    </TitleModal>
                    <Text modal={true}>
                        {VolunteerName} {VolunteerLastName} - {volunteerId}
                    </Text>
                </ContentModal>
            </Modal>
            <Modal
                visible={show2}
            >
                <ContentModal>
                    <Close src={close} onClick={() => {
                        setShow2(false)
                        setCancel(false)
                        setCanceled(false)
                    }} />
                    <Title left={true}>
                        {select}
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
                            <div style={{ display: 'flex' }}>
                                <Cancel onClick={CancelCall}>
                                    Cancel
                                </Cancel>
                                <Cancel completed={true} onClick={Completed}>
                                    Completed
                                </Cancel>
                            </div>
                        </div>
                        :
                        canceled === true ?
                            <div style={{ height: '20vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Cancelled src={imgok} />
                                <CancelText>
                                    {state}do com sucesso!
                                </CancelText>
                            </div>
                            :
                            <div style={{ height: '20vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Loader src={load} />
                                <CancelText>
                                    {state}ndo...
                                </CancelText>
                            </div>
                    }
                </ContentModal>
            </Modal>
            <Modal
                visible={show3}
            >
                <ContentModal completed={true}>
                    <Close
                        completed={true}
                        src={close}
                        onClick={() => {
                            setShow3(false)
                            setCancel(false)
                            setCanceled(false)
                        }} />
                    <Title left={true}>
                        Evaluate
                    </Title>
                    <Title modal={true} left={true}>
                        {VolunteerName}
                    </Title>
                    {cancel === false ?
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <InfoText completed={true}>
                                Your priority:<span style={{ color: '#000' }}> {priority}</span>
                            </InfoText>
                            <InfoText completed={true} top={true}>
                                Date:<span style={{ color: '#000' }}> {moment(date).format('DD MMM h:mm')}</span>
                            </InfoText>
                            <InfoText completed={true}>
                                Rate 0 to 5 stars:
                            </InfoText>
                            <Rating
                                initialRating={0}
                                onChange={value => setRate(value)}
                                emptySymbol={<span style={{
                                    fontSize: '1.6vw',
                                    width: '2vw',
                                    color: '#ccc'
                                }}>
                                    ★
                                </span>}
                                fullSymbol={<span style={{
                                    fontSize: '1.6vw',
                                    width: '2vw',
                                    color: '#439bd7'
                                }}>
                                    ★
                                </span>}
                                style={{
                                    height: '1vw',
                                    marginLeft: '2.5vw',
                                    marginTop: '0.5vw'
                                }}
                            />
                            <Evaluate onClick={Rate}>
                                Send
                            </Evaluate>
                        </div>
                        :
                        canceled === true ?
                            <div style={{ height: '10vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Cancelled src={imgok} />
                                <CancelText>
                                    Avaliado com sucesso!
                                </CancelText>
                            </div>
                            :
                            <div style={{ height: '10vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Loader src={load} />
                                <CancelText>
                                    Enviando...
                                </CancelText>
                            </div>
                    }
                </ContentModal>
            </Modal>
            <Header />
            <Footer />
            <LoadingModal visible={loading} />
        </App>
    );
}

export default Dashboard;