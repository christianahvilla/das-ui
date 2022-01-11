import * as React from 'react';
import Message from 'rsuite/Message';
import {
    bool, func, instanceOf, number, shape, string,
} from 'prop-types';

const CommonAlert = (props) => {
    const {
        closable,
        duration,
        header,
        key,
        msg,
        onClose,
        ref,
        showIcon,
        type,
    } = props;

    return (
        <Message ref={ref} duration={duration} key={key} onClose={onClose} closable={closable} showIcon={showIcon} type={type} header={header}>{msg}</Message>
    );
};

CommonAlert.defaultProps = {
    closable: true,
    duration: 2000,
    header: 'Informational',
    key: '',
    msg: 'Default Message for Alert',
    onClose: null,
    ref: null,
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
    ref: [
        func,
        shape({ current: instanceOf(Element) }),
    ],
    showIcon: bool,
    type: string || null,
};

export default CommonAlert;
