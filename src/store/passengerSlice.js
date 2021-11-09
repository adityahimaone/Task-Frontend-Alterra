import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialvalue = [
  {
    id: uuidv4(),
    nama: "Yoga",
    umur: 22,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Ria",
    umur: 19,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Fahmi",
    umur: 25,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Lala",
    umur: 21,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Ivan",
    umur: 25,
    jenisKelamin: "Pria",
  },
];

export const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengers: initialvalue,
  },
  reducers: {
    hapusPengunjung: (state, action) => {
      state.passengers = state.passengers.filter((item) => {
        console.log("item", item);

        return item.id !== action.payload;
      });
    },
    tambahPengunjung: (state, action) => {
        console.log("tambah passengers")
      const newData = {
        id: uuidv4(),
        ...action.payload,
      };
      state.passengers = [...state.passengers, newData];
    },
  },
});

export const { hapusPengunjung, tambahPengunjung } = passengerSlice.actions;
export default passengerSlice.reducer;
