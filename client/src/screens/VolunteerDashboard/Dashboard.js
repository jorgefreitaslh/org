import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import axios from 'axios';

//Style
import {
    App,
    Body,
    Center,
    Title,
    Text,
    Button,
    Image,
    Right,
    Calendario
} from './style.js';

//Components
import Header from '../../components/HeaderNav/header';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

//Images
import found from '../../assets/img/found.png';

function Dashboard() {

    document.title = 'Org Volunteer';
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const location = useLocation();

    const localizer = momentLocalizer(moment);
    const [events, setEvents] = useState([]);
    const [ID, setID] = useState('');

    useEffect(async () => {
        const AllUpcomings = await axios.get('/api/upcoming');
        const Upcomings = AllUpcomings.data.upcoming;
        const ID = location.state.email;
        const filter = Upcomings.filter(({ volunteerId }) => volunteerId.includes(ID));
        setEvents(filter.map(item => {
            const start = new Date(item.date);
            var datetime = new Date(item.date);
            datetime.setHours(datetime.getHours() + 1);
            return {
                'id': `${item.id}`,
                'title': `${item.name} - ${item.priority}`,
                'start': start,
                'end': datetime
            }
        }),
        )
        setLoading(false)
    }, [])

    return (
        <App>
            <Header />
            <Body welcome={true} bottom={true}>
                {events.length === 0 ?
                    <Center>
                        <Right>
                            <Title>
                                Soon they will find you to start work as a volunteer                         </Title>
                            <Text>
                                Change your availability to be able to receive more requests from Org.
                            </Text>
                            <Button
                                onClick={() => history.push({
                                    pathname: '/volunteer-profile',
                                    state: {
                                        email: location.state.email,
                                        type: 'volunteer'
                                    }
                                })}
                            >
                                Edit Profile
                            </Button>
                        </Right>
                        <Image src={found} />
                    </Center>
                    :
                    <Calendario>
                        <Calendar
                            localizer={localizer}
                            events={[events][0]}
                            startAccessor="start"
                            endAccessor="end"
                            step={60}
                            style={{ height: '40vw', width: '70vw', paddingBottom: 0 }}
                            onSelectEvent={event => setID(event.id)}
                            onDoubleClickEvent={() => {
                                history.push({
                                    pathname: '/call',
                                    state: {
                                        id: ID,
                                        email: location.state.email,
                                        type: location.state.type
                                    }
                                })
                            }}
                        />
                    </Calendario>
                }
            </Body>
            <LoadingModal visible={loading} />
        </App>
    );
}

export default Dashboard;