import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countr1: 0,
  countr2: 0,
  countr3: 1,
  countr4: 0,
  countr5: 0,
  countr6:0,
  thIdx9: 0,
  motr:"",
  usRp:"",
  clId:"",
  thbl: true,
  kybtn:false,
  procss:"",
  procss1:"",
  procss2:"",
  procss3:"",
  procss4:"",
  modeTo:"",

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
    resetc1:(state) => {
      state.countr1 = 0;
    },

    incrementc2: (state) => {
      state.countr2 += 1;
    },
    decrementc2: (state) => {
      state.countr2 -= 1;
    },
    resetc2:(state) => {
      state.countr2 = 0;
    },

    incrementc6: (state) => {
      state.countr6 += 1;
    },
    decrementc6: (state) => {
      state.countr6 -= 1;
    },
    resetc6:(state) => {
      state.countr6 = 0;
    },


    incrementc3: (state) => {
      state.countr3 += 1;
    },
    decrementc3: (state) => {
      state.countr3 -= 1;
    },
    resetc3:(state) => {
      state.countr3 = 0;
    },

    incrementc4: (state) => {
      state.countr4 += 1;
    },
    decrementc4: (state) => {
      state.countr4 -= 1;
    },
    resetc4:(state) => {
      state.countr4 = 0;
    },

    changeMo:(state,thValue) => {
      state.motr = thValue.payload;
    },

    changeModTo:(state,thValue4) => {
      state.modeTo = thValue4.payload;
    },

    changeUsr:(state,thDt) => {
      state.usRp = thDt.payload;
    },

    changeclId:(state,thVlue) => {
      state.clId = thVlue.payload;
    },

    chngTrue: (state) => {
      state.thbl = true;
    },
    chngFalse:(state) => {
      state.thbl = false;
    },

    chngthIdx9:(state,tVlue) => {
      state.thIdx9 = tVlue.payload;
    },

    chngthKyFalse:(state) => {
      state.kybtn = false;
    },

    chngthKyTrue:(state) => {
      state.kybtn = true;
    },

    chngProcss1:(state,tVlue) => {
      state.procss1 = tVlue.payload;
    },

    chngProcss2:(state,tVlue) => {
      state.procss2 = tVlue.payload;
    },

    chngProcss3:(state,tVlue) => {
      state.procss3 = tVlue.payload;
    },

    chngProcss4:(state,tVlue) => {
      state.procss4 = tVlue.payload;
    },

    chngProcss:(state,tVlue) => {
      state.countr5 = tVlue.payload;
    },

    incrementc5: (state) => {
      state.countr5 += 1;
    },
    resetc5:(state) => {
      state.countr5 = 0;
    },

    chngflse: (state) => {
      state.thbl = false;
    },

    chngtrue:(state) => {
      state.thbl = true;
   },
    
  },
 
});

export const { incrementc1, decrementc1, resetc1, incrementc2, decrementc2, resetc2, changeMo, incrementc4, decrementc4, resetc4, chngTrue, chngFalse, changeclId, changeUsr, chngthIdx9, chngthKyFalse, chngthKyTrue, incrementc3, decrementc3, resetc3, chngProcss, chngProcss1, chngProcss2, chngProcss3, chngProcss4, incrementc5, resetc5, chngflse, chngtrue, incrementc6, decrementc6, resetc6, changeModTo} = counterSlice.actions;
export const selectCount = (state) => state.counter.countr1;
export const cntr1 = (state) => state.counter.countr1;
export const cntr2 = (state) => state.counter.countr2;
export const cntr3 = (state) => state.counter.countr3;
export const cntr4 = (state) => state.counter.countr4;
export const cntr5 = (state) => state.counter.countr5;
export const cntr6 = (state) => state.counter.countr6;
export const tbol = (state) => state.counter.thbl;
export const lmot = (state) => state.counter.motr;
export const usRep = (state) => state.counter.usRp
export const tId9 = (state) => state.counter.clId;
export const tindx9 = (state) => state.counter.thIdx9; //kybtn
export const kybtn9 = (state) => state.counter.kybtn;
export const procs = (state) => state.counter.procss;
export const procs1 = (state) => state.counter.procss1;
export const procs2 = (state) => state.counter.procss2;
export const procs3 = (state) => state.counter.procss3;
export const procs4 = (state) => state.counter.procss4;
export const counter5k = (state) => state.counter.counter5;
export const thbol = (state) => state.counter.thbl;
export const lmode = (state) => state.counter.modeTo;



export default counterSlice.reducer;
