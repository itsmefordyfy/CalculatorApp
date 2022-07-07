/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigator from './app/navigation';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GlobalProvider>
        <Navigator />
      </GlobalProvider>
    </SafeAreaView>
  );
};

import {StyleSheet} from 'react-native';
import {GlobalProvider} from './app/context/GlobalContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
