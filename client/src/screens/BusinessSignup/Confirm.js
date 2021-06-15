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
    ConfirmLine,
    BottomConfirm,
    ButtonConfirm,
    Ball,
    Top,
    Div,
    Line,
    Option
} from './style.js';

//Components
import Footer from '../../components/Footer/footer';

//Images
import logo from '../../assets/img/logoheader.png';

function Confirm() {

    const history = useHistory();
    const location = useLocation();

    return (
        <App>
            <Body welcome={true} bottom={true}>
                <Logo src={logo} onClick={() => { history.push('/') }} />
                <Top>
                    <Div>
                        <Title>
                            Confirm Request
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
                        <Line select={true} />
                        <Option>
                            <Ball select={true}>
                                <Text select={true}>
                                    2
                                </Text>
                            </Ball>
                            <Text>
                                Availability
                            </Text>
                        </Option>
                        <Line select={true} />
                        <Option>
                            <Ball select={true}>
                                <Text select={true}>
                                    3
                                </Text>
                            </Ball>
                            <Text>
                                Details
                            </Text>
                        </Option>
                        <Line select={true} />
                        <Option>
                            <Ball select={true}>
                                <Text select={true}>
                                    4
                            </Text>
                            </Ball>
                            <Text>
                                Confirm
                        </Text>
                        </Option>
                    </Div>
                </Top>
                <ConfirmLine color={true} />
                <Title>
                    Ok, jota!
                </Title>
                <Space />
                <Bottom>
                    <Text confirm={true}>
                        <Text>
                            You will now have received a confirmation email of your request, and your mentor has received a 1-to-1 mentoring call request for that time. We will confirm your call date within 24 hours. <br /> <br />
                            In the meantime, we recommend requesting another call on a different subject that is on your mind with a different mentor - it always helps to get a second opinion.<br /> <br />
                            Or finish filling out your account settings to improve your mentoring experience.
                        </Text>
                        <Space />
                    </Text>
                </Bottom>
                <BottomConfirm>
                    <ButtonConfirm color={true} onClick={() => {
                        history.push({
                            pathname: '/business-signup',
                            state: {
                                login: true,
                                type: 'business',
                                email: location.state.email
                            }
                        })
                    }}>
                        Request Another Call
                    </ButtonConfirm>
                    <ButtonConfirm onClick={() => {
                        history.push({
                            pathname: '/business-dashboard',
                            state: {
                                type: 'business',
                                email: location.state.email
                            }
                        })
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                        Go to Dashboard
                    </ButtonConfirm>
                </BottomConfirm>
            </Body>
            <Footer />
        </App>
    );
}

export default Confirm;