import {StyleSheet} from 'react-native';
import {COLORS} from "theme/colors.ts";

export const genderCountDisplayStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8
  },
  counterItem: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    backgroundColor: COLORS.white
  },
  counterText: {
    textAlign: "center",
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
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
});
