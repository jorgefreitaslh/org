import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import axios from 'axios';

//Style
import {
    Div,
    Logo,
    TxtHeader,
    Txt,
    Seta,
    Modal,
    Menu
} from './style.js';

//Components
import ImageUser from '../ImageUser/ImageUser';

//Image
import logo from '../../assets/img/logoheader.png';
import down from '../../assets/img/down.png';
import up from '../../assets/img/up.png';

function Header() {

    const history = useHistory();
    const location = useLocation();

    const user_id = location.state.email;
    const type = location.state.type;

    const [seta, setSeta] = useState(down);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    useEffect(async () => {
        const user_data = type === 'volunteer' ? await axios.get(`/api/volunteers/${user_id}`) : await axios.get(`/api/learners/${user_id}`);
        const user = type === 'volunteer' ? user_data.data.volunteer : user_data.data.learner;
        setName(user.firstName)
        if (show === true) {
            setSeta(up)
        } else {
            setSeta(down)
        }
    }, [show])

    return (
        <Div>
            <Logo src={logo} onClick={() => history.push('/')} />
            {
                type === 'business' ?
                    <div style={{ marginTop: '0.5vw', marginLeft: '67vw', position: 'absolute' }}>
                        <Txt business={true} onClick={() => {
                            history.push({
                                pathname: '/business-dashboard',
                                state: {
                                    email: location.state.email,
                                    type: 'business'
                                }
                            })
                        }}>
                            Dashboard
                        </Txt>
                        <span style={{ color: '#ecf0f1' }}>..</span>
                        <Txt business={true} onClick={() => {
                            history.push({
                                pathname: '/business-signup',
                                state: {
                                    login: true,
                                    type: 'business',
                                    email: location.state.email
                                }
                            })
                        }}>
                            Mentoring
                        </Txt>
                        <span style={{ color: '#ecf0f1' }}>....</span>  |
                    </div>
                    :
                    <div style={{ marginTop: '0.5vw', marginLeft: '74vw', position: 'absolute' }}>
                        <Txt business={true} onClick={() => {
                            history.push({
                                pathname: '/volunteer-dashboard',
                                state: {
                                    email: location.state.email,
                                    type: 'volunteer'
                                }
                            })
                        }}>
                            Dashboard
                        </Txt>
                        <span style={{ color: '#ecf0f1' }}>....</span>  |
                    </div>
            }
            <TxtHeader onClick={() => {
                show === true ?
                    setShow(false)
                    :
                    setShow(true)
            }}>
                <ImageUser
                    Style={{
                        width: '2vw',
                        height: '2vw',
                        borderRadius: '1vw',
                        marginTop: '0.6vw',
                        backgroundColor: '#35363a'
                    }}
                />
                <Txt>{name}</Txt>
                <Seta src={seta} />
            </TxtHeader>
            <Modal
                visible={show}
            >
                {
                    type === 'business' ?
                        <text style={{ backgroundColor: '#ecf0f1' }}>
                            <Menu onClick={() => history.push({
                                pathname: '/business-dashboard',
                                state: {
                                    email: location.state.email,
                                    type: 'business'
                                }
                            })}>
                                Dashboard
                            </Menu><br />
                            <Menu onClick={() => history.push({
                                pathname: '/volunteer-profile',
                                state: {
                                    email: location.state.email,
                                    type: 'business'
                                }
                            })}>
                                Account
                            </Menu><br />
                            <Menu onClick={() => history.push('/')} >Logout</Menu>
                        </text>
                        :
                        <text style={{ backgroundColor: '#ecf0f1' }}>
                            <Menu onClick={() => history.push({
                                pathname: '/volunteer-dashboard',
                                state: {
                                    email: location.state.email,
                                    type: 'volunteer'
                                }
                            })}>
                                Dashboard
                            </Menu><br />
                            <Menu onClick={() => history.push({
                                pathname: '/volunteer-profile',
                                state: {
                                    email: location.state.email,
                                    type: 'volunteer'
                                }
                            })}>
                                Account
                            </Menu><br />
                            <Menu onClick={() => history.push({
                                pathname: '/',
                                state: {
                                    email: ''
                                }
                            })} >
                                Logout
                            </Menu>
                        </text>
                }
            </Modal>
        </Div >
    );
}

export default Header;