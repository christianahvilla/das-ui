import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import CommonButtonToolBar from './CommonButtonToolBar';
import { COMPONENTS_SIZES } from '../../helpers/types';
import { BUTTONS } from '../../helpers/constants';

storiesOf('Button Toolbar', module).add('Button Toolbar', () => (
    <CommonButtonToolBar
        buttons={BUTTONS}
        size={select('Size', COMPONENTS_SIZES, COMPONENTS_SIZES[1])}
    />
));
