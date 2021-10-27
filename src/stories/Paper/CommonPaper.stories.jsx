import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import CommonPaper from './CommonPaper';

storiesOf('Paper', module).add('Paper', () => (
    <CommonPaper
        elevation={number('Elevation', 3, { min: 0, max: 24 })}
        variant={select('Variant', ['outlined', ''])}
        square={boolean('Square', false)}
    />
));
