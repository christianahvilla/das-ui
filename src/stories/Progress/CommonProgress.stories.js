import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import CommonProgress from './CommonProgress';
import { PROGRESS_SIZES, PROGRESS_SPEEDS } from '../../helpers/types';

storiesOf('Progress', module).add('Progress', () => (
    <CommonProgress
        content={text('Content', 'Default Loading...')}
        size={select('size', PROGRESS_SIZES, PROGRESS_SIZES[0])}
        speed={select('speed', PROGRESS_SPEEDS, PROGRESS_SPEEDS[0])}
    />
));
