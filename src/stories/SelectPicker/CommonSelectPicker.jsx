import React from 'react';
import {
    arrayOf, bool, func, shape, string, number,
} from 'prop-types';
import { SelectPicker } from 'rsuite';

const CommonSelectPicker = (props) => {
    const {
        appearance,
        block,
        data,
        disabled,
        searchable,
        onChange,
        plaintext,
        readOnly,
        selectWidth,
        size,
    } = props;

    return (
        <SelectPicker
            appearance={appearance}
            block={block}
            data={data}
            disabled={disabled}
            searchable={searchable}
            onChange={onChange}
            plaintext={plaintext}
            readOnly={readOnly}
            size={size}
            style={block ? null : { width: selectWidth }}
        />
    );
};

CommonSelectPicker.defaultProps = {
    appearance: '',
    block: false,
    data: [],
    disabled: false,
    searchable: true,
    onChange: () => {},
    plaintext: false,
    readOnly: false,
    selectWidth: 224,
    size: '',
};

CommonSelectPicker.propTypes = {
    appearance: string,
    block: bool,
    data: arrayOf(shape({})),
    disabled: bool,
    searchable: bool,
    onChange: func,
    plaintext: bool,
    readOnly: bool,
    selectWidth: number,
    size: string,
};

export default CommonSelectPicker;
