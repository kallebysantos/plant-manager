import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import colors from 'tailwindcss/colors';

import wateringImg from '../assets/watering.png';

export function Welcome() {
  const navigator = useNavigation();

  return (
    <SafeAreaView className="flex-1 items-center justify-around space-y-12 p-4 py-10">
      <Text className="text-center text-3xl font-bold text-gray-600  dark:text-white">
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} className="w-full" resizeMode="contain" />

      <Text className="text-center text-lg text-gray-600 dark:text-white">
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity
        className="h-14 w-14 items-center justify-center rounded-2xl bg-green-500"
        activeOpacity={0.7}
        onPress={() => navigator.navigate('UserIdentification')}
      >
        <Feather name="chevron-right" size={32} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
