import * as React from 'react';
import Message from 'rsuite/Message';
import {
    bool, func, number, string,
} from 'prop-types';

const CommonAlert = (props) => {
    const {
        closable,
        duration,
        header,
        key,
        msg,
        onClose,
        showIcon,
        type,
    } = props;

    return (
        <Message duration={duration} key={key} onClose={onClose} closable={closable} showIcon={showIcon} type={type} header={header}>{msg}</Message>
    );
};

CommonAlert.defaultProps = {
    closable: true,
    duration: 2000,
    header: 'Informational',
    key: '',
    msg: 'Default Message for Alert',
    onClose: null,
    showIcon: true,
    type: 'info',
};

CommonAlert.propTypes = {
    closable: bool,
    duration: number,
    header: string || null,
    key: string || null,
    msg: string || null,
    onClose: func,
    showIcon: bool,
    type: string || null,
};

export default CommonAlert;
