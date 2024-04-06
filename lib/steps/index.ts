import { createSlice } from "@reduxjs/toolkit";
import { STEPS } from "@shared/constants/steps.const";

export interface IStepsState {
  label: string;
  active?: boolean;
  completed?: boolean;
  path: string;
}

const initialState: { steps: IStepsState[] } = {
  steps: STEPS,
};

export const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setStepsState: (state, { payload }) => {
      state.steps = payload;
    },
  },
});

export const { setStepsState } = stepsSlice.actions;
export const stepsReducer = stepsSlice.reducer;
