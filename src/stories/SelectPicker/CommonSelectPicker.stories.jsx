import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import { CustomProvider } from 'rsuite';
import { esES } from 'rsuite/esm/locales';
import CommonSelectPicker from './CommonSelectPicker';
import { COMPONENTS_SIZES, TYPE_COMPONENTS } from '../../helpers/types';
import { FAKE_DATA_SELECT } from '../../helpers/constants';

const Wrapper = () => {
    const handleChangeValue = (value) => {
        // eslint-disable-next-line no-console
        console.log(value);
    };

    return (
        <CustomProvider locale={esES}>
            <CommonSelectPicker
                appearance={select('Type select', TYPE_COMPONENTS, TYPE_COMPONENTS[0])}
                block={boolean('Block', false)}
                data={FAKE_DATA_SELECT}
                disabled={boolean('Disabled', false)}
                searchable={boolean('Enabled Search', true)}
                onChange={handleChangeValue}
                plaintext={boolean('Plaintext', false)}
                readOnly={boolean('Read Only', false)}
                size={select('Size', COMPONENTS_SIZES, COMPONENTS_SIZES[0])}
                selectWidth={number('Width', 224)}
            />
        </CustomProvider>
    );
};

storiesOf('SelectPicker', module).add('SelectPicker', () => (
    <Wrapper />
));
