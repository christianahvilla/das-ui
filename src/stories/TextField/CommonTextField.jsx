import React from 'react';
import TextField from '@mui/material/TextField';
import { func, string } from 'prop-types';

const CommonTextField = (props) => {
    const {
        handleChange,
        id,
        label,
        variant,
    } = props;

    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            onChange={handleChange}
        />
    );
};

CommonTextField.defaultProps = {
    handleChange: () => {},
    id: 'input-with-icon-textfield',
    label: 'Search',
    variant: 'outlined',
};

CommonTextField.propTypes = {
    handleChange: func,
    id: string,
    label: string,
    variant: string,
};

export default CommonTextField;
