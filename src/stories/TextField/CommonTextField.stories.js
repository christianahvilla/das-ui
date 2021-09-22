import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import CommonTextField from './CommonTextField';

const Wrapper = () => {
    const handleChangeValue = (event) => {
        const { target: { value } } = event;
        // eslint-disable-next-line no-console
        console.log(value);
    };

    return (
        <CommonTextField
            id={text('Id', 'outlined-basic')}
            label={text('Label', 'Nombre')}
            variant={text('Variant', 'outlined')}
            handleChange={handleChangeValue}
        />
    );
};

storiesOf('Text Field', module).add('Text Field', () => (
    <Wrapper />
));
