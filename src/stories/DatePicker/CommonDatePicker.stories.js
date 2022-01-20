import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import * as dateFns from 'date-fns';
import { CustomProvider } from 'rsuite';
import { esES } from 'rsuite/esm/locales';
import CommonDatePicker from './CommonDatePicker';
import {
    COMPONENTS_SIZES, FORMAT_DATES, FORMAT_RANGES, TYPE_COMPONENTS,
} from '../../helpers/types';

const Wrapper = () => {
    const handleChangeValue = (value) => {
        // eslint-disable-next-line no-console
        console.log(value);
    };

    const getDisabledDate = (date) => {
        if (dateFns.isToday(date, new Date())) {
            return false;
        }

        return dateFns.isBefore(date, new Date());
    };

    const getHiddenHours = (hour) => hour < 8 || hour > 20;
    const getHiddenMinutes = (minute) => minute % 15 !== 0;

    return (
        <CustomProvider locale={esES}>
            <CommonDatePicker
                appearance={select('Appearance', TYPE_COMPONENTS, TYPE_COMPONENTS[0])}
                format={select('Format', FORMAT_DATES, FORMAT_DATES[3])}
                block={boolean('Block', false)}
                defaultValue={text('Default Value', new Date())}
                disabled={boolean('Disabled', false)}
                disabledDate={getDisabledDate}
                onSelect={handleChangeValue}
                hideHours={getHiddenHours}
                hideMinutes={getHiddenMinutes}
                isoWeek={boolean('ISO Week', false)}
                oneTap={boolean('One Tap', false)}
                placeholder={text('Placeholder', '22-04-2021 12:55')}
                plaintext={boolean('Plaintext', false)}
                ranges={FORMAT_RANGES}
                readOnly={boolean('Read Only', false)}
                size={select('Size', COMPONENTS_SIZES, COMPONENTS_SIZES[0])}
                value={text('Value', new Date())}
            />
        </CustomProvider>
    );
};

storiesOf('DatePicker', module).add('DatePicker', () => (
    <Wrapper />
));
