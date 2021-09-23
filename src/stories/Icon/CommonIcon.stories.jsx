import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import CommonIcon from './CommonIcon';
import ICONS from '../../helpers/icons';

storiesOf('Icon', module).add('Icon', () => (
    <CommonIcon
        kind={select('Kind', Object.values(ICONS))}
    />
));
