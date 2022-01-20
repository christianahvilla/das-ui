import { func, number, string } from 'prop-types';
import React from 'react';
import { Input } from 'rsuite';

const CommonTextArea = (props) => {
    const {
        className,
        handleChange,
        placeholder,
        rows,
    } = props;

    return (
        <Input as="textarea" onChange={handleChange} rows={rows} className={className} placeholder={placeholder} />
    );
};

CommonTextArea.defaultProps = {
    className: '',
    handleChange: () => {},
    placeholder: 'Default Textarea',
    rows: 3,
};

CommonTextArea.propTypes = {
    className: string,
    handleChange: func,
    placeholder: string,
    rows: number,
};

export default CommonTextArea;
