import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  id: 1,
  fullName: "",
  email: "",
  phoneNumber: "",
  nationality: "",
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: initialValue,
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = { id: 1, ...action.payload };
      state.contacts = newContact;
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
