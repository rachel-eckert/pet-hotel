import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRooms = createAsyncThunk("/rooms", async () => {
  try {
    const { data } = await axios.get("/api/rooms");
    return data;
  } catch (err) {
    return err.message;
  }
});

export const addNewRoom = createAsyncThunk("rooms/add", async (room) => {
  try {
    const { data } = await axios.post("/api/rooms", room);
    return data;
  } catch (err) {
    return err.message;
  }
});

export const deleteRoom = createAsyncThunk("rooms/delete", async (id) => {
  try {
    await axios.delete(`/api/rooms/${id}`);
    return id;
  } catch (err) {
    return err.message;
  }
});
const roomSlice = createSlice({
  name: "rooms",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewRoom.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      return state.filter((room) => room.id !== action.payload);
    });
  },
});

export const roomList = (state) => {
  return state.rooms;
};

export default roomSlice.reducer;
