import React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from 'react-native';
import {EnvironmentButton} from '../components/EnvironmentButton';
import {Header} from '../components/Header';
import {tw} from '../lib/tailwind';

export function PlantSelector() {
  return (
    <View className="flex-1 space-y-6">
      <View className="mt-6 space-y-6 px-4">
        <Header title="Kalleby" subtitle="Olá," />

        <View>
          <Text className="text-base font-medium text-gray-600 dark:text-white">
            Em qual ambiente
          </Text>
          <Text className="text-base text-gray-600 dark:text-white">
            você quer colocar sua planta?
          </Text>
        </View>
      </View>

      <View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => (
            <EnvironmentButton
              title="sala"
              state={(item === 2 && 'active') || undefined}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`ml-4 justify-center`}
        />
      </View>
    </View>
  );
}
