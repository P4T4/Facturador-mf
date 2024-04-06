import { createSlice } from "@reduxjs/toolkit";
import { FormInputsProps } from "@shared/utils/form-inputs.interface";

const initialState: { factura: FormInputsProps } = {
  factura: {
    company: {
      nameCompany: "",
      fiscalNumberCompany: 0,
    },
    customer: {
      nameCompany: "",
      fiscalNumberCompany: 0,
    },
    invoice: {
      date: "",
      products: [],
      title: "",
    },
  },
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setInvoiceState: (state, { payload }) => {
      state.factura = payload;
    },
  },
});

export const { setInvoiceState } = invoiceSlice.actions;
export const invoiceReducer = invoiceSlice.reducer;
