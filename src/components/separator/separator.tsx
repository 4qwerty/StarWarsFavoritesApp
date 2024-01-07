import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface ISeparatorProps {
  size: number;
  orientation?: 'horizontal' | 'vertical';
  style?: StyleProp<ViewStyle>;
}

export const Separator: FC<ISeparatorProps> = ({
  size,
  orientation = 'vertical',
  style,
}) => (
  <View
    testID="separator"
    style={[orientation === 'vertical' ? { height: size } : { width: size }, style]}
  />
);
