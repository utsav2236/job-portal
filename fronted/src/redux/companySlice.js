import { createSlice } from "@reduxjs/toolkit";

const CompanySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies:[],
  },
  reducers: {
    //actions
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    }
  }
});

export const { setSingleCompany, setCompanies } = CompanySlice.actions;
export default CompanySlice.reducer;