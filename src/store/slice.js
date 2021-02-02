import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import swal from 'sweetalert';
import {DefaultField} from "../const";

const {CURRENT_INPUT, BASE_CURRENCY, OTHER_CURRENCY} = DefaultField;

export const getResult = createAsyncThunk('converter/getResult', ({base, date} = {}, {extra}) => {

  return extra.get(`/${date}?base=${base}`)
  .then(response => response.data)
  .catch((error) => {
    swal(`Error`, `Something went wrong!`, `error`);
    throw error;
  })
});

const initialState = {
  current: CURRENT_INPUT,
  amount: '',
  from: BASE_CURRENCY,
  to: OTHER_CURRENCY,
  date: new Date(),
  result: 0,
  logs: [],
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
    setDate(state, action) {
      state.date = action.payload
    },
    addLog(state) {
      state.logs.push({
          date: state.date,
          base: {
            sum: state.amount,
            currency: state.from,
          },
          result: {
            sum: state.result,
            currency: state.to,
          }
      })
    },
    deleteLog(state) {
      state.logs.splice(0, 1);
    },
    clearLogs(state) {
      state.logs.length = 0;
    },
  },
  extraReducers: {
    [getResult.fulfilled]: (state, action) => {
      state.result = (action.payload.rates[state.to] * state.amount);
    }
  }
});

const Reducer = converterSlice.reducer;

export const {setCurrent, setAmount, setBaseCurrency, setOtherCurrency, setDate, addLog, deleteLog, clearLogs} = converterSlice.actions;
export default Reducer;
