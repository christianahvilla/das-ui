import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import CommonTextArea from './CommonTextArea';

const Wrapper = () => {
    const handleChangeValue = (value) => {
        // eslint-disable-next-line no-console
        console.log(value);
    };

    return (
        <CommonTextArea
            placeholder={text('Placeholder', 'Default Input Value')}
            handleChange={handleChangeValue}
            rows={number('Rows', 4)}
        />
    );
};

storiesOf('TextArea', module).add('TextArea', () => (
    <Wrapper />
));
