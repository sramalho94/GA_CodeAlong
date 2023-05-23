/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import LandingPage from './src/screens/LandingPage';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <LandingPage />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
