import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IProgress {
  current: number;
  total: number;
}

interface ILoadingSliceState {
  isLoading: boolean;
  progressBar: {
    id: string;
    progress: IProgress;
  }[];
}

const loadingInitialSlice: ILoadingSliceState = {
  isLoading: false,
  progressBar: [],
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: loadingInitialSlice,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;

      if (action.payload) return;

      state.progressBar = [];
    },
  },
});

export const {
  setLoading,
} = loadingSlice.actions;
