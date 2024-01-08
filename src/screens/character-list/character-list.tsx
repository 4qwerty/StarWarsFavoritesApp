import React, {FC, useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import {useGetCharacterListQuery} from "services/api/swapi";
import {characterListStyles} from './character-list.styles';
import {ICharacter} from 'types/сharacter.ts';
import {Icons} from "constants/icons.ts";
import {COLORS} from "theme/colors.ts";
import {useFavorites} from "hooks/useFavorites.ts";
import {ITEMS_PER_PAGE, START_PAGE} from "constants/pagination.ts";
import {CharacterItem} from "components/character-item";
import {GenderCountDisplay} from "../../components/gender-counter";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "navigation/types.ts";

export const CharacterListScreen: FC = () => {
  const [currentNumberPage, setCurrentNumberPage] = useState(START_PAGE);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const {data, isLoading} = useGetCharacterListQuery(currentNumberPage);
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'CharacterDetail'>>();

  const totalPages = data?.count ? Math.ceil(data.count / ITEMS_PER_PAGE) : 0;

  const handlePageChange = useCallback((newPageNumber: number) => {
    if (newPageNumber >= 1 && newPageNumber <= totalPages) {
      setIsPageChanging(true);
      setCurrentNumberPage(newPageNumber);
    }
  }, [totalPages]);

  const {
    favourites,
    handleAddToFavourites,
    handleRemoveFromFavourites,
    resetFavourites,
    genderCount
  } = useFavorites();

  useEffect(() => {
    if (!isLoading) {
      setIsPageChanging(false);
    }
  }, [data, isLoading]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => resetFavourites()}
          style={{margin: 16}}
        >
          <Icons.Reset/>
        </TouchableOpacity>
      ),
    });
  }, [navigation, favourites]);

  const isFavourite = (url: string) => {
    return [...favourites].some(fav => fav.url === url);
  };

  const renderItem = ({item}: { item: ICharacter }) => (
    <CharacterItem
      item={item}
      isFavourite={isFavourite(item.url)}
      onAddToFavourites={() => handleAddToFavourites(item)}
      onRemoveFromFavourites={() => handleRemoveFromFavourites(item.url)}
    />
  );

  return (
    <View style={characterListStyles.container}>
      {isLoading || isPageChanging ? (
        <View style={[characterListStyles.spinner]}>
          <ActivityIndicator size="large"/>
        </View>
      ) : (
        <>
          <GenderCountDisplay genderCount={genderCount}/>

          <FlatList
            data={data?.results}
            renderItem={renderItem}
            keyExtractor={item => item.url}
            ListFooterComponent={
              <View style={characterListStyles.footer}>
                <TouchableOpacity
                  disabled={currentNumberPage === 1}
                  onPress={() => handlePageChange(currentNumberPage - 1)}
                >
                  <Icons.ArrowLeft fill={currentNumberPage === 1 ? COLORS.secondary : COLORS.black}/>
                </TouchableOpacity>
                <Text style={characterListStyles.pageNumber}>{currentNumberPage} / {totalPages}</Text>
                <TouchableOpacity
                  disabled={currentNumberPage === totalPages}
                  onPress={() => handlePageChange(currentNumberPage + 1)}
                >
                  <Icons.ArrowRight fill={currentNumberPage === data?.count ? COLORS.secondary : COLORS.black}/>
                </TouchableOpacity>
              </View>
            }
          />
        </>
      )}
    </View>
  );
};
