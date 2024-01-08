import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {COLORS} from 'theme/colors';
import {RootStackParamList} from "navigation/types.ts";
import {CharacterListScreen} from "screens/character-list";
import {CharacterDetailScreen} from "screens/character-detail";


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
        headerBackTitle: ' ',
      }}>
      <RootStack.Screen
        name="CharacterList"
        component={CharacterListScreen}
        options={{
          title: 'Star Wars Characters',
        }}
      />
      <RootStack.Screen
        name="CharacterDetail"
        component={CharacterDetailScreen}
        options={{
          title: 'Info',
        }}
      />
    </RootStack.Navigator>
  );
};
