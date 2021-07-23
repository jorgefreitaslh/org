import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

//Style
import {
    App,
    Body,
    Logo,
    Title,
    Space,
    Label,
    Input,
    Radio,
    Bottom,
    Text,
    Button
} from './style.js';

//Images
import logo from '../../assets/img/logoheader.png'
import loader from '../../assets/img/load.gif';

function SignUp() {

    document.title = 'Org Volunteer';
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [on, setOn] = useState(false);
    const [off, setOff] = useState(true);
    const [newArray, setArray] = useState([]);

    const [Loader, setLoader] = useState('Sign up');
    const [erro, setErro] = useState('');

    useEffect(async () => {
        const get = await axios.get(`/api/volunteers/`)
        const volunteers = get.data.volunteers
        return volunteers.length > 0 ? volunteers.map(item => (
            newArray.push(item.email)
        ))
            :
            null
    }, [newArray])

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
            setErro('Enter a password with 8 characters, 1 upper case, letters and numbers');
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
        setLoader(<img src={loader} style={{ width: '1.5vw' }} alt="loaderconfirm" />)
        const body = {
            email: email,
            password: password
        }
        const register = await axios.post('/api/volunteers/', (body));
        if (register) {
            history.push({
                pathname: '/volunteer-welcome',
                state: {
                    email: email
                }
            })
        } else {
            setLoader('Sign up')
        }
    }

    return (
        <App>
            <Body welcome={true} top={true}>
                <Logo src={logo} onClick={() => { history.push('/') }} />
                <Title>
                    Be a volunteer, sign up now
                </Title>
                <Space>{erro}</Space>
                <Label>Email address:</Label>
                <Input
                    placeholder="Email address"
                    type='text'
                    value={email}
                    onChange={handleChangeEmail}
                />
                <Label>Set a password:</Label>
                <Input
                    placeholder="Set a secure password"
                    type='password'
                    value={password}
                    onChange={handleChangePassword}
                />
                <Label>Confirm password:</Label>
                <Input
                    placeholder="Confirm your password"
                    type='password'
                    value={confirm}
                    onChange={handleChangeConfirm}
                />
                <Space size={true} />
                <Bottom>
                    <Radio
                        type='checkbox'
                        onChange={ON}
                        checked={on}
                    />
                    <Text>
                        <Text>
                            I agree to the Organizacao
                        </Text>
                        <Text click={true} left={true}>
                            User Agreement,
                        </Text>
                        <Text click={true} left={true}>
                            Privacy Policy
                        </Text>
                        <Text left={true}>
                            and
                        </Text>
                        <Text click={true} left={true}>
                            Cookie Policy
                        </Text>
                    </Text>
                </Bottom>
                <Space size={true} />
                <Button disabled={off} on={on} onClick={Signup}>Sign up</Button>
            </Body>
        </App>
    );
}

export default SignUp;