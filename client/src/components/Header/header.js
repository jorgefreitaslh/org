import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

//Style
import {
    Div,
    Logo,
    TxtHeader,
    Txt,
    Button,
    Modal,
    Sign,
    SignUp,
    SignUpDiv,
    Space,
    Label,
    Form,
    SignButton,
    Close
} from './style.js';

//Image
import logo from '../../assets/img/logoheader.png';
import close from '../../assets/img/close.svg';
import loading from '../../assets/img/load.gif';

function Header() {

    const history = useHistory();
    const [show, setShow] = useState(false);
    const [sign, setSign] = useState(false);
    const [type, setType] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState('LOGIN');
    const [erro, setErro] = useState('');

    const handleChangeEmail = e => {
        setEmail(e.target.value);
        if (email) setErro('');
    }

    const handleChangePassword = e => {
        setPassword(e.target.value);
        if (password) setErro('');
    }

    const ValidateEmail = () => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false) {
            setErro('Invalid email')
            return false
        } else {
            return true
        }
    }

    const ValidateLogin = () => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(password) === false) {
            setErro('Enter a password with 8 characters, 1 upper case, letters and numbers')
            return false
        } else {
            return true
        }
    }

    const Login = async () => {
        setLoad(<img src={loading} style={{ width: '1.5vw' }} alt="loader" />)
        if (
            ValidateEmail() &&
            ValidateLogin()
        ) {
            const login = type === 'volunteer' ? await axios.get(`/api/volunteers/${email}`) : await axios.get(`/api/learners/${email}`)
            const user = type === 'volunteer' ? login.data.volunteer : login.data.learner;
            console.log(login)
            if (type === 'volunteer' ? login.data === 'Volunteer not found' : login.data === 'Learner not found') {
                setErro('Unregistered email')
                setLoad('LOGIN')
            } else {
                const auth = user.password;
                const id = user.email;
                if (auth === password) {
                    history.push({
                        pathname: type === 'volunteer' ? '/volunteer-dashboard' : '/business-dashboard',
                        state: {
                            email: id,
                            type: type
                        }
                    })
                } else {
                    setErro('Wrong password')
                    setLoad('LOGIN')
                }
            }
        } else {
            setLoad('LOGIN')
        }
    }

    return (
        <Div>
            <Logo
                src={logo}
                onClick={() => {
                    history.push('/')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }} />
            <TxtHeader>
                <Txt onClick={() => {
                    history.push('/volunteers')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }}>
                    Volunteers
                </Txt>
                <Txt onClick={() => {
                    history.push('/about-us')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }}>
                    About us
                </Txt>
                <Txt onClick={() => { show === true ? setShow(false) : setShow(true) }}>
                    Login
                </Txt>
            </TxtHeader>
            <Modal
                visible={show}
            >
                <Txt left={true} onClick={() => {
                    setSign(true)
                    setShow(false)
                    setType('business')
                }}>
                    Login as Learner
                </Txt>
                <Txt left={true} onClick={() => {
                    setSign(true)
                    setShow(false)
                    setType('volunteer')
                }}>
                    Login as Volunteer
                </Txt>
            </Modal>
            <Button
                onClick={() => {
                    history.push('/select')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }}>
                Sign up
                <span> </span>
                <span style={{ marginLeft: '0.4vw', fontFamily: 'Filson', color: '#afe097' }}>
                    - free
                </span>
            </Button>
            <Sign
                visible={sign}
            >
                <SignUpDiv>
                    <Close src={close} onClick={() => { setSign(false) }} />
                    <SignUp>
                        Im a {type === 'volunteer' ? 'Volunteer' : 'Learner'}!
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
                    <Space size={true} />
                    <SignButton onClick={Login}>
                        {load}
                    </SignButton>
                </SignUpDiv>
            </Sign>
        </Div>
    );
}

export default Header;