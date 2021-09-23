import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { func, string } from 'prop-types';
import CommonIcon from '../Icon/CommonIcon';

const CommonSearchBar = (props) => {
    const {
        handleChange,
        id,
        label,
        position,
        variant,
    } = props;

    return (
        <TextField
            id={id}
            label={label}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={position}>
                        <CommonIcon kind="search" />
                    </InputAdornment>
                ),
            }}
            variant={variant}
            onChange={handleChange}
        />
    );
};

CommonSearchBar.defaultProps = {
    handleChange: () => {},
    id: 'input-with-icon-textfield',
    label: 'Search',
    position: 'start',
    variant: 'outlined',
};

CommonSearchBar.propTypes = {
    handleChange: func,
    id: string,
    label: string,
    position: string,
    variant: string,
};

export default CommonSearchBar;
