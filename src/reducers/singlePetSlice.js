import {
  createAsyncThunk,
  createNextState,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSinglePet = createAsyncThunk(
  "pets/fetchSinglePet",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/pets/${id}`);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const updatePet = createAsyncThunk(
  "pets/update",
  async ({ id, name, food, age }) => {
    try {
      const { data } = await axios.put(`/api/pets/${id}`, {
        name,
        food,
        age,
      });
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const singlePetSlice = createSlice({
  name: "pet",
  initialState: {},
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSinglePet.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updatePet.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { updateName } = singlePetSlice.actions;

export const selectSinglePet = (state) => {
  return state.pet;
};

export default singlePetSlice.reducer;
