import React from 'react';

//Style
import {
    App,
    Body,
    Center,
    Div,
    ImageTeam,
    Title,
    Info
} from './style.js';

import '../../index.css';

//Components
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

//Images
import user from '../../assets/img/pp.jpeg';

function Team() {

    document.title = 'Org Team';

    return (
        <App>
            <Body>
                <Center>
                    <Div>
                        <ImageTeam src={user} />
                    </Div>
                    <Div direita={true}>
                        <Title>
                            <span style={{ backgroundColor: '#afe097' }}>
                                Paulinho, Gay
                            </span>
                        </Title>
                        <Info bold={true}>
                            Founder
                        </Info>
                        <Info>
                            Sherry Coutu CBE has a deep understanding of the Digital Sector having been a serial entrepreneur, investor and non-exec director of companies, charities, and universities for the past 25 years. She founded and chairs Founders4Schools and founded The Scaleup Institute, Workfinder, SVC2UK, iii plc and many more. Sherry serves as a non-executive member of Workfinder, London Stock Exchange plc, Pearson, DCMS, Raspberry Pi, and on the advisory boards of The Royal Society and The National Gallery.<br /><br />
                            She has invested in more than 60 companies as an angel (including Linkedin, Zoopla, Lovefilm (Amazon), New Energy Finance (Bloomberg) and 5 venture capital firms.<br /><br />
                            Philanthropically, she supports the Prince's Trust, the Crick Institute and Founders4Schools.<br /><br />
                            Sherry has an MBA from Harvard, an MSc from the London School of Economics, and a BA from the University of British Columbia, Canada.  She has been awarded three Honorary Doctorates from The University of Bristol, The University of Manchester and the Open University for her work in Education and the Economy.<br /><br />
                        </Info>
                    </Div>
                </Center>
                <Center>
                    <Div>
                        <ImageTeam src={user} />
                    </Div>
                    <Div direita={true}>
                        <Title>
                            <span style={{ backgroundColor: '#afe097' }}>
                                Karen Licurse
                            </span>
                        </Title>
                        <Info bold={true}>
                            Managing Director
                        </Info>
                        <Info>
                            Karen is an experienced marketer, business strategist, and learning professional who is passionate about helping people upskill and grow.
                            For the past nine years, Karen was on the executive leadership team of Brand Learning, a fast-growing consultancy focused on skill and capability development, now part of Accenture. At Brand Learning, Karen led teams to build high-impact learning and capability development programmes for leading clients. She also helped expand the business into the U.S.<br /> <br />
                            She holds a BA from Loyola University, Maryland USA and an MBA from the University of Cambridge.
                        </Info>
                    </Div>
                </Center>
            </Body>
            <Header />
            <Footer />
        </App>
    );
}

export default Team;
