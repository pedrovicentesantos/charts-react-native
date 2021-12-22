import React from 'react';

import { ActivityIndicator } from 'react-native';

import { ProgressCircle } from 'react-native-svg-charts';
import PropTypes from 'prop-types';

const CustomProgressChart = ({ chartData, chartDimension }) => (
  chartDimension !== null ? (
    <ProgressCircle
      progress={chartData}
      progressColor="rgba(175, 220, 139, 0.7)"
      backgroundColor="rgba(175, 220, 139, 0.1)"
      strokeWidth={14}
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

CustomProgressChart.propTypes = {
  chartData: PropTypes.number.isRequired,
  chartDimension: PropTypes.instanceOf(Object).isRequired,
};

export default CustomProgressChart;
