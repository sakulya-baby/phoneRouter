import { createSlice } from "@reduxjs/toolkit";
import { Phone } from "../utils/constants/general";

export const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    Phone,
    phoneID: [],
    phoneObject: {},
  },
  reducers: {
    addPhoneId: (state, action) => {
      state.phoneObject = state.Phone.find(
        (item) => item.id === action.payload
      );
    },
  },
});

export const { addPhoneId } = phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;
