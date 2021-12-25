import React from 'react';
import { BarChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';
import Loading from '../Loading';

const CustomBarChart = ({ chartData, chartDimension }) => (
  chartData.length > 0 ? (
    <BarChart
      data={chartData}
      svg={{
        fill: 'rgba(175, 220, 139, 0.7)',
      }}
      yMin={0}
      yAccessor={({ item }) => item.value}
      spacingInner={0.25}
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

CustomBarChart.propTypes = {
  chartData: PropTypes.instanceOf(Object).isRequired,
  chartDimension: PropTypes.instanceOf(Object),
};

CustomBarChart.defaultProps = {
  chartDimension: {},
};

export default CustomBarChart;
