import React from 'react';

import { ActivityIndicator } from 'react-native';

import { LineChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';

const CustomLineChart = ({ chartData, chartDimension }) => (
  chartDimension ? (
    <LineChart
      data={chartData}
      svg={{
        strokeWidth: 4,
        stroke: 'rgba(175, 220, 139, 0.7)',
      }}
      style={{
        borderRadius: 8,
        width: chartDimension.width,
        height: chartDimension.height,
      }}
    />
  ) : (
    <ActivityIndicator size="small" color="#2b2b73" />
  )
);

CustomLineChart.propTypes = {
  chartData: PropTypes.instanceOf(Object).isRequired,
  chartDimension: PropTypes.instanceOf(Object).isRequired,
};

export default CustomLineChart;
