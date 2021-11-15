import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import CommonButton from './CommonButton';
import { COLOR_COMPONENTS, TYPE_COMPONENTS } from '../../helpers/types';

const Wrapper = () => {
    const onClick = () => {
        // eslint-disable-next-line no-console
        console.log('clicked');
    };

    return (
        <CommonButton
            appearance={select('Type button', TYPE_COMPONENTS, TYPE_COMPONENTS[0])}
            color={select('Color button', COLOR_COMPONENTS, COLOR_COMPONENTS[0])}
            disabled={boolean('Disabled', false)}
            loading={boolean('Loading', false)}
            onClick={onClick}
            text={text('Text button', 'Click')}
        />
    );
};

storiesOf('Button', module).add('Button', () => (
    <Wrapper />
));
