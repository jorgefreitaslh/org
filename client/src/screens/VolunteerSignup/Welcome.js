import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

//Style
import {
    App,
    Body,
    Logo,
    Title,
    Bottom,
    Text,
    Space
} from './style.js';

//Components
import Footer from '../../components/Footer/footer';

//Images
import logo from '../../assets/img/logoheader.png';

function Welcome() {

    const history = useHistory();
    const location = useLocation();

    return (
        <App>
            <Body welcome={true} bottom={true}>
                <Logo src={logo} onClick={() => { history.push('/') }} />
                <Title welcome={true}>
                    Welcome!<br />
                    Let's set your profile...
                </Title>
                <Space />
                <Bottom>
                    <Text>
                        <Text>
                            we need some more information from you<br />
                            to complete your registration and you can be a volunteer.
                        </Text>
                        <Space />
                        <Text click={true} onClick={() => {
                            history.push({
                                pathname: '/volunteer-profile-create',
                                state: {
                                    email: location.state.email
                                }
                            })
                        }}>
                            Click here to setup your profile!
                    </Text>
                    </Text>
                </Bottom>
            </Body>
            <Footer />
        </App>
    );
}

export default Welcome;