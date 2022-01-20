import React from 'react';
import {
    arrayOf, bool, func, shape, string,
} from 'prop-types';
import { DatePicker } from 'rsuite';

const CommonTextField = (props) => {
    const {
        appearance,
        format,
        block,
        defaultValue,
        disabled,
        disabledDate,
        onSelect,
        hideHours,
        hideMinutes,
        isoWeek,
        oneTap,
        placeholder,
        plaintext,
        ranges,
        readOnly,
        size,
        value,
    } = props;

    return (
        <DatePicker
            id="id"
            appearance={appearance}
            format={format}
            block={block}
            defaultValue={defaultValue}
            disabled={disabled}
            disabledDate={disabledDate}
            onSelect={onSelect}
            hideHours={hideHours}
            hideMinutes={hideMinutes}
            isoWeek={isoWeek}
            oneTap={oneTap}
            placeholder={placeholder}
            plaintext={plaintext}
            ranges={ranges}
            readOnly={readOnly}
            size={size}
            value={value}
        />
    );
};

CommonTextField.defaultProps = {
    appearance: 'default',
    format: 'yyyy-MM-dd HH:mm',
    block: false,
    defaultValue: '',
    disabled: false,
    disabledDate: () => {},
    onSelect: () => {},
    hideHours: () => {},
    hideMinutes: () => {},
    isoWeek: false,
    oneTap: false,
    placeholder: 'Fecha',
    plaintext: false,
    ranges: [],
    readOnly: false,
    size: 'md',
    value: '',
};

CommonTextField.propTypes = {
    appearance: string,
    format: string,
    block: bool,
    defaultValue: string,
    disabled: bool,
    disabledDate: func,
    onSelect: func,
    hideHours: func,
    hideMinutes: func,
    isoWeek: bool,
    oneTap: bool,
    placeholder: string,
    plaintext: bool,
    ranges: arrayOf(shape({})),
    readOnly: bool,
    size: string,
    value: string,
};

export default CommonTextField;
