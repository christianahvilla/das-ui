import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import CommonButtonGroup from './CommonButtonGroup';
import { COMPONENTS_SIZES } from '../../helpers/types';
import { BUTTONS } from '../../helpers/constants';

storiesOf('Button Group', module).add('Button Group', () => (
    <CommonButtonGroup
        block={boolean('Block', false)}
        buttons={BUTTONS}
        justified={boolean('Justify', false)}
        size={select('Size', COMPONENTS_SIZES, COMPONENTS_SIZES[1])}
        vertical={boolean('Vertical', false)}
    />
));
