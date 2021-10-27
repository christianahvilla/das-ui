import React from 'react';
import Paper from '@mui/material/Paper';
import {
    bool, elementType, number, string,
} from 'prop-types';

const CommonPaper = (props) => {
    const {
        Component,
        elevation,
        square,
        variant,
    } = props;

    return (
        <Paper elevation={elevation} square={square} variant={variant}>{Component && <Component />}</Paper>
    );
};

CommonPaper.defaultProps = {
    Component: undefined,
    elevation: 3,
    square: false,
    variant: '',
};

CommonPaper.propTypes = {
    Component: elementType,
    elevation: number,
    square: bool,
    variant: string,
};

export default CommonPaper;
