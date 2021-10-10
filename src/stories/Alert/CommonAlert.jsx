import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import { string } from 'prop-types';

const CommonAlert = (props) => {
    const {
        severity,
        msg,
    } = props;

    return (
        <MuiAlert severity={severity}>{msg}</MuiAlert>
    );
};

CommonAlert.defaultProps = {
    severity: 'info',
    msg: 'Default Message for Alert',
};

CommonAlert.propTypes = {
    severity: string,
    msg: string,
};

export default CommonAlert;
