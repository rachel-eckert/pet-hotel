import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePet } from "../reducers/singlePetSlice";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import StyledBox from "./SingleBox";
import StyledGrid from "./SingleGrid";
import UpdatePet from "./UpdatePet";

const SinglePet = () => {
  const { id } = useParams();

  const pet = useSelector((state) => state.pet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSinglePet(id));
  }, [dispatch]);

  return (
    <StyledGrid container>
      <StyledBox>
        <div>
          <div>
            <div>
              <img className="petImg" src={pet.imageUrl} />
            </div>
            <p>
              <b>Name: </b>
              {pet.name}
            </p>
            <p>
              <b>Species: </b>
              {pet.species}
            </p>
            <p>
              <b>Food: </b>
              {pet.food}
            </p>
            <p>
              <b>Age: </b>
              {pet.age}
            </p>
            <div className="updateForm">
              <UpdatePet />
            </div>
          </div>

          <div>
            <br />
            <h3>Room</h3>
            {pet.room ? (
              <div>
                <Link
                  key={pet.room.id}
                  className="pet-link"
                  to={`/rooms/${pet.room.id}`}>
                  <p>{pet.room.name}</p>
                </Link>
              </div>
            ) : (
              <p>This pet is not in a room</p>
            )}
          </div>
        </div>
      </StyledBox>
    </StyledGrid>
  );
};

export default SinglePet;
