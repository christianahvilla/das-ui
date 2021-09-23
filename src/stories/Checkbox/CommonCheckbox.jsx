import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { bool, func, string } from 'prop-types';

const CommonCheckbox = (props) => {
    const {
        checked,
        disabled,
        handleChange,
        id,
        indeterminate,
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
                    id={id}
                    indeterminate={indeterminate}
                />
            )}
        />
    );
};

CommonCheckbox.defaultProps = {
    checked: false,
    disabled: false,
    handleChange: () => {},
    indeterminate: false,
    label: 'Checkbox Demo',
};

CommonCheckbox.propTypes = {
    checked: bool,
    disabled: bool,
    handleChange: func,
    id: string.isRequired,
    indeterminate: bool,
    label: string,
};

export default CommonCheckbox;
