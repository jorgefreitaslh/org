import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import moment from 'moment';
import Rating from 'react-rating';

import axios from 'axios';

//Style
import {
    App,
    Body,
    Top,
    Logo,
    Title,
    Ball,
    Text,
    Option,
    Div,
    Line,
    Mentors,
    CenterLeft,
    LeftTitle,
    AreaOption,
    AreaSelect,
    AreaText,
    Area,
    Radio,
    IconArea,
    Selected,
    SelectOption,
    CenterRight,
    Mentor,
    Img,
    MentorName,
    MentorJob,
    Skills,
    Button,
    ShowMore,
    Next,
    Availability,
    Information,
    AvailabilityCenter,
    Question,
    NumberQuestion,
    MentorSkill,
    Input,
    TextBox,
    DateTime,
    DateOk,
    Image,
    BottomButtons,
    Modal,
    SignUpDiv,
    Details,
    DetailsDiv,
    DetailsLine,
    SignButton,
    SignUp,
    Label,
    Space,
    Form,
    Bottom,
    Info,
    Check,
    RadioButtons,
    Confirm,
    InputUp,
    ButtonUp,
    MentorModal,
    MentorDiv,
    Close,
    MentorSide,
    MentorImg,
    NoVolunteers,
    Ok,
    IconOk
} from './style.js';

//Components
import Footer from '../../components/Footer/footer';
import Header from '../../components/HeaderNav/header';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

//Images
import logo from '../../assets/img/logoheader.png';
import seta from '../../assets/img/down.png';
import seta2 from '../../assets/img/up.png';
import user from '../../assets/img/avatar.png';
import close from '../../assets/img/close.svg';
import found from '../../assets/img/found.png';
import ok from '../../assets/img/ok.svg';
import loader from '../../assets/img/load.gif';

function BusinessSignup() {

    document.title = 'Org Organisation';
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const location = useLocation();

    const login = location.state.login;
    const [help, setHelp] = useState([]);
    const [reload, setReload] = useState(false);
    const [mentors, setMentors] = useState(true);
    const [availability, setAvailability] = useState(false);
    const [details, setDetails] = useState(false);
    const [show, setShow] = useState(false);
    const [displayconfirm, setdisplayConfirm] = useState(false);
    const [title, setTitle] = useState('Select your mentor.');

    const [email, setEmail] = useState(location.state.email === null ? '' : location.state.email);
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [image, setImage] = useState(user);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [bio, setBio] = useState('');
    const [business, setBusiness] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [invited, setInvited] = useState([]);
    const [invitedshow, setInvitedShow] = useState([]);
    const [experience, setExperience] = useState('');
    const [hours, setHours] = useState([]);
    const [hour, setHour] = useState('');
    const [priority, setPriority] = useState('');

    const [volunteers, setVolunteers] = useState([]);
    const [showMentor, setShowMentor] = useState(false);
    const [mentorId, setMentorId] = useState('');
    const [mentorName, setMentorName] = useState('');
    const [mentorLastName, setMentorLastName] = useState('');
    const [mentorCompany, setMentorCompany] = useState('');
    const [mentorRole, setMentorRole] = useState('');
    const [mentorBio, setMentorBio] = useState('');
    const [mentorImage, setMentorImage] = useState('');
    const [mentorSkills, setMentorSkills] = useState([]);
    const [mentorLanguage, setMentorLanguage] = useState([]);
    const [mentorRate, setMentorRate] = useState('');

    const [erro, setErro] = useState('');
    const [error, setError] = useState('');
    const [activy, setActivy] = useState(true);

    const [loadavailability, setLoadavailability] = useState(false);
    const [loaddetails, setLoaddetails] = useState(false);
    const [loadconfirm, setLoadconfirm] = useState(false);
    const [Loader, setLoader] = useState('Sign up');
    const [number, setNumber] = useState(6);

    const [on, setOn] = useState(false);
    const [off, setOff] = useState(true);
    const [newArray, setArray] = useState([]);

    const ValidateEmail = () => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false) {
            setErro('Enter a valid email')
            return false
        } else {
            if (newArray.filter(e => email.includes(e)).length > 0) {
                setErro('E-mail already registered')
            }
            else {
                return true
            }
        }
        setArray([])
    }

    const ValidatePassword = () => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(password) === false) {
            setErro('Enter a password with 8 characters, 1 upper case, letters and numbers.');
            return false
        } else {
            return true
        }
    }

    const ConfirmPassword = () => {
        if (password === confirm) {
            return true
        } else {
            setErro("Passwords don't match")
            return false
        }
    }

    const ValidateName = () => {
        if (/^[a-zA-Z ]+$/.test(name) === false) {
            return false
        }
        return true
    }

    const ValidateLastName = () => {
        if (/^[a-zA-Z ]+$/.test(lastname) === false) {
            return false
        }
        return true
    }

    const ValidateRegion = () => {
        if (/^[a-zA-Z ]+$/.test(region) === false) {
            return false
        }
        return true
    }

    const ValidateCountry = () => {
        if (/^[a-zA-Z ]+$/.test(country) === false) {
            return false
        }
        return true
    }

    const ValidateBusiness = () => {
        if (/^[a-zA-Z ]+$/.test(business) === false) {
            return false
        }
        return true
    }

    useEffect(async () => {
        const get = await axios.get(`/api/learners/`);
        const learners = get.data.learners;
        if (
            ValidateName() &&
            ValidateLastName() &&
            ValidateCountry() &&
            ValidateRegion() &&
            ValidateBusiness() &&
            document.querySelector('input[name=gender]:checked') !== null &&
            document.querySelector('input[name=type]:checked') !== null
        ) {
            setActivy(false)
        }

        const getVolunteers = await axios.get(`/api/volunteers/`)
        const showVolunteers = getVolunteers.data.volunteers;
        const volunteersShow = help.map(id => {
            return showVolunteers.filter(item => {
                return item.skill.includes(id)
            });
        });
        if (volunteersShow[0] !== undefined) {
            setVolunteers(volunteersShow[0].sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate)))
        } else {
            setVolunteers(showVolunteers.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate)))
        }

        const getlearner = await axios.get(`/api/learners/${email}`)
        const learner = getlearner.data.learner
        if (login === true) {
            setName(learner.firstName)
            setLastname(learner.lastName)
            setCountry(learner.country)
            setRegion(learner.state)
        }

        setHelp(help)
        setReload(false)
        setLoading(false)

        return learners.length > 0 ? learners.map(item => (
            newArray.push(item.email)
        ))
            :
            null

    }, [reload, newArray])

    async function openModal() {
        const mentor = await axios.get(`/api/volunteers/${mentorId}`);
        setMentorName(mentor.data.volunteer.firstName);
        setMentorLastName(mentor.data.volunteer.lastName.charAt(0));
        setMentorCompany(mentor.data.volunteer.company);
        setMentorRole(mentor.data.volunteer.role);
        setMentorBio(mentor.data.volunteer.bio);
        setMentorImage(mentor.data.volunteer.image);
        setMentorSkills(mentor.data.volunteer.skill);
        setMentorRate(mentor.data.volunteer.rate);
        setMentorLanguage(mentor.data.volunteer.language === null ? '' : mentor.data.volunteer.language);
        setShowMentor(true);
    };

    const resizeFile = (image) => new Promise(resolve => {
        Resizer.imageFileResizer(image, 300, 300, 'PNG', 20, 0,
            uri => {
                resolve(uri);
            },
            'base64'
        );
    });

    const handleChangeImage = async e => {
        const file = e.target.files[0];
        setImage(await resizeFile(file));
        setReload(true)
    }

    const noneDigital = () => {
        if (document.getElementById('digital').style.display === 'flex') {
            document.getElementById('digital').style.display = 'none'
            document.getElementById('setadigital').src = seta
        } else {
            document.getElementById('digital').style.display = 'flex'
            document.getElementById('setadigital').src = seta2
        }
    }

    const noneDesign = () => {
        if (document.getElementById('design').style.display === 'flex') {
            document.getElementById('design').style.display = 'none'
            document.getElementById('setadesign').src = seta
        } else {
            document.getElementById('design').style.display = 'flex'
            document.getElementById('setadesign').src = seta2
        }
    }

    const noneService = () => {
        if (document.getElementById('service').style.display === 'flex') {
            document.getElementById('service').style.display = 'none'
            document.getElementById('setaservice').src = seta
        } else {
            document.getElementById('service').style.display = 'flex'
            document.getElementById('setaservice').src = seta2
        }
    }

    const Select = e => {
        const value = e.target.value;
        const array = help.filter(e => value.includes(e)).length > 0;
        if (array) {
            const option = help.indexOf(value)
            help.splice(option, 1)
        } else {
            const option = [...help, value]
            setHelp(option)
        }
        setReload(true)
    }

    const handleChangeEmail = e => {
        setEmail(e.target.value);
        if (email) setErro('');
    }

    const handleChangePassword = e => {
        setPassword(e.target.value);
        if (password) setErro('');
    }

    const handleChangeConfirm = e => {
        setConfirm(e.target.value);
        if (confirm) setErro('');
    }

    const handleChangeName = e => {
        setName(e.target.value)
        setReload(true)
    }

    const handleChangeLastname = e => {
        setLastname(e.target.value)
        setReload(true)
    }

    const handleChangeBio = e => {
        setBio(e.target.value)
    }

    const handleChangeBusiness = e => {
        setBusiness(e.target.value)
        setReload(true)
    }

    const handleChangeExperience = e => {
        setExperience(e.target.value);
    }

    const handleChangeHours = e => {
        setHour(e.target.value)
        setError('')
    }

    const handleChangePriority = e => {
        setPriority(e.target.value);
    }

    const selectCountry = e => {
        setCountry(e)
        setReload(true)
    }

    const selectRegion = e => {
        setRegion(e)
        setReload(true)
    }

    const SelectHour = () => {
        if (hour !== '') {
            if (!hours.includes(hour)) {
                setHours([...hours, hour])
                setReload(true)
            } else {
                setError('Time already added!')
            }
        }
    }

    const ON = () => {
        if (
            ValidateEmail() &&
            ValidatePassword() &&
            ConfirmPassword()
        ) {
            setOn(true)
            setOff(false)
        } else {
            setOn(false)
            setOff(true)
        }
    }

    const Signup = async () => {
        setLoader(<img src={loader} style={{ width: '1.5vw' }} alt="loader" />)
        const body = {
            email: email,
            password: password
        }
        const register = await axios.post('/api/learners/', (body));
        if (register) {
            setDetails(true)
            setAvailability(false)
            setShow(false)
            setTitle('Details')
            setLoaddetails(true)
            setLoader('Sign up')
        }
    }

    const Infos = async () => {
        if (activy === false) {
            const body = {
                firstName: name,
                lastName: lastname,
                gender: document.querySelector('input[name=gender]:checked').value,
                country: country,
                state: region,
                bio: bio,
                businessName: business,
                businessType: document.querySelector('input[name=type]:checked').value,
                image: image,
                emailSettings: ["Learning Content Recommendations", "Newsletter", "Mentor Recommendations"]
            }
            const update = await axios.put(`/api/learners/${email}`, (body));
            if (update) {
                setDetails(false)
                setdisplayConfirm(true)
                setLoadconfirm(true)
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }
    }

    const CreateRequest = async () => {
        invited.map(item => {
            const body = {
                email: item,
                learner: email,
                from: 'jorge@arenacode.io',
                subject: 'Org Request',
                skill: priority,
                name: `${name} ${lastname}`,
                addres: `${country} - ${region}`,
                exp: experience,
                hour: hours
            }
            return fetch('api/send', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    body
                }),
            }).then(res => res.json())
                .then(
                    async function () {
                        const body = {
                            learnerId: email,
                            volunteers: item,
                            dates: hours,
                            priority: priority,
                            experience: experience
                        }
                        const register = await axios.post('/api/requests/', (body));
                        if (register) {
                            history.push({
                                pathname: '/business-confirm',
                                state: {
                                    email: email
                                }
                            })
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    }).catch(err => {
                        console.log(err)
                    })
        })
    }

    async function InvitedSelect() {
        const getVolunteers = await axios.get(`/api/volunteers/`)
        const showVolunteers = getVolunteers.data.volunteers
        let Select = []
        invited.map(id => {
            return showVolunteers.filter(item => {
                if (item.email === id) {
                    Select.push(item)
                }
                return null
            });
        });
        setInvitedShow(Select)
    }

    async function ContractUser() {
        const user = [...invited, mentorId]
        setInvited(user)
    }

    function RemoveUser() {
        let index = mentorId;
        let arr = invited;
        arr = arr.filter(item => item !== index)
        setInvited(arr)
    }

    return (
        <App>
            <Body>
                {login === true ?
                    null
                    :
                    <Logo src={logo} onClick={() => { history.push('/') }} />
                }
                <Top>
                    <Div>
                        <Title>
                            {title}
                        </Title>
                        <Title size={true} subtitle={true}>
                            Schedule your 1 to 1 Mentoring Call
                    </Title>
                    </Div>
                    <Div right={true}>
                        <Option left={true}>
                            <Ball select={true}>
                                <Text left={true} select={true}>
                                    1
                                </Text>
                            </Ball>
                            <Text>
                                Mentors
                            </Text>
                        </Option>
                        <Line select={loadavailability} />
                        <Option>
                            <Ball select={loadavailability}>
                                <Text select={loadavailability}>
                                    2
                                </Text>
                            </Ball>
                            <Text>
                                Availability
                            </Text>
                        </Option>
                        <Line select={loaddetails} />
                        <Option>
                            <Ball select={loaddetails}>
                                <Text select={loaddetails}>
                                    3
                                </Text>
                            </Ball>
                            <Text>
                                Details
                            </Text>
                        </Option>
                        <Line select={loadconfirm} />
                        <Option>
                            <Ball select={loadconfirm}>
                                <Text select={loadconfirm}>
                                    4
                            </Text>
                            </Ball>
                            <Text>
                                Confirm
                            </Text>
                        </Option>
                    </Div>
                </Top>
                <Mentors display={mentors}>
                    <CenterLeft>
                        <LeftTitle>
                            <span style={{ backgroundColor: '#ace4e9' }}>
                                {invited.length} Mentors Invited
                            </span>
                        </LeftTitle>
                        <Selected>
                            {help.length > 0 ? help.map(item => (
                                <SelectOption>
                                    <Text select={true}>
                                        {item}
                                    </Text>
                                </SelectOption>
                            ))
                                :
                                null}
                        </Selected>
                        <LeftTitle size={true}>
                            Select learning subjects
                        </LeftTitle>
                        <AreaOption onClick={noneDigital}>
                            <IconArea src={seta} id="setadigital" />
                            <Text>
                                Digital marketing implementation
                            </Text>
                        </AreaOption>
                        <Area id="digital">
                            <AreaSelect>
                                <Radio
                                    type='checkbox'
                                    value='Content creation and strategy'
                                    skill={true}
                                    onChange={Select}
                                />
                                <AreaText>Content creation and strategy</AreaText>
                            </AreaSelect>
                            <AreaSelect>
                                <Radio
                                    type='checkbox'
                                    value='Conversion rate optimization'
                                    skill={true}
                                    onChange={Select}
                                />
                                <AreaText>Conversion rate optimization</AreaText>
                            </AreaSelect>
                            <AreaSelect>
                                <Radio
                                    type='checkbox'
                                    value='Google Ads'
                                    skill={true}
                                    onChange={Select}
                                />
                                <AreaText>Google Ads</AreaText>
                            </AreaSelect>
                        </Area>
                        <AreaOption onClick={noneDesign}>
                            <IconArea src={seta} id="setadesign" />
                            <Text>
                                Desing and branding
                        </Text>
                        </AreaOption>
                        <Area id='design'>
                            <AreaSelect>
                                <Radio
                                    type='checkbox'
                                    value='Brand and logos'
                                    skill={true}
                                    onChange={Select}
                                />
                                <AreaText>Brand and logos</AreaText>
                            </AreaSelect>
                            <AreaSelect>
                                <Radio
                                    type='checkbox'
                                    value='Visual design'
                                    skill={true}
                                    onChange={Select}
                                />
                                <AreaText>Visual design</AreaText>
                            </AreaSelect>
                            <AreaSelect>
                                <Radio
                                    type='checkbox'
                                    value='Website development'
                                    skill={true}
                                    onChange={Select}
                                />
                                <AreaText>Website development</AreaText>
                            </AreaSelect>
                        </Area>
                        <AreaOption onClick={noneService}>
                            <IconArea src={seta} id="setaservice" />
                            <Text>
                                Costumer service
                        </Text>
                        </AreaOption>
                        <Area id='service'>
                            <AreaSelect>
                                <Radio
                                    type='checkbox'
                                    value='Costumer service'
                                    skill={true}
                                    onChange={Select}
                                />
                                <AreaText>Costumer service</AreaText>
                            </AreaSelect>
                        </Area>
                    </CenterLeft>
                    <CenterRight>
                        {volunteers.length > 0 ? volunteers.slice(0, number).map(item => (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Mentor onClick={() => {
                                    setMentorId(item.email)
                                    if (mentorId === item.email) {
                                        openModal()
                                    }
                                }}>
                                    <Img src={item.image === null ? user : item.image} />
                                    <MentorName>
                                        {item.firstName} {item.lastName.charAt(0)}.
                                    </MentorName>
                                    <MentorName size={true}>
                                        {item.role}
                                    </MentorName>
                                    <MentorJob>
                                        {item.company}
                                    </MentorJob>
                                    <Skills id="p">
                                        {item.skill.length > 0 ? item.skill.slice(0, 3).map(item => (
                                            <MentorJob size={true}>
                                                <span style={{ backgroundColor: '#ace4e9', padding: '0.3vw 0.5vw', marginRight: '0.2vw' }}>
                                                    {item}
                                                </span>
                                            </MentorJob>
                                        ))
                                            :
                                            null
                                        }
                                        {
                                            item.skill.length > 3 ?
                                                <MentorJob size={true}>
                                                    <span style={{ backgroundColor: '#CCC', padding: '0.3vw 0.5vw', marginLeft: '0.2vw' }}>
                                                        +
                                                    </span>
                                                </MentorJob>
                                                :
                                                null
                                        }
                                    </Skills>
                                    <Rating
                                        readonly={true}
                                        initialRating={item.rate}
                                        emptySymbol={<span style={{
                                            fontSize: '1.3vw',
                                            width: '2vw',
                                            color: '#ccc'
                                        }}>
                                            ★
                                            </span>}
                                        fullSymbol={<span style={{
                                            fontSize: '1.3vw',
                                            width: '2vw',
                                            color: '#ace4e9'
                                        }}>
                                            ★
                                            </span>}
                                        style={{
                                            height: '1vw',
                                            marginLeft: '10.6vw',
                                            marginTop: '1.2vw'
                                        }}
                                    />
                                </Mentor>
                                <Button
                                    disabled={
                                        help.length === 0 ?
                                            true
                                            :
                                            false
                                    }
                                    position={true}
                                    select={
                                        invited.includes(item.email) ?
                                            true
                                            :
                                            false

                                    }
                                    onClick={() => {
                                        setMentorId(item.email)
                                        if (mentorId === item.email) {
                                            if (invited.includes(item.email)) {
                                                RemoveUser()
                                            } else {
                                                ContractUser()
                                            }
                                        }
                                    }}
                                >
                                    {
                                        invited.includes(item.email) ?
                                            'Selected'
                                            :
                                            'Select'
                                    }
                                </Button>
                            </div>
                        ))
                            :
                            <NoVolunteers>
                                <Title no={true}>No qualified Mentors</Title>
                                <Image src={found} />
                            </NoVolunteers>
                        }
                        <ShowMore
                            disabled={volunteers.length > 0 ? false : true}
                            off={volunteers.length > 0 ? false : true}
                            onClick={() => { setNumber(number + 6) }}
                        >
                            Show More
                        </ShowMore>
                        <Next
                            disabled={invited.length > 0 ? false : true}
                            on={invited.length > 0 ? false : true}
                            onClick={() => {
                                setMentors(false)
                                setAvailability(true)
                                setLoadavailability(true)
                                setTitle('Availability')
                                InvitedSelect()
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}>
                            Next:Availability
                        </Next>
                    </CenterRight>
                </Mentors>
                <Availability display={availability}>
                    <Information>
                        <LeftTitle>
                            Your Selected Mentors
                        </LeftTitle>
                        <Text
                            click={true}
                            onClick={() => {
                                setMentors(true)
                                setAvailability(false)
                                setTitle('Select your mentor')
                            }}
                        >
                            Add more mentors
                        </Text>
                    </Information>
                    <Information top={true}>
                        {availability === true ?
                            invitedshow.length > 0 ? invitedshow.map(item => (
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Mentor
                                        left={true}
                                        onClick={() => {
                                            setMentorId(item.email)
                                            if (mentorId === item.email) {
                                                openModal()
                                            }
                                        }}
                                    >
                                        <Img src={item.image === null ? user : item.image} />
                                        <MentorName>
                                            {item.firstName} {`${item.lastName}`.charAt(0)}.
                                        </MentorName>
                                        <MentorName size={true}>
                                            {item.role}
                                        </MentorName>
                                        <MentorJob>
                                            {item.company}
                                        </MentorJob>
                                        <Skills>
                                            {item.skill ?
                                                item.skill.length > 0 ? item.skill.map(item => (
                                                    <MentorJob size={true}>
                                                        <span style={{ backgroundColor: '#ace4e9', padding: '0.3vw 0.5vw', marginRight: '0.2vw' }}>
                                                            {item}
                                                        </span>
                                                    </MentorJob>
                                                ))
                                                    :
                                                    null
                                                :
                                                null
                                            }
                                        </Skills>
                                        <Rating
                                            readonly={true}
                                            initialRating={item.rate}
                                            emptySymbol={<span style={{
                                                fontSize: '1.3vw',
                                                width: '2vw',
                                                color: '#ccc'
                                            }}>
                                                ★
                                            </span>}
                                            fullSymbol={<span style={{
                                                fontSize: '1.3vw',
                                                width: '2vw',
                                                color: '#ace4e9'
                                            }}>
                                                ★
                                            </span>}
                                            style={{
                                                height: '1vw',
                                                marginLeft: '10.6vw',
                                                marginTop: '1.2vw'
                                            }}
                                        />
                                    </Mentor>
                                    <Button
                                        remove={true}
                                        onClick={() => {
                                            const myArray = invitedshow;
                                            const myArr = myArray.filter(i => i.email !== item.email);
                                            setInvitedShow(myArr)
                                            let index = item.email;
                                            let arr = invited;
                                            arr = arr.filter(item => item !== index)
                                            setInvited(arr)
                                            setReload(true)
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            ))
                                :
                                <Text>No Selected mentors</Text>
                            :
                            null
                        }
                    </Information>
                    <AvailabilityCenter>
                        <Question>
                            <NumberQuestion>
                                1
                            </NumberQuestion>
                            <LeftTitle size={true}>
                                Select your top-priority learning subject for this 1-to-1 mentoring call
                            </LeftTitle>
                        </Question>
                        <Question size={true}>
                            {
                                help.length > 0 ? help.map(item => (
                                    <MentorSkill>
                                        {item}
                                    </MentorSkill>
                                ))
                                    :
                                    null
                            }
                        </Question>
                        <Question>
                            <MentorSkill nocolor={true}>
                                Select your top-priority learning subject for this 1-to-1 mentoring call from the menu below
                            </MentorSkill>
                        </Question>
                        <Question bottom={true}>
                            <Input
                                value={priority}
                                onChange={handleChangePriority}
                            >
                                <option value={null}>Select Priority</option>
                                {
                                    help.length > 0 ? help.map(item => (
                                        <option value={item}>
                                            {item}
                                        </option>
                                    ))
                                        :
                                        null
                                }
                            </Input>
                        </Question>
                        <Question>
                            <NumberQuestion left={true}>
                                2
                            </NumberQuestion>
                            <LeftTitle size={true}>
                                Expand on what you need help with & describe your technical experience
                            </LeftTitle>
                        </Question>
                        <Question>
                            <MentorSkill nocolor={true}>
                                Based on the top-priority learning subject you have selected add in a little more information about what you would like to speak about and what your technical experience has been so far, so that our volunteer can better mentor you on your chosen learning subject.
                            </MentorSkill>
                        </Question>
                        <Question text={true} bottom={true}>
                            <TextBox
                                placeholder='Based on your top-priority learning subject please describe what you need help with and your technical experience.'
                                value={experience}
                                onChange={handleChangeExperience}
                            />
                        </Question>
                        <Question>
                            <NumberQuestion left2={true}>
                                3
                            </NumberQuestion>
                            <LeftTitle size={true}>
                                Choose your availability
                            </LeftTitle>
                        </Question>
                        <Question>
                            <MentorSkill nocolor={true}>
                                To increase your chances of a volunteer accepting your request for a call, provide up to 3 dates and times. Sessions must be scheduled at least 48 hours in advance.
                            </MentorSkill>
                        </Question>
                        <Space type={true} erro={true}>
                            {error}
                        </Space>
                        <Question wrap={true}>
                            {
                                hours.length > 0 ? hours.map(item => (
                                    <DateOk>
                                        {moment(item).format("DD/MM/YYYY   h:mm a")}
                                    </DateOk>
                                ))
                                    :
                                    null
                            }
                            <DateTime
                                type="datetime-local"
                                min={moment().format("YYYY-MM-DDTHH:mm")}
                                value={hour}
                                onChange={handleChangeHours}
                            />
                            <Ok>
                                <IconOk src={ok} onClick={SelectHour} />
                            </Ok>
                        </Question>
                    </AvailabilityCenter>
                    <BottomButtons>
                        <ShowMore back={true}>
                            Back:Mentors
                        </ShowMore>
                        <Next
                            disabled={invited.length > 0 ? false : true}
                            on={
                                invited.length > 0 ?
                                    priority !== '' ?
                                        experience !== '' ?
                                            hours.length > 0 ?
                                                false
                                                :
                                                true
                                            :
                                            true
                                        :
                                        true
                                    :
                                    true
                            }
                            left={true}
                            onClick={() => {
                                if (login === false) {
                                    setShow(true)
                                } else {
                                    setdisplayConfirm(true)
                                    setAvailability(false)
                                    setLoaddetails(true)
                                    setLoadconfirm(true)

                                }
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}>
                            Next:{login === false ? 'Details' : 'Confirm'}
                        </Next>
                    </BottomButtons>
                </Availability>
                <Details display={details}>
                    <DetailsDiv>
                        <DetailsLine>
                            <Img size={true} src={image} />
                            <ButtonUp>
                                Change Image
                                <InputUp onChange={handleChangeImage} type="file" accept=".jpg,.jpeg,.png" />
                            </ButtonUp>
                        </DetailsLine>
                        <DetailsLine >
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Label input={true}>
                                    First Name <span style={{ color: '#439bd7' }}>*</span>
                                </Label>
                                <Form
                                    type='text'
                                    small={true}
                                    value={name}
                                    onChange={handleChangeName}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1vw' }}>
                                <Label input={true}>
                                    Last Name <span style={{ color: '#439bd7' }}>*</span>
                                </Label>
                                <Form
                                    type='text'
                                    small={true}
                                    value={lastname}
                                    onChange={handleChangeLastname}
                                />
                            </div>
                        </DetailsLine>
                        <Label input={true}>
                            Country <span style={{ color: '#439bd7' }}>*</span>
                        </Label>
                        <CountryDropdown
                            value={country}
                            onChange={selectCountry}
                            classes="select-business"
                        />
                        <Label input={true}>
                            State <span style={{ color: '#439bd7' }}>*</span>
                        </Label>
                        <RegionDropdown
                            country={country}
                            value={region}
                            onChange={selectRegion}
                            defaultOptionLabel="Select State"
                            classes="select-business"
                        />
                        <Label input={true}>
                            Type in a bio of yourself <span style={{ color: '#439bd7' }}>*</span>
                        </Label>
                        <TextBox
                            size={true}
                            value={bio}
                            onChange={handleChangeBio}
                        />
                        <Label input={true}>
                            Name of business<span style={{ color: '#439bd7' }}>*</span>
                        </Label>
                        <Form
                            type='text'
                            big={true}
                            value={business}
                            onChange={handleChangeBusiness}
                        />
                    </DetailsDiv>
                    <DetailsDiv left={true}>
                        <Label input={true}>
                            Gender <span style={{ color: '#439bd7' }}>*</span>
                        </Label>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="gender" value="Female" onClick={() => { setReload(true) }} />
                            <Text size={true}>Female</Text>
                        </div>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="gender" value="Male" onClick={() => { setReload(true) }} />
                            <Text size={true}>Male</Text>
                        </div>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="gender" value="Others" onClick={() => { setReload(true) }} />
                            <Text size={true}>Others/Does not wish to identify</Text>
                        </div>
                        <Space big={true} />
                        <Label input={true}>
                            What type of organisation do you work for?
                        </Label>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="type" value="Business" onClick={() => { setReload(true) }} />
                            <Text size={true}>Business</Text>
                        </div>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="type" value="Charity" onClick={() => { setReload(true) }} />
                            <Text size={true}>Charity</Text>
                        </div>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="type" value="School" onClick={() => { setReload(true) }} />
                            <Text size={true}>School / College / University</Text>
                        </div>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="type" value="Freelancer" onClick={() => { setReload(true) }} />
                            <Text size={true}>Freelancer</Text>
                        </div>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="type" value="Student" onClick={() => { setReload(true) }} />
                            <Text size={true}>Student</Text>
                        </div>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="type" value="School" onClick={() => { setReload(true) }} />
                            <Text size={true}>Health services</Text>
                        </div>
                        <div style={{ height: '2.5vw', display: 'flex', alignItems: 'center' }}>
                            <RadioButtons left={true} type="radio" name="type" value="School" onClick={() => { setReload(true) }} />
                            <Text size={true}>Unemployed/furloughed</Text>
                        </div>
                        <Space big={true} />
                        <BottomButtons details={true}>
                            <ShowMore back={true}>
                                Back:Availability
                            </ShowMore>
                            <Next
                                on={activy}
                                left={true}
                                onClick={Infos}
                            >
                                Next:Confirm
                            </Next>
                        </BottomButtons>
                    </DetailsDiv>
                </Details>
                <Confirm display={displayconfirm}>
                    <LeftTitle>
                        Check everything and according to your request
                    </LeftTitle>
                    <LeftTitle confirm={true}>
                        Your Selected Mentors
                    </LeftTitle>
                    <Information wrap={true} top={true}>
                        {
                            invitedshow.length > 0 ? invitedshow.map(item => (
                                <div>
                                    <Mentor
                                        left={true}
                                        onClick={() => {
                                            setMentorId(item.email)
                                            if (mentorId === item.email) {
                                                openModal()
                                            }
                                        }}
                                    >
                                        <Img src={item.image === null ? user : item.image} />
                                        <MentorName>
                                            {item.firstName} {`${item.lastName}`.charAt(0)}.
                                        </MentorName>
                                        <MentorName size={true}>
                                            {item.role}
                                        </MentorName>
                                        <MentorJob>
                                            {item.company}
                                        </MentorJob>
                                        <Skills>
                                            {item.skill ?
                                                item.skill.length > 0 ? item.skill.map(item => (
                                                    <MentorJob size={true}>
                                                        <span style={{ backgroundColor: '#ace4e9', padding: '0.3vw 0.5vw', marginRight: '0.2vw' }}>
                                                            {item}
                                                        </span>
                                                    </MentorJob>
                                                ))
                                                    :
                                                    null
                                                :
                                                null
                                            }
                                        </Skills>
                                    </Mentor>
                                </div>
                            ))
                                :
                                <Text>No Selected mentors</Text>
                        }
                    </Information>
                    <Information confirm={true} confirmtop={true}>
                        <LeftTitle confirm={true}>
                            Your selected priority learning subjects for this 1-to-1 mentoring call
                        </LeftTitle>
                        <MentorJob confirm={true}>
                            <span style={{ backgroundColor: '#ace4e9', padding: '0.6vw 1.2vw', marginRight: '0.2vw' }}>
                                {priority}
                            </span>
                        </MentorJob>
                    </Information>
                    <Information confirm={true} confirmtop={true}>
                        <LeftTitle confirm={true}>
                            What you need help with & a description of your technical experience
                        </LeftTitle>
                        <TextBox
                            confirm={true}
                            size={true}
                            value={experience}
                            onChange={handleChangeExperience}
                        />
                    </Information>
                    <Information confirm={true} confirmtop={true}>
                        <LeftTitle confirm={true}>
                            Your 1-to-1 mentoring call availability
                        </LeftTitle>
                        <div style={{ width: '75vw', display: 'flex', flexWrap: 'wrap' }}>
                            {
                                hours.length > 0 ? hours.map(item => (
                                    <DateOk>
                                        {moment(item).format("DD/MM/YYYY   h:mm a")}
                                    </DateOk>
                                ))
                                    :
                                    null
                            }
                        </div>
                    </Information>
                    <BottomButtons confirm={true}>
                        <ShowMore
                            back={true}
                        >
                            Back:Details
                            </ShowMore>
                        <Next
                            left={true}
                            onClick={CreateRequest}>
                            Confirm
                        </Next>
                    </BottomButtons>
                </Confirm>
            </Body>
            {login === true ?
                <Header />
                :
                null
            }
            <Footer />
            <Modal
                visible={show}
            >
                <SignUpDiv>
                    <SignUp>
                        Create an account
                    </SignUp>
                    <Space>{erro}</Space>
                    <Label>Email address:</Label>
                    <Form
                        placeholder="Email address"
                        type='text'
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    <Label>Set a password:</Label>
                    <Form
                        placeholder="Set a secure password"
                        type='password'
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <Label>Confirm password:</Label>
                    <Form
                        placeholder="Confirm your password"
                        type='password'
                        value={confirm}
                        onChange={handleChangeConfirm}
                    />
                    <Space size={true} />
                    <Bottom>
                        <Check
                            type='checkbox'
                            onChange={ON}
                            checked={on}
                        />
                        <Info>
                            <Info>
                                I agree to the Organizacao
                        </Info>
                            <Info click={true} left={true}>
                                User Agreement,
                        </Info>
                            <Info click={true} left={true}>
                                Privacy Policy
                        </Info>
                            <Info left={true}>
                                and
                        </Info>
                            <Info click={true} left={true}>
                                Cookie Policy
                        </Info>
                        </Info>
                    </Bottom>
                    <Space size={true} />
                    <SignButton
                        disabled={off}
                        on={on}
                        onClick={Signup}>
                        {Loader}
                    </SignButton>
                </SignUpDiv>
            </Modal>
            <MentorModal
                visible={showMentor}
            >
                <MentorDiv>
                    <Close src={close} onClick={() => { setShowMentor(false) }} />
                    <MentorSide size={true}>
                        <MentorImg src={mentorImage === null ? user : mentorImage} />
                        <Space size={true} />
                        <MentorName modal={true} size={true}>
                            Skills
                        </MentorName>
                        <Skills modal={true}>
                            {mentorSkills.length > 0 ? mentorSkills.map(item => (
                                <MentorJob modal={true} size={true}>
                                    <span style={{ backgroundColor: '#ace4e9', padding: '0.3vw 0.5vw', marginRight: '0.2vw' }}>
                                        {item}
                                    </span>
                                </MentorJob>
                            ))
                                :
                                null
                            }
                        </Skills>
                    </MentorSide>
                    <MentorSide>
                        <MentorName>
                            {mentorName} {mentorLastName.charAt(0)}.
                        </MentorName>
                        <Text modal={true}>
                            {mentorCompany} | {mentorRole}
                        </Text>
                        <Rating
                            readonly={true}
                            initialRating={mentorRate}
                            emptySymbol={<span style={{
                                fontSize: '1.3vw',
                                width: '2vw',
                                color: '#ccc'
                            }}>
                                ★
                            </span>}
                            fullSymbol={<span style={{
                                fontSize: '1.3vw',
                                width: '2vw',
                                color: '#ace4e9'
                            }}>
                                ★
                            </span>}
                            style={{
                                height: '1vw',
                                marginLeft: '0.9vw',
                                marginTop: '0.5vw'
                            }}
                        />
                        <MentorName top={true} modal={true} size={true}>
                            About Me
                        </MentorName>
                        <MentorJob>
                            {mentorBio}
                        </MentorJob>
                        <MentorName top={true} modal={true} size={true}>
                            Languages
                        </MentorName>
                        <MentorJob>
                            {mentorLanguage.length > 0 ? mentorLanguage.map(item => (
                                <MentorJob modal={true} size={true}>
                                    /{item}
                                </MentorJob>
                            ))
                                :
                                null
                            }
                        </MentorJob>
                        {displayconfirm === true ?
                            null
                            :
                            availability === true ?
                                null
                                :
                                <Button
                                    disabled={
                                        invited.length === 0 ?
                                            true
                                            :
                                            false
                                    }
                                    modal={true}
                                    select={
                                        invited.includes(mentorId) ?
                                            true
                                            :
                                            false
                                    }
                                    onClick={() => {
                                        setMentorId(mentorId)
                                        if (mentorId) {
                                            if (invited.includes(mentorId)) {
                                                RemoveUser()
                                            } else {
                                                ContractUser()
                                            }
                                        }
                                    }}
                                >
                                    {
                                        invited.includes(mentorId) ?
                                            'Selected'
                                            :
                                            'Select'
                                    }
                                </Button>
                        }
                    </MentorSide>
                </MentorDiv>
            </MentorModal>
            <LoadingModal visible={loading} />
        </App >
    );
}

export default BusinessSignup;