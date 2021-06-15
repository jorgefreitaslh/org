import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    App,
    Body,
    Option,
    Icon,
    Title,
    Button
} from './style.js';

//Components
import Header from '../../components/Header/header';

//Images
import icon from '../../assets/img/icon.png';

function Select() {

    document.title = 'Sign Up for Org';
    const history = useHistory();
    return (
        <App>
            <Header />
            <Body>
                <Option onClick={() => {
                    history.push({
                        pathname: '/business-signup',
                        state: {
                            login: false
                        }
                    })
                }}>
                    <Icon src={icon} />
                    <Title>
                        If you have a small business or want to learn how
                        <span style={{ marginLeft: '0.4vw', backgroundColor: '#afe097' }}>to be digital</span>
                    </Title>
                    <Button>
                        Schedule your call
                    </Button>
                </Option>
                <Option left={true} onClick={() => history.push('/volunteer-signup')}>
                    <Icon src={icon} />
                    <Title>
                        If you have experience and want
                        <span style={{ marginLeft: '0.4vw', backgroundColor: '#afe097' }}>to be a volunteer</span>
                    </Title>
                    <Button button={true}>
                        Sign up here
                    </Button>
                </Option>
            </Body>
        </App>
    );
}

export default Select;
