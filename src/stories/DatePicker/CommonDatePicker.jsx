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
    } = props;

    return (
        <DatePicker
            appearance={appearance}
            format={format}
            block={block}
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
        />
    );
};

CommonTextField.defaultProps = {
    appearance: 'default',
    format: 'yyyy-MM-dd HH:mm',
    block: false,
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
};

CommonTextField.propTypes = {
    appearance: string,
    format: string,
    block: bool,
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
};

export default CommonTextField;
