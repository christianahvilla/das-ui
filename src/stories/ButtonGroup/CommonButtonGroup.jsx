import {
    arrayOf, bool, shape, string,
} from 'prop-types';
import React from 'react';
import { ButtonGroup } from 'rsuite';
import CommonButton from '../Button/CommonButton';

const CommonButtonGroup = (props) => {
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
        <ButtonGroup
            block={block}
            justified={justified}
            size={size}
            vertical={vertical}
        >
            {getButtons}
        </ButtonGroup>
    );
};

CommonButtonGroup.defaultProps = {
    block: false,
    justified: false,
    size: '',
    vertical: false,
};

CommonButtonGroup.propTypes = {
    block: bool,
    buttons: arrayOf(shape({})).isRequired,
    justified: bool,
    size: string,
    vertical: bool,
};

export default CommonButtonGroup;
