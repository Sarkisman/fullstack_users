import { Employee } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';
import { epmloyeesApi } from '../../app/services/employees';
import { RootState } from '../../app/store';

interface InitialState {
  employees: Employee[] | null;
}
const initialState: InitialState = {
  employees: null,
};

const slice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      epmloyeesApi.endpoints.getAllEmployees.matchFulfilled,
      (state, action) => {
        state.employees = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectEmployees = (state: RootState) => state.employees;
