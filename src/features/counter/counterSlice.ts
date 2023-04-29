import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

interface CounterState {
  countr1: number;
  countr2: number;
  countr3: number;
  countr4: number;
  countr5: number;
  countr6: number;
  thIdx9: number;
  motr: string;
  usRp: string;
  clId: string;
  thbl: boolean;
  kybtn: boolean;
  procss: string;
  procss1: string;
  procss2: string;
  procss3: string;
  procss4: string;
  modeTo: string;
}

const initialState: CounterState = {
  countr1: 0,
  countr2: 0,
  countr3: 1,
  countr4: 0,
  countr5: 0,
  countr6: 0,
  thIdx9: 0,
  motr: "",
  usRp: "",
  clId: "",
  thbl: true,
  kybtn: false,
  procss: "",
  procss1: "",
  procss2: "",
  procss3: "",
  procss4: "",
  modeTo: "",
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementc1: (state) => {
      state.countr1 += 1;
    },
    decrementc1: (state) => {
      state.countr1 -= 1;
    },
    resetc1: (state) => {
      state.countr1 = 0;
    },

    incrementc2: (state) => {
      state.countr2 += 1;
    },
    decrementc2: (state) => {
      state.countr2 -= 1;
    },
    resetc2: (state) => {
      state.countr2 = 0;
    },

    incrementc6: (state) => {
      state.countr6 += 1;
    },
    decrementc6: (state) => {
      state.countr6 -= 1;
    },
    resetc6: (state) => {
      state.countr6 = 0;
    },

    incrementc3: (state) => {
      state.countr3 += 1;
    },
    decrementc3: (state) => {
      state.countr3 -= 1;
    },
    resetc3: (state) => {
      state.countr3 = 0;
    },

    incrementc4: (state) => {
      state.countr4 += 1;
    },
    decrementc4: (state) => {
      state.countr4 -= 1;
    },
    resetc4: (state) => {
      state.countr4 = 0;
    },

    changeMo: (state, action: PayloadAction<string>) => {
      state.motr = action.payload;
    },

    changeModTo: (state, action: PayloadAction<string>) => {
      state.modeTo = action.payload;
    },

    changeUsr: (state, action: PayloadAction<string>) => {
      state.usRp = action.payload;
    },

    changeclId: (state, action: PayloadAction<string>) => {
      state.clId = action.payload;
    },

    chngTrue: (state) => {
        state.thbl = true;
    },
      
    chngFalse: (state) => {
        state.thbl = false;
    },
  
    chngthIdx9: (state, action: PayloadAction<number>) => {
        state.thIdx9 = action.payload;
    },
  
    chngthKyFalse: (state) => {
        state.kybtn = false;
    },
  
    chngthKyTrue: (state) => {
        state.kybtn = true;
    },
  
    chngProcss1: (state, action: PayloadAction<string>) => {
        state.procss1 = action.payload;
    },
  
    chngProcss2: (state, action: PayloadAction<string>) => {
        state.procss2 = action.payload;
    },
  
    chngProcss3: (state, action: PayloadAction<string>) => {
        state.procss3 = action.payload;
    },
  
    chngProcss4: (state, action: PayloadAction<string>) => {
        state.procss4 = action.payload;
    },
  
    chngProcss: (state, action: PayloadAction<number>) => {
        state.countr5 = action.payload;
    },
  
    incrementc5: (state) => {
        state.countr5 += 1;
    },
  
    resetc5: (state) => {
        state.countr5 = 0;
    },
  
    chngflse: (state) => {
        state.thbl = false;
    },
  
    chngtrue: (state) => {
        state.thbl = true;
    },

    },
});


export const { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo} = counterSlice.actions;



export const selectCountr1 = (state: RootState) => state.counter.countr1;
export const selectCountr2 = (state: RootState) => state.counter.countr2;
export const selectCountr3 = (state: RootState) => state.counter.countr3;
export const selectCountr4 = (state: RootState) => state.counter.countr4;
export const selectCountr5 = (state: RootState) => state.counter.countr5;
export const selectCountr6 = (state: RootState) => state.counter.countr6;
export const selectThbl = (state: RootState) => state.counter.thbl;
export const selectMotr = (state: RootState) => state.counter.motr;
export const selectUsRp = (state: RootState) => state.counter.usRp;
export const selectClId = (state: RootState) => state.counter.clId;
export const selectThIdx9 = (state: RootState) => state.counter.thIdx9;
export const selectKybtn9 = (state: RootState) => state.counter.kybtn;
export const selectProcss = (state: RootState) => state.counter.procss;
export const selectProcss1 = (state: RootState) => state.counter.procss1;
export const selectProcss2 = (state: RootState) => state.counter.procss2;
export const selectProcss3 = (state: RootState) => state.counter.procss3;
export const selectProcss4 = (state: RootState) => state.counter.procss4;
export const selectCounter5 = (state: RootState) => state.counter.countr5;
export const selectModeTo = (state: RootState) => state.counter.modeTo;

export default counterSlice.reducer;