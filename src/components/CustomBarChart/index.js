import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { BarChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';

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
    <View style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
    }}
    >
      <ActivityIndicator style={{ alignItems: 'center' }} size="large" color="#2b2b73" />
    </View>
  )
);

CustomBarChart.propTypes = {
  chartData: PropTypes.instanceOf(Object).isRequired,
  chartDimension: PropTypes.instanceOf(Object).isRequired,
};

export default CustomBarChart;
