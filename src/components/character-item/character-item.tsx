import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {ICharacter} from 'types/сharacter.ts';
import {characterItemStyles} from './character-item.styles.ts';
import {Icons} from "constants/icons.ts";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "navigation/types.ts";
import {characterDetailStyles} from "screens/character-detail/character-detail.styles.ts";

interface CharacterItemProps {
  item: ICharacter,
  isFavourite: boolean,
  onAddToFavourites: () => void,
  onRemoveFromFavourites: () => void
}

export const CharacterItem: FC<CharacterItemProps> = (
  {
    item,
    isFavourite,
    onAddToFavourites,
    onRemoveFromFavourites
  }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'CharacterDetail'>>();

  const handleFavouritePress = () => {
    if (isFavourite) {
      onRemoveFromFavourites();
    } else {
      onAddToFavourites();
    }
  };

  return (
    <TouchableOpacity
      style={[characterItemStyles.itemCard, characterItemStyles.shadowProp]}
      onPress={() => navigation.navigate('CharacterDetail', {item})}
    >
      <View>
        <Text style={characterItemStyles.infoText}>Name: {item.name}</Text>
        <Text style={characterItemStyles.infoText}>Birth year: {item.birth_year}</Text>
        <Text style={characterItemStyles.infoText}>Gender: {item.gender}</Text>
      </View>

      <TouchableOpacity
        style={characterItemStyles.iconContainer}
        onPress={handleFavouritePress}
      >
        <Icons.Favourite
          fill={isFavourite ? 'red' : 'none'}
          stroke={isFavourite ? 'none' : 'black'}/>
      </TouchableOpacity>

    </TouchableOpacity>
  );
};
