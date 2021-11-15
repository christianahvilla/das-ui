import * as React from 'react';
import Message from 'rsuite/Message';
import { bool, string } from 'prop-types';

const CommonAlert = (props) => {
    const {
        header,
        msg,
        showIcon,
        type,
    } = props;

    return (
        <Message showIcon={showIcon} type={type} header={header}>{msg}</Message>
    );
};

CommonAlert.defaultProps = {
    header: 'Informational',
    msg: 'Default Message for Alert',
    showIcon: true,
    type: 'info',
};

CommonAlert.propTypes = {
    header: string,
    msg: string,
    showIcon: bool,
    type: string,
};

export default CommonAlert;
