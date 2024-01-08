import {StyleSheet} from 'react-native';
import {COLORS} from "theme/colors.ts";

export const characterItemStyles = StyleSheet.create({
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  shadowProp: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    color: COLORS.primary,
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
});
