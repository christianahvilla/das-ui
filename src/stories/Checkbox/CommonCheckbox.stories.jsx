import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import CommonCheckbox from './CommonCheckbox';

const Wrapper = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = (event) => {
        const { target: { checked } } = event;
        setIsChecked(checked);
    };

    return (
        <CommonCheckbox
            checked={boolean('Checked', false) || isChecked}
            disabled={boolean('Disabled', false)}
            handleChange={handleChecked}
            id={text('Id', 'checkbox')}
            indeterminate={boolean('Indeterminate', false)}
            label={text('Label', 'Checkbox')}
        />
    );
};

storiesOf('Checkbox', module).add('Checkbox', () => (
    <Wrapper />
));
