import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

//Style
import {
    App,
    Body,
    Image,
    Title,
    Arrow,
    Back,
    SubTitle,
    Skills,
    Skill,
    Options,
    Option,
    OptionImg,
    OptionText
} from './style.js';

//Components
import Header from '../../components/HeaderNav/header';
import Footer from '../../components/Footer/footer';

//Images
import marketing from '../../assets/img/marketing.jpeg';
import seta from '../../assets/img/seta.svg';
import example from '../../assets/img/example.webp';

function Workshop() {

    document.title = 'Org';
    const history = useHistory();
    const location = useLocation();

    return (
        <App>
            <Body>
                <Image src={marketing} />
                <Title>
                    <span style={{ backgroundColor: '#afe097' }}>
                        Digital Marketing<br />
                        Implementation
                    </span>
                </Title>
                <Arrow src={seta} />
                <Back onClick={() => {
                    history.push({
                        pathname: '/business-dashboard',
                        state: {
                            email: location.state.email,
                            type: 'business'
                        }
                    })
                }}>
                    Back to dashboard
                </Back>
                <SubTitle>
                    Skills we can help with:
                </SubTitle>
                <Skills>
                    <Skill>
                        <span style={{ backgroundColor: '#afe097', padding: '0.8vw 1.5vw' }}>
                            Conversion Rate Optimisation
                        </span>
                    </Skill>
                    <Skill>
                        <span style={{ backgroundColor: '#afe097', padding: '0.8vw 1.5vw' }}>
                            Google Ads
                        </span>
                    </Skill>
                    <Skill>
                        <span style={{ backgroundColor: '#afe097', padding: '0.8vw 1.5vw' }}>
                            Search Engine Optimisation
                        </span>
                    </Skill>
                    <Skill>
                        <span style={{ backgroundColor: '#afe097', padding: '0.8vw 1.5vw' }}>
                            Google Ads
                        </span>
                    </Skill>
                    <Skill>
                        <span style={{ backgroundColor: '#afe097', padding: '0.8vw 1.5vw' }}>
                            Email marketing
                        </span>
                    </Skill>
                    <Skill>
                        <span style={{ backgroundColor: '#afe097', padding: '0.8vw 1.5vw' }}>
                            Marketing Automation
                        </span>
                    </Skill>
                    <Skill>
                        <span style={{ backgroundColor: '#afe097', padding: '0.8vw 1.5vw' }}>
                            Digital Marketing Strategy
                        </span>
                    </Skill>
                    <Skill>
                        <span style={{ backgroundColor: '#afe097', padding: '0.8vw 1.5vw' }}>
                            Content Creation/Strategy
                        </span>
                    </Skill>
                </Skills>
                <SubTitle>
                    Free to help you on Digital Marketing Implementation:
                </SubTitle>
                <Options>
                    <Option left={true}>
                        <OptionImg src={example} />
                        <OptionText title={true}>
                            Promoting a Business - Promotions
                        </OptionText>
                        <div>
                            <OptionText underline={true}>
                                PRATICAL BUSINESS SKILLS
                            </OptionText>
                            <OptionText underline={true} left={true}>
                                ARTICLE
                            </OptionText>
                        </div>
                        <OptionText bottom={true}>
                            A promotion can last for a limited time, enticing customers to act quickly or miss out, or they can be longer term. Here are some tips to consider when deciding on deals and promotions.
                        </OptionText>
                    </Option>
                    <Option>
                        <OptionImg src={example} />
                        <OptionText title={true}>
                            Promoting a Business - Promotions
                        </OptionText>
                        <div>
                            <OptionText underline={true}>
                                PRATICAL BUSINESS SKILLS
                            </OptionText>
                            <OptionText underline={true} left={true}>
                                ARTICLE
                            </OptionText>
                        </div>
                        <OptionText bottom={true}>
                            A promotion can last for a limited time, enticing customers to act quickly or miss out, or they can be longer term. Here are some tips to consider when deciding on deals and promotions.
                        </OptionText>
                    </Option>
                    <Option>
                        <OptionImg src={example} />
                        <OptionText title={true}>
                            Promoting a Business - Promotions
                        </OptionText>
                        <div>
                            <OptionText underline={true}>
                                PRATICAL BUSINESS SKILLS
                            </OptionText>
                            <OptionText underline={true} left={true}>
                                ARTICLE
                            </OptionText>
                        </div>
                        <OptionText bottom={true}>
                            Advertising can be short-term for a special promotion or ongoing, but usually requires a financial investment. If you know advertising could help your business but you aren’t sure where to start, explore the marketing tips below to see which options fit your needs and budget.
                        </OptionText>
                    </Option>
                    <Option left={true}>
                        <OptionImg src={example} />
                        <OptionText title={true}>
                            Promoting a Business - Promotions
                        </OptionText>
                        <div>
                            <OptionText underline={true}>
                                PRATICAL BUSINESS SKILLS
                            </OptionText>
                            <OptionText underline={true} left={true}>
                                ARTICLE
                            </OptionText>
                        </div>
                        <OptionText bottom={true}>
                            A promotion can last for a limited time, enticing customers to act quickly or miss out, or they can be longer term. Here are some tips to consider when deciding on deals and promotions.
                        </OptionText>
                    </Option>
                    <Option>
                        <OptionImg src={example} />
                        <OptionText title={true}>
                            Promoting a Business - Promotions
                        </OptionText>
                        <div>
                            <OptionText underline={true}>
                                PRATICAL BUSINESS SKILLS
                            </OptionText>
                            <OptionText underline={true} left={true}>
                                ARTICLE
                            </OptionText>
                        </div>
                        <OptionText bottom={true}>
                            A promotion can last for a limited time, enticing customers to act quickly or miss out, or they can be longer term. Here are some tips to consider when deciding on deals and promotions.
                        </OptionText>
                    </Option>
                    <Option>
                        <OptionImg src={example} />
                        <OptionText title={true}>
                            Promoting a Business - Promotions
                        </OptionText>
                        <div>
                            <OptionText underline={true}>
                                PRATICAL BUSINESS SKILLS
                            </OptionText>
                            <OptionText underline={true} left={true}>
                                ARTICLE
                            </OptionText>
                        </div>
                        <OptionText bottom={true}>
                            A promotion can last for a limited time, enticing customers to act quickly or miss out, or they can be longer term. Here are some tips to consider when deciding on deals and promotions.
                        </OptionText>
                    </Option>
                </Options>
            </Body>
            <Header />
            <Footer />
        </App>
    );
}

export default Workshop;