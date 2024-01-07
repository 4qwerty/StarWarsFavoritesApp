import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { RootStackComponent } from './root-stack.tsx';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <RootStackComponent />
    </NavigationContainer>
  );
};
