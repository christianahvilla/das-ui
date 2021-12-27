import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import CommonProgress from './CommonProgress';
import { COMPONENTS_SIZES, PROGRESS_SPEEDS } from '../../helpers/types';

storiesOf('Progress', module).add('Progress', () => (
    <CommonProgress
        backdrop={boolean('Backdrop', false)}
        center={boolean('Center', false)}
        content={text('Content', 'Default Loading...')}
        size={select('Size', COMPONENTS_SIZES, COMPONENTS_SIZES[0])}
        speed={select('Speed', PROGRESS_SPEEDS, PROGRESS_SPEEDS[0])}
    />
));
