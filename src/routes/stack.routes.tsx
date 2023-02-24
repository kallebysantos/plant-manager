import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from 'tailwindcss/colors';

import {Welcome} from '../pages/Welcome';
import {UserIdentification} from '../pages/UserIdentification';
import {useColorScheme} from 'react-native';
import {Confirmation} from '../pages/Confirmation';

/*import {PlantSelect} from '../pages/PlantSelect'; */

export type StackRoutesList = {
  Welcome: undefined;
  UserIdentification: undefined;
  Confirmation: undefined;
  PlantSelect: undefined;
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

      {/* <stackRoutes.Screen name="PlantSelect" component={PlantSelect} /> */}
    </stackRoutes.Navigator>
  );
}
