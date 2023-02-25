import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

import {Button} from '../components/Button';

export function Confirmation() {
  const navigator = useNavigation();

  return (
    <View className="flex-1 px-8 items-center justify-center">
      <Text className="mb-10 text-[75px] text-emoji">😊</Text>
      <Text className="my-4 text-2xl font-semibold text-gray-600 dark:text-white">
        Prontinho
      </Text>

      <Text className="text-lg text-center text-gray-600 dark:text-white">
        Agora vamos começar a cuidar das suas{'\n'}
        plantinhas com muito cuidado.
      </Text>

      <View className="w-full my-10 px-10">
        <Button
          className="w-full"
          title="Começar"
          onPress={() => navigator.navigate('PlantSelector')}
        />
      </View>
    </View>
  );
}
