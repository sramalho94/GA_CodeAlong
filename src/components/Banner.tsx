import {View, Text} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View className="flex-col h-24 bg-black justify-center align-middle">
      <View className="flex-row justify-center">
        <Text className="text-lg text-white">OMDB API MOVIE SEARCH</Text>
      </View>
    </View>
  );
};

export default Banner;
