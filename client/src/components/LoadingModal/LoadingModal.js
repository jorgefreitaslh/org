import React from 'react';
import Modal from 'react-modal';

//Style
import { Load, Text } from './style.js';

//Image
import loading from '../../assets/img/loading.gif';

function LoadingModal({ visible }) {

    const customStyles = {
        content: {
            width: '100vw',
            backgroundColor: '#ecf0f1',
            borderRadius: 0,
            border: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            inset: 0,
            position: 'absolute'
        }
    };

    return (
        <Modal
            isOpen={visible}
            style={customStyles}
        >
            <Load src={loading} />
            <Text style={{ color: '#35363a' }}>LOADING</Text>
        </Modal>
    );
}

export default LoadingModal;