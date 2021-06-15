import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

//Images
import avatar from '../../assets/img/avatar.png';

function ImageUser(props) {

    const location = useLocation();
    const [image, setImage] = useState('');

    useEffect(async () => {
        const user_id = location.state.email;
        const type = location.state.type;
        const user_data = type === 'volunteer' ? await axios.get(`/api/volunteers/${user_id}`) : await axios.get(`/api/learners/${user_id}`);
        const user = type === 'volunteer' ? user_data.data.volunteer : user_data.data.learner;
        setImage(user.image);
    })

    return (
        <img style={props.Style} src={image === null ? avatar : image} alt="user" />
    );
}

export default ImageUser;