import React from 'react';
import { View } from 'react-native';
import * as shape from 'd3-shape';
import {
  LineChart, YAxis, XAxis,
} from 'react-native-svg-charts';
import {
  G, Text, Rect, Circle,
} from 'react-native-svg';
import PropTypes from 'prop-types';
import Loading from '../Loading';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const days = [0, 1, 2, 3, 4, 5, 6];
const values = [100];

const Tooltip = () => (
  <G
    x={287}
    y={-30}
  >
    <G y={50}>
      <Rect
        height={40}
        width={50}
        stroke="white"
        fill="white"
        ry={10}
        rx={10}
        x={-30}
        y={10}
      />
      <Text
        x={-5}
        y={-10}
        dy={40}
        alignmentBaseline="middle"
        textAnchor="middle"
        stroke="gray"
      >
        $701
      </Text>
    </G>
    <G x={37}>
      <Circle
        cy={70}
        r={6}
        y={-3}
        stroke="#73c766"
        strokeWidth={2}
        fill="#73c766"
      />
    </G>
  </G>
);

const CustomLineChart = ({ chartData, chartDimension }) => (
  chartData.length > 0 ? (
    <View style={{ position: 'relative' }}>
      <YAxis
        data={values}
        contentInset={{ top: 10, bottom: 10 }}
        svg={{
          fill: 'grey',
          fontSize: 11,
        }}
        min={100}
        max={800}
        style={{ position: 'absolute', marginRight: 5, height: '100%' }}
        numberOfTicks={3}
        formatLabel={(value) => `$${value}`}
      />
      <LineChart
        data={chartData}
        svg={{
          strokeWidth: 4,
          stroke: 'rgba(175, 220, 139, 0.7)',
        }}
        curve={shape.curveNatural}
        style={{
          borderRadius: 8,
          width: chartDimension?.width,
          height: chartDimension?.height,
        }}
        contentInset={{
          left: 40, right: 10, top: 40, bottom: 30,
        }}
      >
        <Tooltip data={chartData} />
      </LineChart>
      <XAxis
        style={{ marginTop: 4, marginLeft: 5 }}
        data={days}
        contentInset={{ left: 40, right: 10 }}
        svg={{ fontSize: 11, fill: 'grey' }}
        formatLabel={(value) => daysOfWeek[value]}
      />
    </View>
  ) : (
    <Loading />
  )
);

CustomLineChart.propTypes = {
  chartData: PropTypes.instanceOf(Object).isRequired,
  chartDimension: PropTypes.instanceOf(Object),
};

CustomLineChart.defaultProps = {
  chartDimension: {},
};

export default CustomLineChart;
