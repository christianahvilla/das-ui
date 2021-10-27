import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import CommonAlert from './CommonAlert';
import { ALERT_TYPES } from '../../helpers/types';

storiesOf('Alert', module).add('Alert', () => (
    <CommonAlert
        severity={select('Severity', ALERT_TYPES)}
        msg={text('Message', 'Default Message for Alert')}
    />
));
