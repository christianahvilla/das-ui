import React from 'react';
import { string, number, bool } from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CommonSnackBar = (props) => {
    const {
        duration,
        msg,
        open,
        severity,
    } = props;

    return (
        <Snackbar open={open} autoHideDuration={duration}>
            <MuiAlert severity={severity}>
                {msg}
            </MuiAlert>
        </Snackbar>
    );
};

CommonSnackBar.defaultProps = {
    duration: 6000,
    msg: 'Default Message for Alert',
    open: false,
    severity: 'info',
};

CommonSnackBar.propTypes = {
    duration: number,
    msg: string,
    open: bool,
    severity: string,
};

export default CommonSnackBar;
