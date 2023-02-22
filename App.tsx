import React from 'react';
import {SafeAreaView} from 'react-native';

import {Welcome} from './src/pages/Welcome';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Welcome />
    </SafeAreaView>
  );
}
