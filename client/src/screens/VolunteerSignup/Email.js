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
    Space,
    ButtonUp
} from './style.js';

//Components
import Footer from '../../components/Footer/footer';

//Images
import logo from '../../assets/img/logoheader.png';

function WelcomeEmail() {

    const history = useHistory();
    const location = useLocation();

    const name = location.state.name;

    return (
        <App>
            <Body welcome={true} bottom={true}>
                <Logo src={logo} onClick={() => { history.push('/') }} />
                <Title>
                    Welcome {name}! Your registration was a success.
                </Title>
                <Space />
                <Bottom welcome={true}>
                    <Text>Now we just need you to check your email, as we sent you a confirmation email.</Text>
                    <Space />
                    <ButtonUp
                        welcome={true}
                        onClick={() => history.push({
                            pathname: '/volunteer-profile',
                            state: {
                                type: 'volunteer',
                                email: location.state.email
                            }
                        })}>
                        View Your Profile
                    </ButtonUp>
                </Bottom>
            </Body>
            <Footer />
        </App>
    );
}

export default WelcomeEmail;