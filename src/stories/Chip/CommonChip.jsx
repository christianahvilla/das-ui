import * as React from 'react';
import { func, string } from 'prop-types';
import Chip from '@mui/material/Chip';
import CommonIcon from '../Icon/CommonIcon';

const CommonChip = (props) => {
    const {
        color,
        handleClick,
        icon,
        label,
        variant,
    } = props;

    return (
        <Chip
            icon={<CommonIcon kind={icon} />}
            label={label}
            variant={variant}
            color={color}
            onClick={handleClick}
        />
    );
};

CommonChip.defaultProps = {
    color: '',
    handleClick: () => {},
    icon: '',
    label: '',
    variant: '',
};

CommonChip.propTypes = {
    color: string,
    handleClick: func,
    icon: string,
    label: string,
    variant: string,
};

export default CommonChip;
