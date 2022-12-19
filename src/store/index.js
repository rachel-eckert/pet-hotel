import { configureStore } from "@reduxjs/toolkit";

import roomReducer from "../reducers/roomSlice";
import petReducer from "../reducers/petSlice";
import singleRoomReducer from "../reducers/singleRoomSlice";
import singlePetReducer from "../reducers/singlePetSlice";

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    pets: petReducer,
    room: singleRoomReducer,
    pet: singlePetReducer,
  },
});
