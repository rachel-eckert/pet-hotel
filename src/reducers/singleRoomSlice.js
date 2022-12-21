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
  async ({ id, name, description }) => {
    try {
      const { data } = await axios.put(`/api/rooms/${id}`, {
        name,
        description,
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
      //return state.filter((student) => student.id == action.payload.id)
      //<-- does not work? bottom does. figure out the difference! something with the splice?
      for (let i = 0; i < state.pets.length; i++) {
        if (state.pets[i].id === action.payload.id) {
          state.pets.splice(i, 1);
        }
      }
    });
  },
});

export const selectSingleRoom = (state) => {
  return state.room;
};
export default singleRoomSlice.reducer;
