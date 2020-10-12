import { createSlice } from '@reduxjs/toolkit';
interface State {
  name: any;
}

const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    name: ''
  },
  reducers: {
    setValue(state: State, actions: { payload: any; type: string }) {
      const { payload } = actions;
      return {
        ...state,
        name: payload
      };
    }
  }
});

export const { setValue } = sampleSlice.actions;

export default sampleSlice.reducer;
