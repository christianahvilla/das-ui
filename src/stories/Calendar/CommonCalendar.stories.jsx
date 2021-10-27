import React from 'react';
import { storiesOf } from '@storybook/react';
import CommonCalendar from './CommonCalendar';
import { EVENT } from '../../helpers/constants';

storiesOf('Calendar', module).add('Calendar', () => (
    <CommonCalendar events={EVENT} />
));
