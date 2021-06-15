import React from 'react';
import { useHistory } from 'react-router-dom';

//Style
import {
    Div,
    Text,
    Social,
    SocialMedia,
    Logo
} from './style.js';

//Image
import logo from '../../assets/img/logo.png';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import linkedin from '../../assets/img/linkedin.svg';
import youtube from '../../assets/img/youtube.svg';

function header() {

    const history = useHistory();

    return (
        <Div>
            <Div width={true}>
                <Logo src={logo} />
                <Text>
                    Org 2021<br />
                    All rights reserved
                </Text>
            </Div>
            <Div width={true}>
                <Text
                    button={true}
                    onClick={() => {
                        history.push('/volunteers')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                    Volunteers
                </Text>
                <Text
                    button={true}
                    onClick={() => {
                        history.push('/about-us')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                    About us
                </Text>
                <Text
                    button={true}
                    onClick={() => {
                        history.push('/select')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                    Sign up
                </Text>
            </Div>
            <Social>
                <Text>Social media</Text>
                <div>
                    <SocialMedia src={facebook} />
                    <SocialMedia src={instagram} />
                    <SocialMedia src={youtube} top={true} />
                    <SocialMedia src={linkedin} />
                </div>
            </Social>
        </Div>
    );
}

export default header;