import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import CommonTextField from './CommonTextField';

const Wrapper = () => {
    const handleChangeValue = (value) => {
        // eslint-disable-next-line no-console
        console.log(value);
    };

    return (
        <CommonTextField
            placeholder={text('Placeholder', 'Default Input Value')}
            handleChange={handleChangeValue}
        />
    );
};

storiesOf('Text Field', module).add('Text Field', () => (
    <Wrapper />
));
