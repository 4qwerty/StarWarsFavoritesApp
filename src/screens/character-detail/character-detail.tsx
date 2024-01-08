import React, {FC} from 'react';
import {Text, Linking, ScrollView} from 'react-native';
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "navigation/types.ts";
import {characterDetailStyles} from './character-detail.styles.ts';

type CharacterDetailRouteProp = RouteProp<RootStackParamList, 'CharacterDetail'>;

export const CharacterDetailScreen: FC = () => {
  const route = useRoute<CharacterDetailRouteProp>();
  const {item} = route.params;

  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  }

  return (
    <ScrollView style={characterDetailStyles.container}>
      <Text style={characterDetailStyles.title}>{item.name}</Text>
      <Text style={characterDetailStyles.detail}>Height: {item.height}</Text>
      <Text style={characterDetailStyles.detail}>Mass: {item.mass}</Text>
      <Text style={characterDetailStyles.detail}>Hair Color: {item.hair_color}</Text>
      <Text style={characterDetailStyles.detail}>Skin Color: {item.skin_color}</Text>
      <Text style={characterDetailStyles.detail}>Eye Color: {item.eye_color}</Text>
      <Text style={characterDetailStyles.detail}>Birth Year: {item.birth_year}</Text>
      <Text style={characterDetailStyles.detail}>Gender: {item.gender}</Text>

      <Text style={characterDetailStyles.sectionTitle}>Films</Text>
      {item.films.map((film, index) => (
        <Text key={index} style={characterDetailStyles.link} onPress={() => openURL(film)}>Film {index + 1}</Text>
      ))}

      <Text style={characterDetailStyles.sectionTitle}>Starships</Text>
      {item.starships.map((starship, index) => (
        <Text key={index} style={characterDetailStyles.link}
              onPress={() => openURL(starship)}>Starship {index + 1}</Text>
      ))}

      <Text style={characterDetailStyles.sectionTitle}>Vehicles</Text>
      {item.vehicles.map((vehicle, index) => (
        <Text key={index} style={characterDetailStyles.link} onPress={() => openURL(vehicle)}>Vehicle {index + 1}</Text>
      ))}
    </ScrollView>
  );
};
