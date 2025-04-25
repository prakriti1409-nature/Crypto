import { createSlice } from '@reduxjs/toolkit';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    cryptos: []
  },
  reducers: {
    setCryptos(state, action) {
      state.cryptos = action.payload;
    },
    updateCrypto(state, action) {
      const updated = action.payload;
      const index = state.cryptos.findIndex(c => c.symbol === updated.symbol);
      if (index !== -1) {
        state.cryptos[index] = { ...state.cryptos[index], ...updated };
      }
    }
  }
});

export const { setCryptos, updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
