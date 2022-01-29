import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean, select, text,
} from '@storybook/addon-knobs';
import CommonTag from './CommonTag';
import { COMPONENTS_SIZES, COLOR_COMPONENTS, TYPE_TAGS } from '../../helpers/types';

const Wrapper = () => {
    const onClose = () => {
        // eslint-disable-next-line no-console
        console.log('closed');
    };

    return (
        <CommonTag
            type={select('Type Tag', TYPE_TAGS, TYPE_TAGS[0])}
            text={text('Text', 'Tag')}
            closable={boolean('Closable', false)}
            size={select('Size Tag', COMPONENTS_SIZES, COMPONENTS_SIZES[0])}
            color={select('Color Tag', COLOR_COMPONENTS, COLOR_COMPONENTS[0])}
            onClose={onClose}
        />
    );
};

storiesOf('Tag', module).add('Tag', () => (
    <Wrapper />
));
