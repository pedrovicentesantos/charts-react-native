import React from 'react';
import { LineChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';
import Loading from '../Loading';

const CustomLineChart = ({ chartData, chartDimension }) => (
  chartData.length > 0 ? (
    <LineChart
      data={chartData}
      svg={{
        strokeWidth: 4,
        stroke: 'rgba(175, 220, 139, 0.7)',
      }}
      style={{
        borderRadius: 8,
        width: chartDimension?.width,
        height: chartDimension?.height,
      }}
    />
  ) : (
    <Loading />
  )
);

CustomLineChart.propTypes = {
  chartData: PropTypes.instanceOf(Object).isRequired,
  chartDimension: PropTypes.instanceOf(Object).isRequired,
};

export default CustomLineChart;
