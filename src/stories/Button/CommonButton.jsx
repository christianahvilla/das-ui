import {
    bool,
    func,
    string,
} from 'prop-types';
import React from 'react';
import Button from 'rsuite/Button';

const CommonButton = (props) => {
    const {
        appearance,
        color,
        disabled,
        key,
        loading,
        onClick,
        text,
    } = props;
    return (<Button key={key} loading={loading} disabled={disabled} color={color} appearance={appearance} onClick={onClick}>{text}</Button>);
};

CommonButton.defaultProps = {
    appearance: '',
    color: '',
    disabled: false,
    key: '',
    loading: false,
    onClick: () => {},
    text: '',
};

CommonButton.propTypes = {
    appearance: string,
    color: string,
    disabled: bool,
    key: string,
    loading: bool,
    onClick: func,
    text: string,
};

export default CommonButton;
