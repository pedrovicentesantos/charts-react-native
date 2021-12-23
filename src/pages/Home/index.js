import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import globalStyles from '../../styles';
import CustomBarChart from '../../components/CustomBarChart';
import { yourBusinessData, yourCompetitorData } from '../../helpers/charData';
import CustomProgressChart from '../../components/CustomProgressChart';

function Home() {
  const [yourBusinessDimensions, setYourBusinessDimensions] = useState(null);
  const [yourCompetitorDimensions, setYourCompetitorDimensions] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [goalsData, setGoalsData] = useState(0.78);
  const [goalsDimensions, setGoalsDimensions] = useState(null);
  const navigation = useNavigation();

  function handleGoalsPerformancePress() {
    navigation.navigate('goals-performance');
  }

  function handleProductReportPress() {
    navigation.navigate('product-report');
  }

  return (
    <View style={styles.container}>
      <View style={styles.comparisonContainer}>
        <View style={styles.comparisonTitleContainer}>
          <Text style={styles.comparisonTitle}>Comparação</Text>
          <AntDesign name="swap" style={styles.comparisonIcon} />
        </View>
        <View style={styles.businessAnalyticsContainer}>
          <View style={styles.businessAnalyticsData}>
            <Text style={styles.businessAnalyticsTitle}>Seu Negócio</Text>
            <View style={styles.businessAnalyticsValueContainer}>
              <Text style={styles.businessAnalyticsValue}>R$ 8.200,00</Text>
              <Text
                style={[
                  styles.businessAnalyticsValueVariation,
                  styles.businessAnalyticsValuePositiveVariation,
                ]}
              >
                +24%
              </Text>
            </View>
          </View>
          <View
            onLayout={(
              { nativeEvent: { layout: { width, height } } },
            ) => setYourBusinessDimensions({ width, height })}
            style={[
              styles.businessAnalyticsChart,
              yourBusinessData
                ? globalStyles.withData
                : globalStyles.withoutData,
            ]}
          >
            <CustomBarChart
              chartData={yourBusinessData}
              chartDimension={yourBusinessDimensions}
            />
          </View>
        </View>
        <View style={styles.businessAnalyticsContainer}>
          <View style={styles.businessAnalyticsData}>
            <Text style={styles.businessAnalyticsTitle}>Seu Concorrente</Text>
            <View style={styles.businessAnalyticsValueContainer}>
              <Text style={styles.businessAnalyticsValue}>R$ 7.600,00</Text>
              <Text
                style={[
                  styles.businessAnalyticsValueVariation,
                  styles.businessAnalyticsValueNegativeVariation,
                ]}
              >
                -16%
              </Text>
            </View>
          </View>
          <View
            onLayout={(
              { nativeEvent: { layout: { width, height } } },
            ) => setYourCompetitorDimensions({ width, height })}
            style={[
              styles.businessAnalyticsChart,
              yourBusinessData
                ? globalStyles.withData
                : globalStyles.withoutData,
            ]}
          >
            <CustomBarChart
              chartData={yourCompetitorData}
              chartDimension={yourCompetitorDimensions}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleProductReportPress}
          style={styles.comparisonButtonContainer}
          activeOpacity={0.75}
        >
          <Text style={styles.comparisonButtonText}>Ver mais detalhes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>Desempenho de Metas</Text>
        <BorderlessButton
          onPress={handleGoalsPerformancePress}
          style={styles.goalsAnalyticsContainer}
        >
          <View style={styles.weekBalance}>
            <View
              onLayout={() => setGoalsDimensions({ width: 80, height: 80 })}
              style={[
                styles.weekBalanceChart,
                goalsDimensions
                  ? globalStyles.withData
                  : globalStyles.withoutData,
              ]}
            >
              <CustomProgressChart
                chartData={goalsData}
                chartDimension={goalsDimensions}
                strokeWidth={4}
              />
              {goalsData !== null && (
                <View style={styles.goalsChartContainer}>
                  <Text style={styles.goalsChartTitle}>
                    {goalsData * 100}
                    %
                  </Text>
                </View>
              )}
            </View>
            {/* <View style={styles.weekBalanceChart} /> */}
            <View style={styles.weekBalanceData}>
              <View style={styles.weekBalanceDataDayContainer}>
                <Text style={styles.weekBalanceDataDayTitle}>Quarta-feira</Text>
                <Text
                  style={[
                    styles.weekBalanceDataDayTitle,
                    styles.weekBalanceDataDayTitleValue,
                  ]}
                >
                  +8.2%
                </Text>
              </View>
              <View style={styles.weekBalanceDataProductContainer}>
                <Text style={styles.weekBalanceDataProductTitle}>
                  Tigaroda Bike
                </Text>
                <Text style={styles.weekBalanceDataProductTitle}>
                  R$ 4.200,00
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.lastMonthBalance}>
            <Text style={styles.lastMonthBalanceText}>Último mês</Text>
            <Text
              style={[
                styles.lastMonthBalanceText,
                styles.lastMonthBalanceValue,
              ]}
            >
              R$ 4.008,00
            </Text>
          </View>
        </BorderlessButton>
      </View>
    </View>
  );
}

export default Home;
