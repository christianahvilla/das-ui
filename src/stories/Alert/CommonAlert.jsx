import * as React from 'react';
import Alert from '@mui/material/Alert';
import { string } from 'prop-types';

const CommonAlert = (props) => {
    const {
        severity,
        msg,
    } = props;

    return (
        <Alert severity={severity}>
            {msg}
        </Alert>
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
