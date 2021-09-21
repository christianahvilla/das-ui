import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { bool, func, string } from 'prop-types';

const CommonCheckbox = (props) => {
    const {
        checked,
        disabled,
        handleChange,
        label,
    } = props;

    return (
        <FormControlLabel
            label={label}
            control={(
                <Checkbox
                    checked={checked}
                    disabled={disabled}
                    onChange={handleChange}
                />
            )}
        />
    );
};

CommonCheckbox.defaultProps = {
    checked: false,
    disabled: false,
    handleChange: () => {},
    label: 'Checkbox Demo',
};

CommonCheckbox.propTypes = {
    checked: bool,
    disabled: bool,
    handleChange: func,
    label: string,
};

export default CommonCheckbox;
