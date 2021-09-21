import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import CommonSearchBar from './CommonSearchBar';
import INPUT_CONTENT from '../../helpers/Constants';

const Wrapper = () => {
    const handleChangeValue = (event) => {
        const { target: { value } } = event;
        const result = INPUT_CONTENT.filter((item) => item.content === value);
        // eslint-disable-next-line no-console
        console.log(result);
    };

    return (
        <CommonSearchBar
            id={text('Id', 'input-with-icon-textfield')}
            label={text('Label', 'Search Bar')}
            position={text('Postion', 'start')}
            variant={text('Variant', 'outlined')}
            handleChange={handleChangeValue}
        />
    );
};

storiesOf('Search Bar', module).add('Search Bar', () => (
    <Wrapper />
));
