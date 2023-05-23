import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Banner from '../components/Banner';
import SearchField from '../components/SearchField';
import {useState} from 'react';

// const apiUrl: string = `http://www.omdbapi.com/?t=${}apikey=615a6ca8&t=`;

const LandingPage = () => {
  const [movieResults, setMovieResults] = useState<string>('');

  const handleSearch = async (searchString: string) => {
    const result = await fetch(
      `https://www.omdbapi.com/?t=${searchString}&apikey=2c0bcb9f`,
    ).then(data => data.json());
    setMovieResults(result);
  };

  return (
    <SafeAreaView className="min-h-screen min-w-screen">
      <Banner />
      <SearchField onSubmit={handleSearch} />
    </SafeAreaView>
  );
};

export default LandingPage;
