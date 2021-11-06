import React from 'react';
import Input from 'rsuite/Input';
import { func, string } from 'prop-types';

const CommonTextField = (props) => {
    const {
        handleChange,
        placeholder,
    } = props;

    return (
        <Input
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
};

CommonTextField.defaultProps = {
    handleChange: () => {},
    placeholder: 'Default Input',
};

CommonTextField.propTypes = {
    handleChange: func,
    placeholder: string,
};

export default CommonTextField;
