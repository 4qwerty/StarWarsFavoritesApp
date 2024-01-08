import {StyleSheet} from 'react-native';
import {COLORS} from "theme/colors.ts";

export const characterListStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    marginBottom: 30,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  resetButton: {
    marginRight: 8
  },
  pageNumber: {
    color: COLORS.primary
  }
});
