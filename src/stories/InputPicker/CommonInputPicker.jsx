import React from 'react';
import {
    arrayOf, bool, func, shape, string,
} from 'prop-types';
import { InputPicker } from 'rsuite';

const CommonInputPicker = (props) => {
    const {
        appearance,
        block,
        data,
        disabled,
        cleanable,
        onChange,
        plaintext,
        readOnly,
        // selectWidth,
        size,
    } = props;

    return (
        <InputPicker
            appearance={appearance}
            block={block}
            data={data}
            disabled={disabled}
            cleanable={cleanable}
            onChange={onChange}
            plaintext={plaintext}
            readOnly={readOnly}
            size={size}
        />
    );
};

CommonInputPicker.defaultProps = {
    appearance: '',
    block: false,
    data: [],
    disabled: false,
    cleanable: true,
    onChange: () => {},
    plaintext: false,
    readOnly: false,
    // selectWidth: 224,
    size: '',
};

CommonInputPicker.propTypes = {
    appearance: string,
    block: bool,
    data: arrayOf(shape({})),
    disabled: bool,
    cleanable: bool,
    onChange: func,
    plaintext: bool,
    readOnly: bool,
    // selectWidth: number,
    size: string,
};

export default CommonInputPicker;
