import {
    arrayOf, bool, shape, string,
} from 'prop-types';
import React from 'react';
import { ButtonToolbar } from 'rsuite';
import CommonButton from '../Button/CommonButton';

const CommonButtonToolBar = (props) => {
    const {
        block,
        buttons,
        justified,
        size,
        vertical,
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
            block={block}
            justified={justified}
            size={size}
            vertical={vertical}
        >
            {getButtons}
        </ButtonToolbar>
    );
};

CommonButtonToolBar.defaultProps = {
    block: false,
    justified: false,
    size: '',
    vertical: false,
};

CommonButtonToolBar.propTypes = {
    block: bool,
    buttons: arrayOf(shape({})).isRequired,
    justified: bool,
    size: string,
    vertical: bool,
};

export default CommonButtonToolBar;
