import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import moment from 'moment';

import axios from 'axios';

//Style
import {
    App,
    Body,
    Top,
    Left,
    Right,
    Title,
    Photo,
    ButtonUp,
    InputUp,
    Image,
    Name,
    Description,
    Text,
    Perfil,
    Line,
    Space,
    Center,
    Div,
    Input,
    Select,
    Bottom,
    Skill,
    Radio,
    Buttons,
    Option,
    Selection,
    Options,
    LineOption,
    Number,
    Save,
    SaveButton,
    Ok,
    Erro,
    Modal,
    ContentModal,
    Close,
    ModalButton
} from './style.js';

//Components
import Footer from '../../components/Footer/footer';
import Header from '../../components/HeaderNav/header';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

//Images
import avatar from '../../assets/img/avatar.png'
import ok from '../../assets/img/tick.svg';
import loader from '../../assets/img/load.gif';
import close from '../../assets/img/close.svg';

function Profile() {

    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const location = useLocation();
    const type = location.state.type;

    const user_id = location.state.email;
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [since, setSince] = useState('');
    const [country, setCountry] = useState('');
    const [image, setImage] = useState('');
    const [region, setRegion] = useState('');
    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('');
    const [org, setOrg] = useState('');
    const [language, setLanguage] = useState([]);
    const [skills, setSkills] = useState([]);
    const [countries, setCountries] = useState([]);
    const [newsletter, setNewsletter] = useState('');
    const [requests, setRequests] = useState('');
    const [matching, setMatching] = useState('');
    const [emailsettings, setEmailsettings] = useState([]);

    const [portuguese, setPorguese] = useState(false);
    const [english, setEnglish] = useState(false);
    const [espanish, setEspanish] = useState(false);
    const [japanese, setJapanese] = useState(false);
    const [height, setHeight] = useState(false);

    const [digital1, setDigital1] = useState(false);
    const [digital2, setDigital2] = useState(false);
    const [digital3, setDigital3] = useState(false);
    const [design1, setDesign1] = useState(false);
    const [design2, setDesign2] = useState(false);
    const [design3, setDesign3] = useState(false);
    const [height2, setHeight2] = useState(false);
    const [height3, setHeight3] = useState(false);

    const [custom, setCustom] = useState('');
    const [load, setLoad] = useState(ok);
    const [reload, setReload] = useState(false);
    const [erro, setErro] = useState('');
    const [modal, setModal] = useState(false);
    const [loadDel, setLoadDel] = useState('Delete');

    useEffect(async () => {
        const user_data = type === 'volunteer' ? await axios.get(`/api/volunteers/${user_id}`) : await axios.get(`/api/learners/${user_id}`);
        const user = type === 'volunteer' ? user_data.data.volunteer : user_data.data.learner;
        setName(user.firstName);
        setLastname(user.lastName);
        setCompany(type === 'volunteer' ? user.company : user.businessName);
        setRole(user.role);
        setImage(user.image);
        setSince(user.createdAt);
        setGender(user.gender);
        setCountry(user.country);
        setRegion(user.state);
        setBio(user.bio);
        setMatching(user.matching);
        setOrg(user.businessType)
        setCustom(user.hour.toString());
        setPassword(user.password);
        setLanguage(user.language === null ? '' : user.language);
        setCountries(user.preference === null ? '' : user.preference);
        setSkills(user.skill === null ? '' : user.skill);
        setNewsletter(user.newsletter);
        setEmailsettings(user.emailSettings === null ? '' : user.emailSettings)
        setRequests(user.requests);
        setHeight(user.language === null ? false : true);
        setHeight2(user.skill === null ? false : true);
        setReload(false)
        setLoading(false);
    }, [reload])

    const selectCountry = e => {
        setCountry(e);
    }

    const selectRegion = e => {
        setRegion(e);
    }

    const handlechangeGender = e => {
        setGender(e.target.value);
    }

    const handlechangeBio = e => {
        setBio(e.target.value);
    }

    const handlechangePassword = e => {
        setPassword(e.target.value);
        setErro('')
    }

    const handlechangeOrg = e => {
        setOrg(e.target.value);
    }

    const handleChangeLanguage = e => {
        setLanguage(language => [...language, e.target.value]);
        if (e.target.value === 'Portuguese') {
            setPorguese(true)
            setHeight(true)
        }
        if (e.target.value === 'English') {
            setEnglish(true)
            setHeight(true)
        }
        if (e.target.value === 'Espanish') {
            setEspanish(true)
            setHeight(true)
        }
        if (e.target.value === 'Japanese') {
            setJapanese(true)
            setHeight(true)
        }
    }

    const handleChangeSkills = e => {
        setSkills(skills => [...skills, e.target.value]);
        if (e.target.value === 'Content creation and strategy') {
            setDigital1(true)
            setHeight2(true)
        }
        if (e.target.value === 'Conversion rate optimization') {
            setDigital2(true)
            setHeight2(true)
        }
        if (e.target.value === 'Google Ads') {
            setDigital3(true)
            setHeight2(true)
        }
        if (e.target.value === 'Brand and logos') {
            setDesign1(true)
            setHeight2(true)
        }
        if (e.target.value === 'Visual design') {
            setDesign2(true)
            setHeight2(true)
        }
        if (e.target.value === 'Website development') {
            setDesign3(true)
            setHeight2(true)
        }
    }

    const handlechangeCountries = e => {
        const value = e
        if (countries.filter(e => value.includes(e)).length > 0) {
            return false
        } else {
            setCountries(countries => [...countries, value]);
        }
    }

    const handleChangeEmailsettings = e => {
        const value = e.target.value
        if (emailsettings.filter(e => value.includes(e)).length > 0) {
            const newArray = [...emailsettings];
            const index = emailsettings.indexOf(value);
            newArray.splice(index, 1);
            setEmailsettings(newArray);
        } else {
            setEmailsettings(emailsettings => [...emailsettings, value]);
        }
        console.log(value)
    }

    const NumberSelect = e => {
        setCustom(e.target.value);
    }

    const deleteLanguage = e => {
        const newArray = [...language];
        const index = language.indexOf(e);
        newArray.splice(index, 1);
        setLanguage(newArray);
        if (newArray.length === 0) {
            setHeight(false)
        }
    }

    const deleteSkill = e => {
        const newArray = [...skills];
        const index = skills.indexOf(e);
        newArray.splice(index, 1);
        setSkills(newArray);
        if (newArray.length === 0) {
            setHeight2(false)
        }
    }

    const deleteCountrie = e => {
        const newArray = [...countries];
        const index = countries.indexOf(e);
        newArray.splice(index, 1);
        setCountries(newArray);
    }

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
        const body = {
            image: await resizeFile(file)
        }
        const update = type === 'volunteer' ? await axios.put(`/api/volunteers/${user_id}`, body) : await axios.put(`/api/learners/${user_id}`, body);
        if (update) {
            setReload(true)
        }
    }

    const ValidatePassword = () => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(password) === false) {
            setErro('Enter a password with 8 characters, 1 upper case, letters and numbers.');
            return false
        } else {
            return true
        }
    }

    const DeleteAccount = async () => {
        setLoadDel(<img src={loader} style={{ width: '1.5vw' }} alt="loader" />)

        const AllUpcoming = await axios.get('/api/upcoming');
        const Upcomings = AllUpcoming.data.upcoming;
        const filtered = type === 'volunteer' ? Upcomings.filter(({ volunteerId }) => user_id.includes(volunteerId)) : Upcomings.filter(({ learnerId }) => user_id.includes(learnerId));
        filtered.map(async (item) => { await axios.delete(`/api/upcoming/${item.id}`) });

        const AllCompleted = await axios.get('/api/completed');
        const Completed = AllCompleted.data.completed;
        const filtered2 = type === 'volunteer' ? null : Completed.filter(({ learnerId }) => user_id.includes(learnerId));
        if (type === 'volunteer') {
        } else {
            filtered2.map(async (item) => { await axios.delete(`/api/completed/${item.id}`) })
        }

        const del = await axios.delete(`/api/${type === 'volunteer' ? 'volunteers' : 'learners'}/${user_id}`);
        if (del) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            window.history.pushState(null, null, "/");
            history.push("/")
        } else {
            setLoadDel('Delete')
        }
    }

    const Infos = async () => {
        setLoad(loader)
        if (ValidatePassword()) {
            const body = {
                firstName: name,
                lastName: lastname,
                gender: gender,
                country: country,
                state: region,
                bio: bio,
                image: image,
                preference: countries,
                password: password,
                company: company,
                role: role,
                language: language === '' ? null : language,
                hour: custom,
                skill: skills === '' ? null : skills,
                requests: requests,
                newsletter: newsletter
            }
            console.log(body)
            const update = await axios.put(`/api/volunteers/${user_id}`, (body));
            if (update) {
                setLoad(ok)
            }
        } else {
            setLoad(ok)
        }
    }

    const Infos2 = async () => {
        setLoad(loader)
        if (ValidatePassword()) {
            const body = {
                firstName: name,
                lastName: lastname,
                gender: gender,
                country: country,
                state: region,
                bio: bio,
                image: image,
                businessType: org,
                businessName: company,
                language: language === '' ? null : language,
                matching: matching,
                skill: skills === '' ? null : skills,
                emailSettings: emailsettings
            }
            console.log(body)
            const update = await axios.put(`/api/learners/${user_id}`, (body));
            if (update) {
                setLoad(ok)
            }
        } else {
            setLoad(ok)
        }
    }

    return (
        <App>
            <Header />
            <Body welcome={true} bottom={true}>
                <Top>
                    <Left>
                        <Title>
                            Settings
                        </Title>
                        <Photo>
                            <Image src={image === null ? avatar : image} />
                            <ButtonUp>
                                <InputUp onChange={handleChangeImage} type="file" accept=".jpg,.jpeg,.png" />
                                Change profile photo
                            </ButtonUp>
                        </Photo>
                    </Left>
                    <Right>
                        <Name>
                            {name} {lastname}
                        </Name>
                        <Text>
                            {company} - {type === 'volunteer' ? role : org}
                        </Text>
                        <Description>
                            <Text>
                                {bio}
                            </Text>
                        </Description>
                        <Text>
                            Volunteer since {moment(since).format('MMM Do, YYYY')}
                        </Text>
                    </Right>
                </Top>
                {type === 'volunteer' ?
                    <Center>
                        <Div>
                            <Perfil>
                                Profile
                            </Perfil>
                            <Line />
                            <Space />
                            <Text bold={true}>
                                Your name
                            </Text>
                            <Input
                                value={name}
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Your lastname
                            </Text>
                            <Input
                                value={lastname}
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Company
                            </Text>
                            <Input
                                value={company}
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Role
                            </Text>
                            <Input
                                value={role}
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Gender
                            </Text>
                            <Select
                                value={gender}
                                onChange={handlechangeGender}
                            >
                                <option value={null}>Select gender</option>
                                <option value="Female" >Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Others/Does not wish to identify</option>
                            </Select>
                            <Space />
                            <Text bold={true}>
                                Country
                            </Text>
                            <CountryDropdown
                                value={country}
                                onChange={selectCountry}
                                classes="select-perfil"
                            />
                            <Space />
                            <Text bold={true}>
                                State
                            </Text>
                            <RegionDropdown
                                country={country}
                                value={region}
                                onChange={selectRegion}
                                defaultOptionLabel="Select State"
                                classes="select-perfil"
                            />
                            <Space />
                            <Text bold={true}>
                                Your introduction
                            </Text>
                            <Input
                                value={bio}
                                type='text'
                                maxLength={100}
                                onChange={handlechangeBio}
                            />
                            <Perfil top={true}>
                                Login & Security
                            </Perfil>
                            <Line />
                            <Space />
                            <Text bold={true}>
                                Email Address
                            </Text>
                            <Input
                                value={user_id}
                                disabled="disabled"
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Password
                            </Text>
                            <Input
                                placeholder="*******************"
                                onChange={handlechangePassword}
                                type='text'
                            />
                            <Erro>{erro}</Erro>
                        </Div>
                        <Div left={true}>
                            <Perfil>
                                Mentoring Preferences
                            </Perfil>
                            <Line />
                            <Space />
                            <Text bold={true}>
                                In which languages ​​can you mentor?
                            </Text>
                            <Select
                                value={language}
                                onChange={handleChangeLanguage}
                            >
                                <option value={null}>Select Language</option>
                                <option value="Portuguese" disabled={portuguese}>Portuguese</option>
                                <option value="English" disabled={english}>English</option>
                                <option value="Espanish" disabled={espanish}>Espanish</option>
                                <option value="Japanese" disabled={japanese}>Japanese</option>
                            </Select>
                            <Bottom height={height}>
                                {language.length > 0 ? language.map(item => (
                                    <Skill>
                                        <Option>
                                            {item}
                                        </Option>
                                        <Option left={true} onClick={() => deleteLanguage(item)}>
                                            x
                                        </Option>
                                    </Skill>
                                ))
                                    : (
                                        null
                                    )}
                            </Bottom>
                            <Text bold={true}>
                                Skills you selected
                            </Text>
                            <Select
                                value={skills}
                                onChange={handleChangeSkills}
                            >
                                <option value={null}>Select Skill</option>
                                <optgroup label="Digital marketing implementation">
                                    <option value="Content creation and strategy" disabled={digital1}>Content creation and strategy</option>
                                    <option value="Conversion rate optimization" disabled={digital2}>Conversion rate optimization</option>
                                    <option value="Google Ads" disabled={digital3}>Google Ads</option>
                                </optgroup>
                                <optgroup label="Desing and branding">
                                    <option value="Brand and logos" disabled={design1}>Brand and logos</option>
                                    <option value="Visual design" disabled={design2}>Visual design</option>
                                    <option value="Website development" disabled={design3}>Website development</option>
                                </optgroup>
                            </Select>
                            <Bottom height={height2}>
                                {skills.length > 0 ? skills.map(item => (
                                    <Skill>
                                        <Option>
                                            {item}
                                        </Option>
                                        <Option left={true} onClick={() => deleteSkill(item)}>
                                            x
                                        </Option>
                                    </Skill>
                                ))
                                    : (
                                        null
                                    )}
                            </Bottom>
                            <Text bold={true}>
                                Preference for location of mentees
                            </Text>
                            <Buttons>
                                <Radio
                                    type="radio"
                                    onClick={() => {
                                        setCountries(["All Countries"])
                                        setHeight3(false)
                                    }}
                                    checked={
                                        countries.filter(e => "All Countries".includes(e)).length > 0 ?
                                            true
                                            :
                                            false
                                    }
                                    name="country"
                                    value="All Countries"
                                />
                                <Text font={true}>Anywhere</Text>
                                <Radio
                                    left={true}
                                    onClick={() => {
                                        setHeight3(true)
                                        setCountries([])
                                    }}
                                    checked={countries.filter(e => "All Countries".includes(e)).length === 0 ?
                                        true
                                        :
                                        false
                                    }
                                    type="radio"
                                    name="country"
                                    value={true}
                                />
                                <Text font={true}>Specific countries only</Text>
                            </Buttons>
                            <Selection height={height3}>
                                <CountryDropdown
                                    value={countries}
                                    onChange={handlechangeCountries}
                                    classes="select-perfil"
                                />
                            </Selection>
                            <Bottom height={true}>
                                {countries.length > 0 ? countries.map(item => (
                                    <Skill>
                                        <Option>
                                            {item}
                                        </Option>
                                        <Option left={true} onClick={() => deleteCountrie(item)}>
                                            x
                                        </Option>
                                    </Skill>
                                ))
                                    : (
                                        null
                                    )}
                            </Bottom>
                            <Space size={true} />
                            <Text bold={true}>
                                How often can you mentor organisations?
                            </Text>
                            <Options>
                                <LineOption left={true}>
                                    <Radio type="radio" name="hours" checked={custom === "1"} value="1" onClick={() => { setCustom("1") }} />
                                    <Text font={true} >1 hour per month</Text>
                                </LineOption>
                                <LineOption>
                                    <Radio left={true} type="radio" checked={custom === "2"} name="hours" value="2" onClick={() => { setCustom("2") }} />
                                    <Text font={true}>2 hours per month</Text>
                                </LineOption>
                                <LineOption>
                                    <Radio left={true} type="radio" checked={custom === "3"} name="hours" value="3" onClick={() => { setCustom("3") }} />
                                    <Text font={true}>5 hours per month</Text>
                                </LineOption>
                                <LineOption left={true}>
                                    <Radio type="radio" name="hours" checked={custom === "4"} value="4" onClick={() => { setCustom("4") }} />
                                    <Text font={true}>8 hours per month</Text>
                                </LineOption>
                                <LineOption>
                                    <Radio type="radio" name="hours" checked={custom === "5"} value="10" onClick={() => { setCustom("5") }} />
                                    <Text font={true}>10 hours per month</Text>
                                </LineOption>
                                <LineOption>
                                    <Radio type="radio" name="hours" checked={["1", "2", "3", "4", "5"].indexOf(custom) === -1} value={custom} />
                                    <Text font={true}>Custom </Text>
                                    <Number type="number" onChange={NumberSelect} />
                                    <Text font={true} left={true}>- hours per month</Text>
                                </LineOption>
                            </Options>
                            <Space size={true} />
                            <Perfil business={true}>
                                Data, Privacy & Communication
                            </Perfil>
                            <Line />
                            <Space />
                            <Text bold={true}>
                                Newsletter Preferences
                            </Text>
                            <Options>
                                <LineOption left={true}>
                                    <Radio type="radio" name="newsletter" value="Yes" checked={newsletter === 'Yes' ? true : false} onClick={() => { setNewsletter('Yes') }} />
                                    <Text font={true}>Receive Organizacao's newsletters</Text>
                                </LineOption>
                                <LineOption>
                                    <Radio left={true} type="radio" name="newsletter" value="No" checked={newsletter === 'No' ? true : false} onClick={() => { setNewsletter('No') }} />
                                    <Text font={true}>Not receive Organizacao's newsletters</Text>
                                </LineOption>
                            </Options>
                            <Space size={true} />
                            <Text bold={true}>
                                Mentoring Call Requests
                            </Text>
                            <Options>
                                <LineOption left={true}>
                                    <Radio type="radio" name="requests" value="Yes" checked={requests === 'Yes' ? true : false} onClick={() => { setRequests('Yes') }} />
                                    <Text font={true}>Receive requests from mentors</Text>
                                </LineOption>
                                <LineOption>
                                    <Radio left={true} type="radio" name="requests" value="No" checked={requests === 'No' ? true : false} onClick={() => { setRequests('No') }} />
                                    <Text font={true}>Not receive requests from mentors</Text>
                                </LineOption>
                            </Options>
                            <Space size={true} />
                            <Line color={true} />
                            <SaveButton>
                                <Name delete={true} onClick={() => { setModal(true) }}>
                                    do you want to delete your account?
                                </Name>
                                <Save onClick={Infos}>
                                    Save
                                    <Ok src={load} />
                                </Save>
                            </SaveButton>
                        </Div>
                    </Center>
                    :
                    <Center>
                        <Div>
                            <Perfil>
                                Profile
                            </Perfil>
                            <Line />
                            <Space />
                            <Text bold={true}>
                                Your name
                            </Text>
                            <Input
                                value={name}
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Your lastname
                            </Text>
                            <Input
                                value={lastname}
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Sumary
                            </Text>
                            <Input
                                value={bio}
                                type='text'
                                maxLength={100}
                                onChange={handlechangeBio}
                            />
                            <Space />
                            <Text bold={true}>
                                Company
                            </Text>
                            <Input
                                value={company}
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Gender
                            </Text>
                            <Select
                                value={gender}
                                onChange={handlechangeGender}
                            >
                                <option value={null}>Select gender</option>
                                <option value="Female" >Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Others/Does not wish to identify</option>
                            </Select>
                            <Space />
                            <Text bold={true}>
                                Organisation Type
                            </Text>
                            <Select
                                value={org}
                                onChange={handlechangeOrg}
                            >
                                <option value={null}>Select Org Type</option>
                                <option value="Business" >Business</option>
                                <option value="Charity">Charity</option>
                                <option value="School">School / College / University</option>
                                <option value="Freelancer">Freelancer</option>
                                <option value="Health">Health services</option>
                                <option value="Unemployed">Unemployed/furloughed</option>
                            </Select>
                            <Space />
                            <Text bold={true}>
                                Country
                            </Text>
                            <CountryDropdown
                                value={country}
                                onChange={selectCountry}
                                classes="select-perfil"
                            />
                            <Space />
                            <Text bold={true}>
                                State
                            </Text>
                            <RegionDropdown
                                country={country}
                                value={region}
                                onChange={selectRegion}
                                defaultOptionLabel="Select State"
                                classes="select-perfil"
                            />
                            <Perfil business={true}>
                                Login & Security
                            </Perfil>
                            <Line />
                            <Space />
                            <Text bold={true}>
                                Email Address
                            </Text>
                            <Input
                                value={user_id}
                                disabled="disabled"
                                type='text'
                            />
                            <Space />
                            <Text bold={true}>
                                Password
                            </Text>
                            <Input
                                placeholder="*******************"
                                onChange={handlechangePassword}
                                type='text'
                            />
                            <Erro>{erro}</Erro>
                        </Div>
                        <Div left={true}>
                            <Perfil>
                                Mentoring Preferences
                            </Perfil>
                            <Line />
                            <Space />
                            <Text bold={true}>
                                In which languages ​​can you mentor?
                            </Text>
                            <Select
                                value={language}
                                onChange={handleChangeLanguage}
                            >
                                <option value={null}>Select Language</option>
                                <option value="Portuguese" disabled={portuguese}>Portuguese</option>
                                <option value="English" disabled={english}>English</option>
                                <option value="Espanish" disabled={espanish}>Espanish</option>
                                <option value="Japanese" disabled={japanese}>Japanese</option>
                            </Select>
                            <Bottom height={height}>
                                {language.length > 0 ? language.map(item => (
                                    <Skill>
                                        <Option>
                                            {item}
                                        </Option>
                                        <Option left={true} onClick={() => deleteLanguage(item)}>
                                            x
                                        </Option>
                                    </Skill>
                                ))
                                    : (
                                        null
                                    )}
                            </Bottom>
                            <Text bold={true}>
                                Your Selected Learning Subjects
                            </Text>
                            <Select
                                value={skills}
                                onChange={handleChangeSkills}
                            >
                                <option value={null}>Select Skill</option>
                                <optgroup label="Digital marketing implementation">
                                    <option value="Content creation and strategy" disabled={digital1}>Content creation and strategy</option>
                                    <option value="Conversion rate optimization" disabled={digital2}>Conversion rate optimization</option>
                                    <option value="Google Ads" disabled={digital3}>Google Ads</option>
                                </optgroup>
                                <optgroup label="Desing and branding">
                                    <option value="Brand and logos" disabled={design1}>Brand and logos</option>
                                    <option value="Visual design" disabled={design2}>Visual design</option>
                                    <option value="Website development" disabled={design3}>Website development</option>
                                </optgroup>
                            </Select>
                            <Bottom height={height2}>
                                {skills.length > 0 ? skills.map(item => (
                                    <Skill>
                                        <Option>
                                            {item}
                                        </Option>
                                        <Option left={true} onClick={() => deleteSkill(item)}>
                                            x
                                        </Option>
                                    </Skill>
                                ))
                                    : (
                                        null
                                    )}
                            </Bottom>
                            <Space size={true} />
                            <Text bold={true}>
                                Matching with mentors
                            </Text>
                            <Options>
                                <LineOption left={true}>
                                    <Radio type="radio" name="Matching" value="Yes" checked={matching === 'Yes' ? true : false} onClick={() => { setMatching('Yes') }} />
                                    <Text font={true} >Yes, I wish to accept alternatives to those I picked</Text>
                                </LineOption>
                                <LineOption left={true}>
                                    <Radio type="radio" name="Matching" value="No" checked={matching === 'No' ? true : false} onClick={() => { setMatching('No') }} />
                                    <Text font={true}>No, I do not wish to accept alternatives to those I picked</Text>
                                </LineOption>
                            </Options>
                            <Perfil business={true}>
                                Data, Privacy & Communication
                            </Perfil>
                            <Line />
                            <Space />
                            <Text bold={true}>
                                Email Settings
                            </Text>
                            <Options direction={true}>
                                <LineOption left={true} direction={true}>
                                    <Radio
                                        type="checkbox"
                                        name="Email"
                                        checked={
                                            emailsettings.filter(e =>
                                                `${'Learning Content Recommendations'}`.includes(e)).length > 0 ?
                                                true
                                                :
                                                false
                                        }
                                        onChange={handleChangeEmailsettings}
                                        value="Learning Content Recommendations"
                                    />
                                    <Text font={true}>Learning Content Recommendations</Text>
                                </LineOption>
                                <LineOption left={true} direction={true}>
                                    <Radio
                                        type="checkbox"
                                        name="Email"
                                        checked={emailsettings.filter(e =>
                                            `Newsletter`.includes(e)).length > 0 ?
                                            true
                                            :
                                            false
                                        }
                                        onChange={handleChangeEmailsettings}
                                        value="Newsletter"
                                    />
                                    <Text font={true}>Newsletter</Text>
                                </LineOption>
                                <LineOption left={true} direction={true}>
                                    <Radio
                                        type="checkbox"
                                        name="Email"
                                        checked={
                                            emailsettings.filter(e =>
                                                `Mentor Recommendations`.includes(e)).length > 0 ?
                                                true
                                                :
                                                false
                                        }
                                        onChange={handleChangeEmailsettings}
                                        value="Mentor Recommendations"
                                    />
                                    <Text font={true}>Mentor Recommendations</Text>
                                </LineOption>
                            </Options>
                            <Space size={true} />
                            <Line color={true} />
                            <SaveButton size={true}>
                                <Name delete={true} onClick={() => { setModal(true) }}>
                                    do you want to delete your account?
                                </Name>
                                <Save onClick={Infos2}>
                                    Save
                                    <Ok src={load} />
                                </Save>
                            </SaveButton>
                        </Div>
                    </Center>
                }
            </Body>
            <Modal
                visible={modal}
            >
                <ContentModal>
                    <Close src={close} onClick={() => { setModal(false) }} />
                    <Text>
                        <span style={{ fontSize: '1.1vw', marginLeft: '1.5vw' }}>
                            Do you really want to delete your account?
                        </span>
                    </Text>
                    <div style={{ display: 'flex' }}>
                        <ModalButton onClick={() => { setModal(false) }}>
                            Cancel
                        </ModalButton>
                        <ModalButton confirm={true} onClick={DeleteAccount}>
                            {loadDel}
                        </ModalButton>
                    </div>
                </ContentModal>
            </Modal>
            <Footer />
            <LoadingModal visible={loading} />
        </App>
    );
}

export default Profile;