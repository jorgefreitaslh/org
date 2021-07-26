import React from 'react';
import { useHistory } from 'react-router-dom';

//Style
import {
    App,
    Body,
    Top,
    Text,
    Information,
    Title,
    Info,
    Team,
    TeamInfo,
    ImageTeam
} from './style.js';

import '../../index.css';

//Components
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

//Images
import user from '../../assets/img/pp.jpeg';
import paulo from '../../assets/img/paulo.jpeg';
import jorge from '../../assets/img/jorge.jpeg';
import marco from '../../assets/img/marco.jpeg';
import vini from '../../assets/img/vini.jpeg';

function AboutUs() {

    document.title = 'About Us | Org';
    const history = useHistory();

    return (
        <App>
            <Body>
                <Top dois={true}>
                    <Text>
                        We are an organization of people with<br />
                        digital skills who are willing to help small businesses and charities improve their<br />
                        skills and grow.
                    </Text>
                </Top>
                <Information>
                    <Title>
                        <span style={{ backgroundColor: '#afe097' }}>
                            Our Mission
                        </span>
                    </Title>
                    <Info>
                        Our Mission is simple: to help charities and small businesses get the essential digital skills they need to grow their revenues and be more productive.<br />
                        How we do it? We match organisations who need to upskill with digital experts for free one-to-one mentoring, as well as personalised recommendations for courses, workshops and resources.
                    </Info>
                </Information>
                <Information>
                    <Title>
                        <span style={{ backgroundColor: '#afe097' }}>
                            Our Story
                        </span>
                    </Title>
                    <Info>
                        As the Covid-19 crisis started to unfold, we were amazed by the amount of volunteers who joined the NHS. We realised that thousands of smaller organisations - like businesses, charities and social enterprises - also needed their own small army of volunteers.<br /> <br />

                        According to recent research from NatWest, small businesses and charities represent a powerful engine of economic growth, with the potential to deliver as much as £140bn in gross value added (GVA) to the UK economy by 2030 – and to create 3.2m jobs over the same period. But on average, they are significantly less productive than larger firms and need new digital ways of working to overcome this gap.<br /> <br />

                        From building a website, to launching digital advertising, to implementing the right software, many could do with a hand from experts who've done this all before.<br /><br />

                        That's why we launched Digital Boost. We believe we have a duty to help smaller organisations, and that many professionals with digital skills feel the same way.<br /><br />
                    </Info>
                </Information>
                <Information>
                    <Title>
                        <span style={{ backgroundColor: '#afe097' }}>
                            Our Team
                        </span>
                    </Title>
                    <Info>
                        Digital Boost is a subsidiary of leading educational charity Founders4Schools. Our leadership team has the ambition to bring together organisations in need with digital experts volunteers for the greater good.
                    </Info>
                    <Team>
                        <TeamInfo>
                            <ImageTeam src={paulo} />
                            <Title team={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Paulo Sergio
                                </span>
                            </Title>
                            <Info size={true} margin={true}>
                                Seller
                            </Info>
                            <Info>
                                Seller Experience Strategy team serves as an internal consultant to measure...
                            </Info>
                            <Info
                                top={true}
                                click={true}
                                onClick={() => {
                                    history.push('/team')
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}>
                                <span style={{ borderBottom: '0.1vw solid #afe097' }}>
                                    Read More
                                </span>
                            </Info>
                        </TeamInfo>
                        <TeamInfo>
                            <ImageTeam src={jorge} />
                            <Title team={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Jorge Freitas
                                </span>
                            </Title>
                            <Info size={true} margin={true}>
                                Developer
                            </Info>
                            <Info>
                                Develop, test and implement new software programs. Clearly and regularly communicate...
                            </Info>
                            <Info
                                top={true}
                                click={true}
                                onClick={() => {
                                    history.push('/team')
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}>
                                <span style={{ borderBottom: '0.1vw solid #afe097' }}>
                                    Read More
                                </span>
                            </Info>
                        </TeamInfo>
                    </Team>
                </Information>
                <Information>
                    <Title team={true}>
                        Our Board of Directors
                    </Title>
                    <Team>
                        <TeamInfo>
                            <ImageTeam src={marco} />
                            <Title team={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Marco Carvalho
                                </span>
                            </Title>
                            <Info topper={true} size={true}>
                                Chairman of the board, Digital Boost; Internationally recognised Chief Commercial Officer
                            </Info>
                        </TeamInfo>
                        <TeamInfo>
                            <ImageTeam src={vini} />
                            <Title team={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Vinicius Vitti
                                </span>
                            </Title>
                            <Info topper={true} size={true}>
                                Chairman of the board, Digital Boost; Internationally recognised Chief Commercial Officer
                            </Info>
                        </TeamInfo>
                    </Team>
                </Information>
                <Information>
                    <Title team={true}>
                        Our Direction
                    </Title>
                    <Info>
                        We are grateful to have the guidance and support of leaders from across a range of sectors and organisations.
                    </Info>
                    <Team>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                John Jones
                            </Title>
                            <Info size={true} topper={true}>
                                National Head of Dispute Resolution & Litigation, Shoosmiths
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Anderson Silva
                            </Title>
                            <Info size={true} topper={true}>
                                Local Digital Skills Partnerships, DCMS
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Mac Miller
                            </Title>
                            <Info size={true} topper={true}>
                                Founder, Enders Analysis
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Tio Patinhas
                            </Title>
                            <Info size={true} topper={true}>
                                Founder, Tech Pixies
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Raffa Moreira
                            </Title>
                            <Info size={true} topper={true}>
                                Director of Women in Business, NatWest Group
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Bufalo Bill
                            </Title>
                            <Info size={true} topper={true}>
                                Entrepreneur and best-selling author
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Jack Chan
                            </Title>
                            <Info size={true} topper={true}>
                                Board Director, BenevolentAI
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Carol Denvers
                            </Title>
                            <Info size={true} topper={true}>
                                Group Director of Digital Impact, BT
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Steve Rogers
                            </Title>
                            <Info size={true} topper={true}>
                                CEO Europe Cluster and Member of Group Executive Committee, Vodafone
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Logan Paul
                            </Title>
                            <Info size={true} topper={true}>
                                Chairman and Non-Exec Director and Chair of the Digital Skills Partnership, Chairman IQE PLC. Retired CEO and Chair of Cisco UK and Ireland
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Michael Jackson
                            </Title>
                            <Info size={true} topper={true}>
                                Head of Sales, Communication, Media, Education, and Information Services, Tata Consultancy Services
                            </Info>
                        </TeamInfo>
                        <TeamInfo size={true}>
                            <Title size={true} team={true}>
                                Will Smith
                            </Title>
                            <Info size={true} topper={true}>
                                Diversity & Inclusion Manager, KTN
                            </Info>
                        </TeamInfo>
                    </Team>
                </Information>
            </Body>
            <Header />
            <Footer />
        </App>
    );
}

export default AboutUs;
