import * as React from 'react';
import {
    arrayOf, number, shape, string,
} from 'prop-types';
import Chart from 'react-apexcharts';

const CommonChart = (props) => {
    const {
        height,
        options,
        series,
        type,
        width,
    } = props;

    return (
        <Chart height={height} options={options} series={series} type={type} width={width} />
    );
};

CommonChart.defaultProps = {
    height: 350,
    series: [],
    type: 'bar',
    width: 500,
};

CommonChart.propTypes = {
    height: number,
    options: shape({}).isRequired,
    series: arrayOf(shape({})),
    type: string,
    width: number,
};

export default CommonChart;
