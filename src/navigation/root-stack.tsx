import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { COLORS } from 'theme/colors';
import { useAppSelector } from 'services/store';
import {RootStackParamList} from "navigation/types.ts";
import CharacterListScreen from "screens/character-list/character-list.tsx";
import CharacterDetail from "screens/character-detail/character-detail.tsx";

export const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackComponent: FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: COLORS.white,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerBackgroundContainerStyle: {
          borderBottomColor: COLORS.primary,
          borderBottomWidth: 1,
        },
        cardStyle: {
          backgroundColor: COLORS.white,
        },
        headerBackTitle: ('back'),
      }}>
      <RootStack.Screen
        name="CharacterList"
        component={CharacterListScreen}
        options={{
          title: 'Character List',
        }}
      />
      <RootStack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
