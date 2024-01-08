import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {genderCountDisplayStyles} from "./gender-counter.styles.ts";
import {Separator} from "components/separator";

interface GenderCountDisplayProps {
  genderCount: {
    male: number;
    female: number;
    other: number;
  };
}

export const GenderCountDisplay: FC<GenderCountDisplayProps> = ({genderCount}) => {
  return (
    <View style={genderCountDisplayStyles.container}>
      <View style={[genderCountDisplayStyles.counterItem, genderCountDisplayStyles.shadowProp]}>
        <Text style={genderCountDisplayStyles.counterText}>
          Male: {genderCount.male}
        </Text>
      </View>

      <Separator size={8} orientation={"horizontal"}/>

      <View style={[genderCountDisplayStyles.counterItem, genderCountDisplayStyles.shadowProp]}>
        <Text style={genderCountDisplayStyles.counterText}>
          Female: {genderCount.female}
        </Text>
      </View>

      <Separator size={8} orientation={"horizontal"}/>

      <View style={[genderCountDisplayStyles.counterItem, genderCountDisplayStyles.shadowProp]}>
        <Text style={genderCountDisplayStyles.counterText}>
          Other: {genderCount.other}
        </Text>
      </View>
    </View>
  );
};

export default GenderCountDisplay;
