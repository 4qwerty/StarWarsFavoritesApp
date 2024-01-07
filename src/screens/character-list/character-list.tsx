import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useGetCharacterListQuery} from "services/api/swapi";
import {characterListStyles} from './character-list.styles';
import {ICharacter} from "types/сharacter.ts";
import {Separator} from "components/separator";

const CharacterListScreen = () => {
  const {data, isLoading} = useGetCharacterListQuery(1);

  const renderItem = ({item}: { item: ICharacter }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.birth_year}</Text>
      <Text>{item.gender}</Text>
      <Text>{item.species}</Text>
      <Separator size={8} />
    </View>
  );

  return (
    <View style={characterListStyles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data?.results}
          renderItem={renderItem}
          keyExtractor={item => item.url}
        />
      )}
    </View>
  );
};

export default CharacterListScreen;
