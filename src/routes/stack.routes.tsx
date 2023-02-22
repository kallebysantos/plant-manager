import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import colors from '../styles/colors';

import {Welcome} from '../pages/Welcome';
import {UserIdentification} from '../pages/UserIdentification';
/* import {Confirmation} from '../pages/Confirmation';
import {PlantSelect} from '../pages/PlantSelect'; */

export type StackRoutesList = {
  Welcome: undefined;
  UserIdentification: undefined;
  Confirmation: undefined;
  PlantSelect: undefined;
};

const stackRoutes = createNativeStackNavigator<StackRoutesList>();

export const StackRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: colors.white,
      },
    }}>
    <stackRoutes.Screen name="Welcome" component={Welcome} />

    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    {/*
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />

    <stackRoutes.Screen name="PlantSelect" component={PlantSelect} /> */}
  </stackRoutes.Navigator>
);
