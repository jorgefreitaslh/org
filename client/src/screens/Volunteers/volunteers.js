import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';

//Style
import {
    App,
    Body,
    Top,
    Text,
    Button,
    Information,
    Title,
    TextInfo,
    Options,
    Option,
    Icon,
    Example,
    ImageUser,
    Space,
    Bottom,
    BottomTitle,
    Buttons
} from './style.js';

import '../../index.css';

//Components
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

//Images
import business from '../../assets/img/business.svg';
import love from '../../assets/img/love.svg';
import users from '../../assets/img/users.svg';
import more from '../../assets/img/more.svg';
import create from '../../assets/img/edit-tools.svg';
import social from '../../assets/img/social-media.svg';

function Volunteers() {

    document.title = 'Volunteer Your Skills | Org';
    const history = useHistory();

    const [learners, setVolunteers] = useState([]);

    useEffect(async () => {
        const learners = await axios.get(`/api/learners/`)
        setVolunteers(learners.data.learners)
        console.log(learners)
    }, [])

    return (
        <App>
            <Body>
                <Top dois={true}>
                    <Text dontclick={true}>
                        <span style={{ fontFamily: 'FilsonBold', fontWeight: 900 }}>
                            Pass on knowledge<br />
                            make better people.
                        </span>
                    </Text>
                    <Text dontclick={true} size={true}>
                        Help smaller companies go digital. With your skills you can make<br />
                        a total difference in the future of a small business.
                    </Text>
                    <Button onClick={() => {
                        history.push('/volunteer-signup')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                        Be a volunteer
                    </Button>
                </Top>
                <Information>
                    <Title>
                        Why help as a volunteer?
                    </Title>
                    <Options>
                        <Option left={true} down={true}>
                            <Icon src={love} />
                            <Title option={true} down={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Make a difference
                                </span>
                            </Title>
                            <TextInfo down={true}>
                                Without essential digital skills, many small organisations will be left behind. Your help can make a real impact.
                            </TextInfo>
                        </Option>
                        <Option down={true}>
                            <Icon src={business} />
                            <Title option={true} down={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Meet other experts
                                </span>
                            </Title>
                            <TextInfo down={true}>
                                Connect with a network of experts from top companies in tech, consulting and finance.
                            </TextInfo>
                        </Option>
                        <Option down={true}>
                            <Icon src={users} />
                            <Title option={true} down={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Pursue your passion
                                </span>
                            </Title>
                            <TextInfo down={true}>
                                Match with charities and businesses that you feel strongly about, and help them thrive.
                            </TextInfo>
                        </Option>
                    </Options>
                </Information>
                <Top>
                    <Title color={true}>
                        How it works?
                    </Title>
                    <Text dontclick={true} size={true}>
                        It's easy to become a volunteer, just follow some instructions.
                    </Text>
                    <Options>
                        <Option width={true} left={true}>
                            <Title>
                                <span style={{ color: '#afe097', fontSize: '4vw', marginBottom: '-2vw' }}>
                                    01
                                </span>
                            </Title>
                            <Title down={true}>
                                <span style={{ backgroundColor: '#afe097', color: '#FFF' }}>
                                    About you
                                </span>
                            </Title>
                            <TextInfo down={true} color={true}>
                                Sign up fill in some data, we will ask some questions about your experience and skills.                            </TextInfo>
                        </Option>
                        <Option width={true} left={true}>
                            <Title>
                                <span style={{ color: '#afe097', fontSize: '4vw', marginBottom: '-2vw' }}>
                                    02
                                </span>
                            </Title>
                            <Title down={true}>
                                <span style={{ backgroundColor: '#afe097', color: '#FFF' }}>
                                    Choose who you will mentor
                                </span>
                            </Title>
                            <TextInfo down={true} color={true}>
                                Once you've signed up, you'll receive mentoring requests based on the subjects you've indicated you could be a mentor. You decide who will help based on your availability and we inform you that you have accepted the requests.
                            </TextInfo>
                        </Option>
                        <Option width={true} left={true}>
                            <Title>
                                <span style={{ color: '#afe097', fontSize: '4vw', marginBottom: '-2vw' }}>
                                    03
                                </span>
                            </Title>
                            <Title down={true}>
                                <span style={{ backgroundColor: '#afe097', color: '#FFF' }}>
                                    Adjust your terms
                                </span>
                            </Title>
                            <TextInfo down={true} color={true}>
                                You decide how much and how long you would like to be involved with Org. Schedule and plan Org Calls on a flexible basis.
                            </TextInfo>
                        </Option>
                    </Options>
                    <TextInfo
                        color={true}
                        button={true}
                        onClick={() => {
                            history.push('/volunteer-signup')
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}>
                        <span style={{ borderBottom: '0.1vw solid #afe097' }}>
                            Sign up to volunteer
                        </span>
                    </TextInfo>
                </Top>
                <Information size={true}>
                    <Title>
                        These are the areas you can help.
                    </Title>
                    <Text dontclick={true} size={true} color={true}>
                        Do you specialize in one of the following areas? many small businesses and charities need your help
                    </Text>
                    <Options>
                        <Option width={true} height={true} left={true}>
                            <Icon src={social} />
                            <Title option={true} down={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Digital marketing
                                </span>
                            </Title>
                            <TextInfo down={true}>
                                Paid social marketing
                            </TextInfo>
                            <TextInfo down={true}>
                                Google Ads
                            </TextInfo>
                            <TextInfo down={true}>
                                Facebook Ads
                            </TextInfo>
                            <TextInfo down={true}>
                                Search engine optimisation
                            </TextInfo>
                            <TextInfo down={true}>
                                Email marketing
                            </TextInfo>
                            <TextInfo down={true}>
                                Marketing automation
                            </TextInfo>
                            <TextInfo down={true}>
                                B2B sales/ marketing
                            </TextInfo>
                            <TextInfo down={true}>
                                Conversion rate optimisation
                            </TextInfo>
                            <Space size={true} />
                            <TextInfo
                                button={true}
                                onClick={() => {
                                    history.push('/volunteer-signup')
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}>
                                <span style={{ borderBottom: '0.1vw solid #afe097' }}>
                                    I am an expert in digital marketing
                                </span>
                            </TextInfo>
                        </Option>
                        <Option width={true} left={true} height={true}>
                            <Icon src={create} />
                            <Title option={true} down={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    Design & Brand
                                </span>
                            </Title>
                            <TextInfo down={true}>
                                Visual design
                            </TextInfo>
                            <TextInfo down={true}>
                                User experience design
                            </TextInfo>
                            <TextInfo down={true}>
                                Website development
                            </TextInfo>
                            <TextInfo down={true}>
                                E-Commerce website
                            </TextInfo>
                            <TextInfo down={true}>
                                Branding & logos
                            </TextInfo>
                            <TextInfo down={true}>
                                Market/ user research
                            </TextInfo>
                            <Space size={true} />
                            <TextInfo
                                button={true}
                                onClick={() => {
                                    history.push('/volunteer-signup')
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}>
                                <span style={{ borderBottom: '0.1vw solid #afe097' }}>
                                    I am an expert in desing & brand
                                </span>
                            </TextInfo>
                        </Option>
                        <Option width={true} left={true} height={true}>
                            <Icon src={more} size={true} />
                            <Title option={true} down={true}>
                                <span style={{ backgroundColor: '#afe097' }}>
                                    ...and more
                                </span>
                            </Title>
                            <TextInfo down={true}>
                                Content strategy
                            </TextInfo>
                            <TextInfo down={true}>
                                Fundraising
                            </TextInfo>
                            <TextInfo down={true}>
                                Public relations
                            </TextInfo>
                            <TextInfo down={true}>
                                Product management
                            </TextInfo>
                            <TextInfo down={true}>
                                Remote operations
                            </TextInfo>
                            <TextInfo down={true}>
                                Human resources
                            </TextInfo>
                            <TextInfo down={true}>
                                Logistics
                            </TextInfo>
                            <TextInfo down={true}>
                                Customer service
                            </TextInfo>
                            <Space size={true} />
                            <TextInfo
                                button={true}
                                onClick={() => {
                                    history.push('/volunteer-signup')
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}>
                                <span style={{ borderBottom: '0.1vw solid #afe097' }}>
                                    I am an expert in one of these
                                </span>
                            </TextInfo>
                        </Option>
                    </Options>
                </Information>
                <Top>
                    <Title color={true}>
                        Your help is welcome.
                    </Title>
                    <Text dontclick={true} size={true}>
                        These are some of our students' options on what someone with skills can use.
                    </Text>
                    <Slider
                        speed={1000}
                    >
                        {learners.length > 0 ? learners.slice(0, 3).map(item => (
                            <div>
                                <Example>
                                    <ImageUser src={item.image} />
                                    <Title>
                                        <span style={{ marginLeft: '10vw', backgroundColor: '#afe097', fontSize: '1.3vw' }}>
                                            {item.firstName} {item.lastName}, {item.businessRole} of {item.businessName}<br />
                                        </span>
                                    </Title>
                                    <Space />
                                    <Text size={true} dontclick={true}>
                                        <span style={{ marginLeft: '10vw', fontSize: '1.2vw' }}>
                                            "We manage to learn and have access to people with a lot of experience, who know what they do."<br />
                                        </span>
                                    </Text>
                                    <Space size={true} />
                                    <TextInfo
                                        button={true}
                                        color={true}
                                        onClick={() => {
                                            history.push({
                                                pathname: '/business-signup',
                                                state: {
                                                    login: false
                                                }
                                            })
                                            window.scrollTo({ top: 0, behavior: 'smooth' })
                                        }}>
                                        <span style={{ marginLeft: '10vw', borderBottom: '0.1vw solid #afe097' }}>
                                            Sign up for free support
                                        </span>
                                    </TextInfo>
                                </Example>
                            </div>
                        )) : null}
                    </Slider>
                </Top>
                <Bottom>
                    <BottomTitle>
                        Are we going to make the market more digital? <br />
                        Help with your skills or<br />
                        digitizing your company
                    </BottomTitle>
                    <Buttons>
                        <Button
                            down={true}
                            onClick={() => {
                                history.push('/volunteer-signup')
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}>
                            Become a volunteer
                        </Button>
                        <Button
                            left={true}
                            down={true}
                            onClick={() => {
                                history.push({
                                    pathname: '/business-signup',
                                    state: {
                                        login: false
                                    }
                                })
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}>
                            Be supported by an expert
                        </Button>
                    </Buttons>
                </Bottom>
            </Body>
            <Header />
            <Footer />
        </App>
    );
}

export default Volunteers;
