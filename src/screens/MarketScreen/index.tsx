import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import useMarketData from './useMarketHook';
import Text from '../../components/Text';
import { SCREEN_WIDTH, hp, wp } from '../../utils/style.utils';
import { ThemeColors } from '../../utils/colors';
import styles from './styles';

const MarketScreen = () => {
  const { marketData, loading } = useMarketData();

  const chartData = {
    labels: marketData.map((_, index) => (index + 1).toString()),
    datasets: [{ data: marketData }]
  };

  const renderItem = ({ item, index }: { item: number; index: number }) => (
    <Text key={index}>Price {index + 1}: ${item.toFixed(2)}</Text>
  );

  const renderEmptyComponent = () => (
    <Text style={styles.noDataText}>No market data available</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.mb20}>
        {loading ? (
          <ActivityIndicator size="large" color={ThemeColors.primary} />
        ) : marketData.length > 0 ? (
          <LineChart
            data={chartData}
            width={SCREEN_WIDTH - 32}
            height={hp(220)}
            withVerticalLabels={false}
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: ThemeColors.primaryLightest,
              backgroundGradientFrom: ThemeColors.primary,
              backgroundGradientTo: ThemeColors.primaryLight,
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: wp(16)
              }
            }}
            bezier
            style={{
              marginVertical: hp(8),
              borderRadius: wp(16)
            }}
          />
        ) : (
          <Text style={styles.noDataText}>No valid data available</Text>
        )}
      </View>
      <FlatList
        data={marketData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={renderEmptyComponent}
        style={styles.priceList}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: hp(20) }}
      />
    </View>
  );
}

export default MarketScreen;