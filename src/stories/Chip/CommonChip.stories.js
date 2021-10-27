import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import CommonChip from './CommonChip';
import ICONS from '../../helpers/icons';
import { CHIP_TYPES } from '../../helpers/types';

const Wrapper = () => {
    const handleClick = () => {
        // eslint-disable-next-line no-console
        console.log('You clicked the Chip.');
    };

    return (
        <CommonChip
            icon={select('Kind', Object.values(ICONS), 'delete')}
            label={text('Label', 'Default value for chip')}
            variant={text('Variant', 'outlined')}
            color={select('Severity', CHIP_TYPES, CHIP_TYPES[0])}
            handleClick={handleClick}
        />
    );
};

storiesOf('Chip', module).add('Chip', () => (
    <Wrapper />
));
