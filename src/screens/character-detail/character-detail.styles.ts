import {StyleSheet} from 'react-native';
import {COLORS} from "theme/colors.ts";

export const characterDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.primary
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
    color: COLORS.textFadeTransparent
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: COLORS.primary
  },
  link: {
    fontSize: 16,
    marginBottom: 5,
    color: COLORS.link,
    textDecorationLine: 'underline'
  }
});
