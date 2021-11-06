import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import CommonAlert from './CommonAlert';
import { ALERT_HEADERS, ALERT_TYPES } from '../../helpers/types';

storiesOf('Alert', module).add('Alert', () => (
    <CommonAlert
        showIcon
        type={select('Type', ALERT_TYPES, ALERT_TYPES[0])}
        header={select('Header', ALERT_HEADERS, ALERT_HEADERS[0])}
        msg={text('Message', 'Default Message for Alert')}
    />
));
