import {
    arrayOf, shape, string,
} from 'prop-types';
import React from 'react';
import { ButtonToolbar } from 'rsuite';
import CommonButton from '../Button/CommonButton';

const CommonButtonToolBar = (props) => {
    const {
        buttons,
        size,
    } = props;

    const getButtons = buttons.map((button) => {
        const {
            appearance,
            color,
            disabled,
            key,
            loading,
            onClick,
            text,
        } = button;

        return (
            <CommonButton
                appearance={appearance}
                color={color}
                disabled={disabled}
                key={key}
                loading={loading}
                onClick={onClick}
                text={text}
            />
        );
    });

    return (
        <ButtonToolbar
            size={size}
        >
            {getButtons}
        </ButtonToolbar>
    );
};

CommonButtonToolBar.defaultProps = {
    size: '',
};

CommonButtonToolBar.propTypes = {
    buttons: arrayOf(shape({})).isRequired,
    size: string,
};

export default CommonButtonToolBar;
