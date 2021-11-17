import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import CommonButtonToolBar from './CommonButtonToolBar';
import { COMPONENTS_SIZES } from '../../helpers/types';
import { Buttons } from '../../helpers/constants';

storiesOf('Button Toolbar', module).add('Button Toolbar', () => (
    <CommonButtonToolBar
        buttons={Buttons}
        size={select('Size', COMPONENTS_SIZES, COMPONENTS_SIZES[1])}
    />
));
