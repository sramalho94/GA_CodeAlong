import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.bannerText}>OMDB API MOVIE SEARCH</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: 'black',
    maxHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 24,
  },
});

export default Banner;
