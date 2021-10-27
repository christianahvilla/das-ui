import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    select, text, number, boolean,
} from '@storybook/addon-knobs';
import CommonSnackBar from './CommonSnackBar';
import { ALERT_TYPES } from '../../helpers/types';

storiesOf('SnackBar', module).add('SnackBar', () => (
    <CommonSnackBar
        open={boolean('Selected:', false)}
        autoHideDuration={number('Duration:', 6000)}
        severity={select('Severity', ALERT_TYPES)}
        msg={text('Message', 'Default message for alert')}
    />
));
