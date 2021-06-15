import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Screens
import Home from '../screens/Home/Home';
import Volunteers from '../screens/Volunteers/volunteers';
import AboutUs from '../screens/AboutUs/aboutus';
import Team from '../screens/Team/team';
import Select from '../screens/Select/Select';

//Volunteers
import VolunteerSignUp from '../screens/VolunteerSignup/VolunteerSignup';
import WelcomeVolunteer from '../screens/VolunteerSignup/Welcome';
import ProfileCreate from '../screens/VolunteerSignup/ProfileCreate';
import WelcomeEmail from '../screens/VolunteerSignup/Email';
import Profile from '../screens/Profile/Profile';
import Dashboard from '../screens/VolunteerDashboard/Dashboard';
import Upcoming from '../screens/Upcoming/Upcoming';
import Call from '../screens/CallSet/Call';

//Business
import BusinessSignUp from '../screens/BusinessSignup/BusinessSignup';
import BusinessConfirm from '../screens/BusinessSignup/Confirm';
import BusinessDashboard from '../screens/BusinessDashboard/Dashboard';

//Skills 

import Workshop from '../screens/Skills/Workshop';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} title="Org | Free Mentoring" />
    <Route exact path='/volunteers' component={Volunteers} />
    <Route exact path='/about-us' component={AboutUs} />
    <Route exact path='/team' component={Team} />
    <Route exact path='/select' component={Select} />
    <Route exact path='/volunteer-signup' component={VolunteerSignUp} />
    <Route exact path='/volunteer-welcome' component={WelcomeVolunteer} />
    <Route exact path='/volunteer-profile-create' component={ProfileCreate} />
    <Route exact path='/volunteer-welcome-email' component={WelcomeEmail} />
    <Route exact path='/volunteer-profile' component={Profile} />
    <Route exact path='/volunteer-dashboard' component={Dashboard} />
    <Route exact path='/upcoming' component={Upcoming} />
    <Route exact path='/call' component={Call} />
    <Route exact path='/business-signup' component={BusinessSignUp} />
    <Route exact path='/business-confirm' component={BusinessConfirm} />
    <Route exact path='/business-dashboard' component={BusinessDashboard} />
    <Route exact path='/skills/workshop' component={Workshop} />
  </Switch>
)

export default App;