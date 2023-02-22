import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import colors from 'tailwindcss/colors';

import wateringImg from '../assets/watering.png';

export function Welcome() {
  const navigator = useNavigation();

  return (
    <SafeAreaView className="p-12 flex-1 items-center justify-around">
      <Text className="text-3xl text-center font-heading text-gray-500">
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} className="w-full" resizeMode="contain" />

      <Text className="text-lg text-center font-body text-gray-500">
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity
        className="w-14 h-14 mb-2 bg-green-500 rounded-2xl items-center justify-center"
        activeOpacity={0.7}
        onPress={() => navigator.navigate('UserIdentification')}>
        <Feather name="chevron-right" size={32} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
