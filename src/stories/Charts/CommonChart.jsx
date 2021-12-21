import * as React from 'react';
import {
    arrayOf, number, shape, string,
} from 'prop-types';
import Chart from 'react-apexcharts';

const CommonAlert = (props) => {
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

CommonAlert.defaultProps = {
    height: 350,
    series: [],
    type: 'bar',
    width: 500,
};

CommonAlert.propTypes = {
    height: number,
    options: shape({}).isRequired,
    series: arrayOf(shape({})),
    type: string,
    width: number,
};

export default CommonAlert;
