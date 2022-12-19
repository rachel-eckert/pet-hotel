import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPets = createAsyncThunk("/pets", async () => {
  try {
    const { data } = await axios.get("/api/pets");
    return data;
  } catch (err) {
    return err.message;
  }
});

export const addNewPet = createAsyncThunk("pets/add", async (newPet) => {
  try {
    const { data } = await axios.post("/api/pets", newPet);
    return data;
  } catch (err) {
    return err.message;
  }
});

export const deletePet = createAsyncThunk("pet/delete", async (id) => {
  await axios.delete(`/api/pets/${id}`);
  return id;
});

const petSlice = createSlice({
  name: "pets",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPets.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewPet.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deletePet.fulfilled, (state, action) => {
      return state.filter((pet) => pet.id !== action.payload);
    });
  },
});

export default petSlice.reducer;
