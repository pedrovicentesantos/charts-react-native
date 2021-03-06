import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import globalStyles from '../../styles';
import CustomProgressChart from '../../components/CustomProgressChart/index';

function GoalsPerformance() {
  const [goalsDimensions, setGoalsDimensions] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [goalsData, setGoalsData] = useState(0.78);

  return (
    <View style={styles.container}>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Desempenho das Metas</Text>
        <View
          onLayout={(
            { nativeEvent: { layout: { width, height } } },
          ) => setGoalsDimensions({ width, height })}
          style={[
            styles.goalsChart,
            goalsDimensions
              ? globalStyles.withData
              : globalStyles.withoutData,
          ]}
        >
          <CustomProgressChart chartData={goalsData} chartDimension={goalsDimensions} />
          {goalsData !== null && (
            <View style={styles.goalsChartContainer}>
              <Text style={styles.goalsChartTitle}>
                {goalsData * 100}
                %
              </Text>
              <Text style={styles.goalsChartSubtitle}>R$ 1050/ semana</Text>
            </View>
          )}
        </View>
        <View style={styles.goalsDetailsContainer}>
          <View style={styles.thisMonthGoalsContainer}>
            <Text style={styles.thisMonthGoalsTitle}>Esse mês</Text>
            <View style={styles.thisMonthGoalsValueContainer}>
              <Text style={styles.thisMonthGoalsValue}>R$ 4.200</Text>
              <Text style={styles.thisMonthGoalsVariation}>+8.2%</Text>
            </View>
          </View>
          <View style={styles.lastMonthGoalsContainer}>
            <Text style={styles.lastMonthGoalsTitle}>Último mês</Text>
            <View style={styles.lastMonthGoalsValueContainer}>
              <Text style={styles.lastMonthGoalsValue}>R$ 4.008</Text>
              <Text style={styles.lastMonthGoalsVariation}>+4%</Text>
            </View>
          </View>
        </View>
        <View style={styles.impressionsContainer}>
          <Text style={styles.impressionsTitle}>Tiragem</Text>
          <View style={styles.impressionsLine}>
            <View style={styles.countryContainer}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[styles.countryMarker, styles.countryPositiveMarker]}
                />
                <Text style={styles.countryName}>Europa</Text>
              </View>
              <Text style={styles.countryVariation}>34%</Text>
            </View>
            <View style={styles.countryContainer}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[styles.countryMarker, styles.countryNegativeMarker]}
                />
                <Text style={styles.countryName}>America</Text>
              </View>
              <Text style={styles.countryVariation}>28%</Text>
            </View>
          </View>
          <View style={styles.impressionsLine}>
            <View style={styles.countryContainer}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[styles.countryMarker, styles.countryNeutralMarker]}
                />
                <Text style={styles.countryName}>Asia</Text>
              </View>
              <Text style={styles.countryVariation}>22%</Text>
            </View>
            <View style={styles.countryContainer}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[styles.countryMarker, styles.countryNegativeMarker]}
                />
                <Text style={styles.countryName}>Africa</Text>
              </View>
              <Text style={styles.countryVariation}>16%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default GoalsPerformance;
