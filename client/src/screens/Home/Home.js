import React from 'react';
import { useHistory } from 'react-router-dom';

//Style
import {
  App,
  Body,
  Top,
  Text,
  Title,
  Button,
  Information,
  TextInfo,
  Options,
  Option,
  Icon,
  Bottom,
  BottomTitle,
  Buttons
} from './style.js';

//Components
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

//Images
import mentor from '../../assets/img/mentor.svg';
import book from '../../assets/img/book.svg';
import web from '../../assets/img/website.svg';
import more from '../../assets/img/more.svg';
import create from '../../assets/img/edit-tools.svg';
import social from '../../assets/img/social-media.svg';

function Home() {

  document.title = 'Org | Free Mentoring';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const history = useHistory();

  return (
    <App>
      <Header />
      <Body>
        <Top>
          <Text dontclick={true}>
            <span style={{ fontFamily: 'FilsonBold', fontWeight: 900 }}>
              Free mentoring
            </span>
            , by video<br />
            or phone calls helping you<br />
            with your digitization.<br /></Text>
          <Text dontclick={true} size={true}>Talk to someone who can help you, just dial your call.</Text>
          <Button onClick={() => {
            history.push({
              pathname: '/business-signup',
              state: {
                login: false
              }
            })
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            Schedule your
            <span style={{ marginLeft: '0.4vw', fontFamily: 'Filson', color: '#3e9ad9' }}>
              free call
            </span>
          </Button>
          <Text
            size={true}
            underline={true}
            onClick={() => {
              history.push('/volunteer-signup')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
            If you have experience in the area, be a volunteer and register here.
          </Text>
        </Top>
        <Information>
          <Title>
            What can ORG provide you with?
          </Title>
          <TextInfo>
            These are some of the options we have for you to improve your digital organization.
          </TextInfo>
          <Options>
            <Option left={true}>
              <Icon src={mentor} />
              <Title option={true}>
                <span style={{ backgroundColor: '#afe097' }}>
                  Mentoring
                </span>
              </Title>
              <TextInfo>
                Free 1-on-1 mentoring tailored to your needs
              </TextInfo>
              <TextInfo bold={true}>
                Speak one-on-one with a digital expert, who’ll provide you with practical help and advice in only 60 minutes.
              </TextInfo>
            </Option>
            <Option>
              <Icon src={book} />
              <Title option={true}>
                <span style={{ backgroundColor: '#afe097' }}>
                  Resource Library
                </span>
              </Title>
              <TextInfo>
                Some free resources for you and your business
              </TextInfo>
              <TextInfo bold={true}>
                To learn at your own pace with full access to our library of learning content from articles to online courses.
              </TextInfo>
            </Option>
            <Option>
              <Icon src={web} />
              <Title option={true}>
                <span style={{ backgroundColor: '#afe097' }}>
                  Webinars and Workshops
                </span>
              </Title>
              <TextInfo>
                Hands-on webinars to boost your business
              </TextInfo>
              <TextInfo bold={true}>
                Join our interactive masterclasses on SEO, Facebook Ads, payment systems and more.
              </TextInfo>
            </Option>
          </Options>
        </Information>
        <Information>
          <Title>
            What will the volunteers help with?
          </Title>
          <TextInfo>
            With their skills and experience, they gave you knowledge through calls or videos.
          </TextInfo>
          <Options>
            <Option left={true} down={true}>
              <Icon src={social} />
              <Title option={true} down={true}>
                <span style={{ backgroundColor: '#afe097' }}>
                  Get organized online
                </span>
              </Title>
              <TextInfo down={true}>
                Social media
              </TextInfo>
              <TextInfo down={true}>
                Marketing & sales
              </TextInfo>
              <TextInfo down={true}>
                Work optimization
              </TextInfo>
            </Option>
            <Option down={true}>
              <Icon src={create} />
              <Title option={true} down={true}>
                <span style={{ backgroundColor: '#afe097' }}>
                  Grow your organisation online
                </span>
              </Title>
              <TextInfo down={true}>
                E-commerce websites
              </TextInfo>
              <TextInfo down={true}>
                Branding & logos
              </TextInfo>
              <TextInfo down={true}>
                User research
              </TextInfo>
            </Option>
            <Option down={true} leftdown={true}>
              <Icon src={more} size={true} />
              <Title option={true} down={true}>
                <span style={{ backgroundColor: '#afe097' }}>
                  ...and more
                </span>
              </Title>
              <TextInfo down={true}>
                Remote working
              </TextInfo>
              <TextInfo down={true}>
                Content strategy
              </TextInfo>
              <TextInfo down={true}>
                ‍And more...
              </TextInfo>
            </Option>
          </Options>
          <TextInfo
            button={true}
            onClick={() => {
              history.push({
                pathname: '/business-signup',
                state: {
                  login: false
                }
              })
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
            <span style={{ borderBottom: '0.1vw solid #afe097' }}>
              Schedule your free call
            </span>
          </TextInfo>
        </Information>
        <Bottom>
          <BottomTitle>
            Come improve your digital business skills.
          </BottomTitle>
          <Buttons>
            <Button
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
              Get support from experts now
            </Button>
            <Button
              down={true}
              onClick={() => {
                history.push('/volunteer-signup')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}>
              Sign up to volunteer
            </Button>
          </Buttons>
        </Bottom>
      </Body>
      <Footer />
    </App>
  );
}

export default Home;
