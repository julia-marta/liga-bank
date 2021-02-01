import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import swal from 'sweetalert';

export const getResult = createAsyncThunk('converter/getResult', (base, {extra}) => {

  return extra.get(`/latest?base=${base}`)
  .then(response => response.data)
  .catch((error) => {
    swal(`Error`, `Something went wrong!`, `error`);
    throw error;
  })
});

const initialState = {
  current: 'have',
  amount: '',
  from: 'RUB',
  to: 'USD',
  result: '',
}

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setCurrent(state, action) {
      state.current = action.payload
    },
    setAmount(state, action) {
      state.amount = action.payload
    },
    setBaseCurrency(state, action) {
      state.from = action.payload
    },
    setOtherCurrency(state, action) {
      state.to = action.payload
    },
  },
  extraReducers: {
    [getResult.fulfilled]: (state, action) => {
      state.result = (action.payload.rates[state.to] * state.amount).toFixed(4);
    }
  }
});

const Reducer = converterSlice.reducer;

export const {setCurrent, setAmount, setBaseCurrency, setOtherCurrency} = converterSlice.actions;
export default Reducer;
