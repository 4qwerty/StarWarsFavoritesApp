import { useMemo, useState } from "react";
import { ICharacter } from "../types/сharacter";

interface IFavouriteCharacter {
  url: string;
  gender: string;
}

export const useFavorites = () => {
  const [favourites, setFavourites] = useState<Set<IFavouriteCharacter>>(new Set());

  const handleAddToFavourites = (character: ICharacter) => {
    setFavourites(prev => new Set([...prev, { url: character.url, gender: character.gender }]));
  };

  const handleRemoveFromFavourites = (url: string) => {
    setFavourites(prev => new Set([...prev].filter(fav => fav.url !== url)));
  };

  const resetFavourites = () => {
    setFavourites(new Set());
  };

  const genderCount = useMemo(() => {
    const count = { male: 0, female: 0, other: 0 };
    favourites.forEach(fav => {
      const gender = fav.gender.toLowerCase();
      if (gender === 'male') count.male += 1;
      else if (gender === 'female') count.female += 1;
      else count.other += 1;
    });
    return count;
  }, [favourites]);

  return { favourites, handleAddToFavourites, handleRemoveFromFavourites, genderCount, resetFavourites };
};


