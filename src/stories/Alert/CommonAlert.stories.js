import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean, number, select, text,
} from '@storybook/addon-knobs';
import CommonAlert from './CommonAlert';
import { ALERT_HEADERS, ALERT_TYPES } from '../../helpers/types';

const Wrapper = () => {
    const onClose = (event) => {
        // eslint-disable-next-line no-console
        console.log(event?.target);
    };

    return (
        <CommonAlert
            closable={boolean('Closable', true)}
            duration={number('Duration', 3000)}
            showIcon={boolean('Show Icon', true)}
            type={select('Type', ALERT_TYPES, ALERT_TYPES[0])}
            header={select('Header', ALERT_HEADERS, ALERT_HEADERS[0])}
            msg={text('Message', 'Default Message for Alert')}
            key={text('Key', '1')}
            onClose={onClose}
        />
    );
};

storiesOf('Alert', module).add('Alert', () => (
    <Wrapper />
));
