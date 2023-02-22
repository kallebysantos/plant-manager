import React from 'react';
import {SafeAreaView} from 'react-native';
import {UserIdentification} from './src/pages/UserIdentification';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <UserIdentification />
    </SafeAreaView>
  );
}
