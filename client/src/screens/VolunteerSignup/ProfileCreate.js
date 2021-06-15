import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import axios from 'axios';

//Style
import {
    App,
    Body,
    Section,
    Logo,
    Title,
    Photo,
    ButtonUp,
    InputUp,
    Image,
    Close,
    Question,
    Label,
    Input,
    Option,
    Buttons,
    Button,
    Selected,
    SelectOption,
    Space,
    Areas,
    Area,
    AreaOption,
    IconArea,
    AreaSelect,
    AreaText,
    Radio,
    Line,
    Number,
    Text
} from './style.js';

//Components
import Footer from '../../components/Footer/footer';

//Images
import logo from '../../assets/img/logoheader.png';
import x from '../../assets/img/remove.png';
import seta from '../../assets/img/proximo.png';

function ProfileCreate() {

    const history = useHistory();
    const location = useLocation();

    const email = location.state.email;
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [show, setShow] = useState('');
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [help, setHelp] = useState([]);
    const [custom, setCustom] = useState('');

    const [displayName, setdisplayName] = useState(false);
    const [displayExperience, setdisplayExperience] = useState(true);
    const [displayLocation, setdisplayLocation] = useState(true);
    const [displaySkills, setdisplaySkills] = useState(true);
    const [displayAvailability, setdisplayAvailability] = useState(true);
    const [on, setOn] = useState(false);
    const [on2, setOn2] = useState(false);
    const [on3, setOn3] = useState(false);
    const [on4, setOn4] = useState(false);
    const [on5, setOn5] = useState(false);
    const [off, setOff] = useState(true);
    const [off2, setOff2] = useState(true);
    const [off3, setOff3] = useState(true);
    const [off4, setOff4] = useState(true);
    const [off5, setOff5] = useState(true);
    const [reload, setReload] = useState(false);

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

    const ValidateCompany = () => {
        if (/^[a-zA-Z ]+$/.test(company) === false) {
            return false
        }
        return true
    }

    const ValidateRole = () => {
        if (/^[a-zA-Z ]+$/.test(role) === false) {
            return false
        }
        return true
    }

    useEffect(async () => {
        if (
            image !== '' &&
            ValidateName() &&
            ValidateLastName() &&
            document.querySelector('input[name=questions]:checked') !== null
        ) {
            setOn(true)
            setOff(false)
        } else {
            setOn(false)
            setOff(true)
        }
        if (ValidateCompany() && ValidateRole()) {
            setOn2(true)
            setOff2(false)
        } else {
            setOn2(false)
            setOff2(true)
        }
        if (country !== '' && region !== '') {
            setOn3(true)
            setOff3(false)
        } else {
            setOn3(false)
            setOff3(true)
        }
        if (help.length > 0) {
            setOn4(true)
            setOff4(false)
        } else {
            setOn4(false)
            setOff4(true)
        }
        if (custom !== '') {
            setOn5(true)
            setOff5(false)
        } else {
            setOn5(false)
            setOff5(true)
        }
        setHelp(help)
        setReload(false)
    }, [reload])

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
        setShow(true)
        setReload(true)
    }

    const handleChangeName = e => {
        setName(e.target.value);
        setReload(true)
    }

    const handleChangeLastName = e => {
        setLastName(e.target.value);
        setReload(true)
    }

    const handleChangeCompany = e => {
        setCompany(e.target.value);
        setReload(true)
    }

    const handleChangeRole = e => {
        setRole(e.target.value);
        setReload(true)
    }

    const NumberSelect = e => {
        setCustom(e.target.value);
        setReload(true)
    }

    const selectCountry = e => {
        setCountry(e);
        setReload(true)
    }

    const selectRegion = e => {
        setRegion(e);
        setReload(true)
    }

    const noneDigital = () => {
        if (document.getElementById('digital').style.display === 'flex') {
            document.getElementById('digital').style.display = 'none'
            document.getElementById('digital2').style.display = 'none'
            document.getElementById('digital3').style.display = 'none'
        } else {
            document.getElementById('digital').style.display = 'flex'
            document.getElementById('digital2').style.display = 'flex'
            document.getElementById('digital3').style.display = 'flex'
        }
    }

    const noneDesign = () => {
        if (document.getElementById('design').style.display === 'flex') {
            document.getElementById('design').style.display = 'none'
            document.getElementById('design2').style.display = 'none'
            document.getElementById('design3').style.display = 'none'
        } else {
            document.getElementById('design').style.display = 'flex'
            document.getElementById('design2').style.display = 'flex'
            document.getElementById('design3').style.display = 'flex'
        }
    }

    const SelectDigital = e => {
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

    const NextExperience = () => {
        setdisplayName(true)
        setdisplayExperience(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const NextLocation = () => {
        setdisplayExperience(true)
        setdisplayLocation(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const NextSkills = () => {
        setdisplayLocation(true)
        setdisplaySkills(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const NextAvailability = () => {
        setdisplaySkills(true)
        setdisplayAvailability(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const Infos = async () => {
        const body = {
            image: image,
            firstName: name,
            lastName: lastname,
            gender: document.querySelector('input[name=questions]:checked').value,
            company: company,
            role: role,
            country: country,
            state: region,
            skill: help,
            hour: custom,
            preference: ["All countries"],
            rate: 0
        }
        const update = await axios.put(`/api/volunteers/${email}`, (body));
        if (update) {
            history.push({
                pathname: '/volunteer-welcome-email',
                state: {
                    name: name,
                    email: email
                }
            })
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <App>
            <Body welcome={true} top={true}>
                <Logo src={logo} onClick={() => { history.push('/') }} />
                <Section display={displayName}>
                    <Title>
                        Ok! it's simple...
                    </Title>
                    <Title profile={true}>
                        Upload you photo
                    </Title>
                    <Photo>
                        <ButtonUp>
                            <InputUp onChange={handleChangeImage} type="file" accept=".jpg,.jpeg,.png" />
                            Upload photo
                        </ButtonUp>
                        <Image src={image} img={show} />
                        <Close
                            src={x}
                            img={show}
                            onClick={() => {
                                setShow(false)
                                setImage('')
                                setReload(true)
                            }}
                        />
                    </Photo>
                    <Question>
                        How should we call it?
                    </Question>
                    <Label input={true}>First Name</Label>
                    <Input
                        input={true}
                        placeholder="Yours first name"
                        type='text'
                        value={name}
                        onChange={handleChangeName}
                    />
                    <Label input={true}>Last Name</Label>
                    <Input
                        input={true}
                        placeholder="Yours last name"
                        type='text'
                        value={lastname}
                        onChange={handleChangeLastName}
                    />
                    <Label input={true}>Gender</Label>
                    <Option>
                        <Buttons left={true} type="radio" name="questions" value="Female" onClick={() => { setReload(true) }} />
                        <Question font={true}>Female</Question>
                        <Buttons left={true} type="radio" name="questions" value="Male" onClick={() => { setReload(true) }} />
                        <Question font={true}>Male</Question>
                        <Buttons left={true} type="radio" name="questions" value="Others" onClick={() => { setReload(true) }} />
                        <Question font={true}>Others/Does not wish to identify</Question>
                    </Option>
                    <Button
                        disabled={off}
                        on={on}
                        onClick={NextExperience}
                        profile={true}
                    >
                        Next:Experience
                    </Button>
                </Section>
                <Section display={displayExperience}>
                    <Title>
                        Welcome {name}!
                    </Title>
                    <Question>
                        Nos diga o nome da empresa que trabalha e o seu cargo atualmente. Isso podera ser alterado futuramente.
                    </Question>
                    <Label input={true}>Company Name</Label>
                    <Input
                        input={true}
                        placeholder="Enter your company's name"
                        type='text'
                        value={company}
                        onChange={handleChangeCompany}
                    />
                    <Label input={true}>Role Name</Label>
                    <Input
                        input={true}
                        placeholder="Ex: Digital Marketing Diretor"
                        type='text'
                        value={role}
                        onChange={handleChangeRole}
                    />
                    <Space />
                    <Button
                        disabled={off2}
                        on={on2}
                        onClick={NextLocation}
                        profile={true}
                    >
                        Next:Location
                    </Button>
                    <Text
                        click={true}
                        color={true}
                        onClick={() => {
                            setdisplayName(false)
                            setdisplayExperience(true)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    >
                        Back:Name
                    </Text>
                </Section>
                <Section display={displayLocation}>
                    <Title>
                        Where are you from, {name}?
                    </Title>
                    <Question>
                        Tell us the country and state where you live. This information will not be visible and can be changed at any time.
                    </Question>
                    <Label input={true}>Your Country</Label>
                    <CountryDropdown
                        value={country}
                        onChange={selectCountry}
                        classes="select-profile"
                    />
                    <Label input={true}>Your State</Label>
                    <RegionDropdown
                        country={country}
                        value={region}
                        onChange={selectRegion}
                        defaultOptionLabel="Select State"
                        classes="select-profile"
                    />
                    <Button
                        disabled={off3}
                        on={on3}
                        onClick={NextSkills}
                        profile={true}
                    >
                        Next:Skills
                    </Button>
                    <Text
                        click={true}
                        color={true}
                        onClick={() => {
                            setdisplayExperience(false)
                            setdisplayLocation(true)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    >
                        Back:Experience
                    </Text>
                </Section>
                <Section display={displaySkills}>
                    <Title>
                        Good {name}.Which area would you like to help?
                    </Title>
                    <Question>
                        Select what you would like to help small businesses with.
                    </Question>
                    <Selected>
                        {help.length > 0 ? help.map(item => (
                            <SelectOption>
                                <Question white={true}>
                                    {item}
                                </Question>
                            </SelectOption>
                        ))
                            :
                            null}
                    </Selected>
                    <Areas>
                        <Area>
                            <AreaOption img={'digital'} onClick={noneDigital}>
                                <IconArea src={seta} />
                                <Title profile={true} option={true}>
                                    Digital marketing implementation
                            </Title>
                            </AreaOption>
                            <AreaSelect id='digital'>
                                <Radio
                                    type='checkbox'
                                    value='Content creation and strategy'
                                    skill={true}
                                    onChange={SelectDigital}
                                />
                                <AreaText>Content creation and strategy</AreaText>
                            </AreaSelect>
                            <AreaSelect id='digital2'>
                                <Radio
                                    type='checkbox'
                                    value='Conversion rate optimization'
                                    skill={true}
                                    onChange={SelectDigital}
                                />
                                <AreaText>Conversion rate optimization</AreaText>
                            </AreaSelect>
                            <AreaSelect id='digital3'>
                                <Radio
                                    type='checkbox'
                                    value='Google Ads'
                                    skill={true}
                                    onChange={SelectDigital}
                                />
                                <AreaText>Google Ads</AreaText>
                            </AreaSelect>
                        </Area>
                        <Area>
                            <AreaOption img={'design'} onClick={noneDesign}>
                                <IconArea src={seta} />
                                <Title profile={true} option={true}>
                                    Desing and branding
                            </Title>
                            </AreaOption>
                            <AreaSelect id='design'>
                                <Radio
                                    type='checkbox'
                                    value='Brand and logos'
                                    skill={true}
                                    onChange={SelectDigital}
                                />
                                <AreaText>Brand and logos</AreaText>
                            </AreaSelect>
                            <AreaSelect id='design2'>
                                <Radio
                                    type='checkbox'
                                    value='Visual design'
                                    skill={true}
                                    onChange={SelectDigital}
                                />
                                <AreaText>Visual design</AreaText>
                            </AreaSelect>
                            <AreaSelect id='design3'>
                                <Radio
                                    type='checkbox'
                                    value='Website development'
                                    skill={true}
                                    onChange={SelectDigital}
                                />
                                <AreaText>Website development</AreaText>
                            </AreaSelect>
                        </Area>
                        <Area>
                            <AreaOption img='service'>
                                <IconArea src={seta} />
                                <Title profile={true} option={true}>
                                    Costumer service
                            </Title>
                            </AreaOption>
                        </Area>
                        <Area>
                            <AreaOption img={'ecommerce'}>
                                <IconArea src={seta} />
                                <Title profile={true} option={true}>
                                    E-commerce
                            </Title>
                            </AreaOption>
                        </Area>
                        <Area>
                            <AreaOption img={'ecommerce'}>
                                <IconArea src={seta} />
                                <Title profile={true} option={true}>
                                    E-commerce
                            </Title>
                            </AreaOption>
                        </Area>
                        <Area>
                            <AreaOption img={'ecommerce'}>
                                <IconArea src={seta} />
                                <Title profile={true} option={true}>
                                    E-commerce
                            </Title>
                            </AreaOption>
                        </Area>
                    </Areas>
                    <Button
                        disabled={off4}
                        on={on4}
                        onClick={NextAvailability}
                        profile={true}
                    >
                        Next:Availability
                    </Button>
                    <Text
                        click={true}
                        color={true}
                        onClick={() => {
                            setdisplayLocation(false)
                            setdisplaySkills(true)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    >
                        Back:Location
                    </Text>
                </Section>
                <Section display={displayAvailability}>
                    <Title>
                        We're almost {name}...
                    </Title>
                    <Question>
                        we need you to inform us now the number of hours you want to help per month, to schedule everything right.
                    </Question>
                    <Option hour={true}>
                        <Line>
                            <Buttons
                                left={true}
                                type="radio"
                                name="hours"
                                value="1"
                                onClick={() => {
                                    setReload(true)
                                    setCustom(1)
                                }}
                            />
                            <Question font={true} left={true}>1 hour per month</Question>
                        </Line>
                        <Line>
                            <Buttons
                                left={true}
                                type="radio"
                                name="hours"
                                value="2"
                                onClick={() => {
                                    setReload(true)
                                    setCustom(2)
                                }}
                            />
                            <Question font={true} left={true}>2 hours per month</Question>
                        </Line>
                        <Line>
                            <Buttons
                                left={true}
                                type="radio"
                                name="hours"
                                value="3"
                                onClick={() => {
                                    setReload(true)
                                    setCustom(3)
                                }}
                            />
                            <Question font={true} left={true}>5 hours per month</Question>
                        </Line>
                        <Line>
                            <Buttons
                                left={true}
                                type="radio"
                                name="hours"
                                value="4"
                                onClick={() => {
                                    setReload(true)
                                    setCustom(4)
                                }}
                            />
                            <Question font={true} left={true}>8 hours per month</Question>
                        </Line>
                        <Line>
                            <Buttons
                                left={true}
                                type="radio"
                                name="hours"
                                value="10"
                                onClick={() => {
                                    setReload(true)
                                    setCustom(10)
                                }}
                            />
                            <Question font={true} left={true}>10 hours per month</Question>
                        </Line>
                        <Line>
                            <Buttons
                                left={true}
                                type="radio"
                                name="hours"
                                value={custom}
                                onClick={() => {
                                    setReload(true)
                                }}
                            />
                            <Question font={true} left={true}>Custom </Question>
                            <Number type="number" onChange={NumberSelect} />
                            <Question font={true} left={true}>- hours per month</Question>
                        </Line>
                    </Option>
                    <Button
                        disabled={off5}
                        on={on5}
                        onClick={Infos}
                    >
                        Done
                    </Button>
                    <Text
                        click={true}
                        color={true}
                        onClick={() => {
                            setdisplaySkills(false)
                            setdisplayAvailability(true)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    >
                        Back:Skills
                    </Text>
                </Section>
            </Body>
            <Footer />
        </App >
    );
}

export default ProfileCreate;