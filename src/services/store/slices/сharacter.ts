import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {swApi} from "services/api/swapi";
import {ICharacter} from "types/сharacter.ts";

interface ICharacterSliceState {
  characters: ICharacter[];
  currentCharacter?: ICharacter;
}

const initialCharacterSliceState: ICharacterSliceState = {
  characters: [],
};

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialCharacterSliceState,
  reducers: {
    resetCharacters: () => initialCharacterSliceState,
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    },
    setCurrentCharacter: (state, action: PayloadAction<ICharacter>) => {
      state.currentCharacter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      swApi.endpoints?.getCharacterList.matchFulfilled,
      (state, {payload}) => {
        state.characters = payload.results;
      },
    );
  },
});

export const {resetCharacters, setCharacters, setCurrentCharacter} = characterSlice.actions;

export default characterSlice.reducer;
