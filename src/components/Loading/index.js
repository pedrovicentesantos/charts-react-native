import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#2b2b73" />
  </View>
);

export default Loading;
