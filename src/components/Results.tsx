import {View, Text, Image} from 'react-native';
import React from 'react';
import {MovieResultType} from '../screens/LandingPage';

type Props = {movie: MovieResultType};

const Results = ({movie}: Props) => {
  return (
    <View className="m-10 border border-gray border-s rounded-lg p-2 flex-row w-screen mx-2 align-middle my-auto">
      <View className="justify-center">
        <Image source={{uri: movie.Poster}} className="h-24 w-24" />
      </View>
      <View className="flex-1 pl-2">
        <Text className="font-bold text-lg">{movie.Title}</Text>
        <Text>{movie.Rated}</Text>
        <Text className="mr-3">{movie.Plot}</Text>
      </View>
    </View>
  );
};

export default Results;
