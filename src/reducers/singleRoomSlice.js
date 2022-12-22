import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleRoom = createAsyncThunk(
  "rooms/fetchSingleRoom",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/rooms/${id}`);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);
export const unregisterPet = createAsyncThunk(
  "pets/unregister",
  async ({ id, pet }) => {
    try {
      const { data } = await axios.put(`/api/pets/${id}`, pet);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);
export const updateRoom = createAsyncThunk(
  "rooms/update",
  async ({ id, name, description, imageUrl }) => {
    try {
      const { data } = await axios.put(`/api/rooms/${id}`, {
        name,
        description,
        imageUrl,
      });
      return data;
    } catch (err) {
      return err.message;
    }
  }
);
const singleRoomSlice = createSlice({
  name: "room",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSingleRoom.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateRoom.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(unregisterPet.fulfilled, (state, action) => {
      state.pets = state.pets.filter((pet) => pet.id !== action.payload.id);
    });
  },
});

export const selectSingleRoom = (state) => {
  return state.room;
};
export default singleRoomSlice.reducer;
