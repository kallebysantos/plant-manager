import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import colors from 'tailwindcss/colors';

import {Routes} from './src/routes';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView className="flex-1">
      <StatusBar
        barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={
          colorScheme === 'light' ? colors.white : colors.gray[800]
        }
      />
      <Routes />
    </SafeAreaView>
  );
}
