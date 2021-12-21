import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';
import CommonChart from './CommonChart';
import { CHART_TYPES, CHART_OPTIONS, CHART_SERIES } from '../../helpers/constants';

storiesOf('Chart', module).add('Chart', () => (
    <CommonChart
        type={select('Type', CHART_TYPES, CHART_TYPES[0])}
        options={CHART_OPTIONS}
        series={CHART_SERIES}
        height={number('Height', 350)}
        width={number('Width', 500)}
    />
));
