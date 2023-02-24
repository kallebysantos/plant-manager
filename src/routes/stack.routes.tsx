import React from 'react';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from 'tailwindcss/colors';

import {Welcome} from '../pages/Welcome';
import {UserIdentification} from '../pages/UserIdentification';
import {Confirmation} from '../pages/Confirmation';
import {PlantSelector} from '../pages/PlantSelector';

export type StackRoutesList = {
  Welcome: undefined;
  UserIdentification: undefined;
  Confirmation: undefined;
  PlantSelector: undefined;
};

const stackRoutes = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
  const colorScheme = useColorScheme();

  return (
    <stackRoutes.Navigator
      key={colorScheme}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor:
            colorScheme === 'light' ? colors.white : colors.gray[800],
        },
      }}
    >
      <stackRoutes.Screen name="Welcome" component={Welcome} />

      <stackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />

      <stackRoutes.Screen name="Confirmation" component={Confirmation} />

      <stackRoutes.Screen name="PlantSelector" component={PlantSelector} />
    </stackRoutes.Navigator>
  );
}
