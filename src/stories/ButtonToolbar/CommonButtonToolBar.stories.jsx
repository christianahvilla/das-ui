import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import CommonButtonToolBar from './CommonButtonToolBar';
import { COMPONENTS_SIZES } from '../../helpers/types';
import { Buttons } from '../../helpers/constants';

storiesOf('Button Toolbar', module).add('Button Toolbar', () => (
    <CommonButtonToolBar
        block={boolean('Block', false)}
        buttons={Buttons}
        justified={boolean('Justify', false)}
        size={select('Size', COMPONENTS_SIZES, COMPONENTS_SIZES[1])}
        vertical={boolean('Vertical', false)}
    />
));
