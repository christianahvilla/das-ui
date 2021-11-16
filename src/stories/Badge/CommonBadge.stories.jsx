import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';
import CommonBadge from './CommonBadge';
import { COLOR_COMPONENTS } from '../../helpers/types';
import CommonButton from '../Button/CommonButton';

const Wrapper = () => {
    const Button = () => (<CommonButton onClick={() => {}} text="Open" />);

    return (
        <CommonBadge
            color={select('Color', COLOR_COMPONENTS, COLOR_COMPONENTS[0])}
            content={number('Content', 99)}
            maxCount={number('Max Count', 99)}
            Component={Button}
        />
    );
};

storiesOf('Badge', module).add('Badge', () => (
    <Wrapper />
));
