import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchSingleRoom,
  selectSingleRoom,
  updatePet,
  unregisterPet,
} from "../reducers/singleRoomSlice";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import StyledBox from "./SingleBox";
import StyledGrid from "./SingleGrid";
import UpdateRoom from "./UpdateRoom";

const SingleRoom = () => {
  const { id } = useParams();

  const room = useSelector((state) => state.room);
  const dispatch = useDispatch();

  const roomPets = room.pets;

  useEffect(() => {
    dispatch(fetchSingleRoom(id));
  }, [dispatch]);
  console.log(room.pets);
  return (
    <StyledGrid container>
      <StyledBox>
        <div>
          <div>
            <div>
              <img className="roomImg" src={room.imageUrl} />
            </div>
            <p>
              <b>Name: </b>
              {room.name}
            </p>
            <p>
              <b>Description: </b>
              {room.description}
            </p>
            <div className="updateForm">
              <UpdateRoom />
            </div>
          </div>

          <div>
            <h3>Pets in this room:</h3>
            {roomPets && roomPets.length ? (
              roomPets.map((pet) => (
                <div>
                  <Link
                    className="pet-link"
                    key={pet.id}
                    to={`/pets/${pet.id}`}>
                    <p>
                      <b>Name: </b>
                      {pet.name}
                    </p>
                    <img className="pet-image" src={pet.imageUrl} />
                  </Link>
                  <br />
                  <button
                    onClick={() =>
                      dispatch(
                        unregisterPet({
                          id: pet.id,
                          pet: { roomId: null },
                        })
                      )
                    }>
                    Unregister
                  </button>
                </div>
              ))
            ) : (
              <p>This room has no pets</p>
            )}
          </div>
        </div>
      </StyledBox>
    </StyledGrid>
  );
};

export default SingleRoom;
