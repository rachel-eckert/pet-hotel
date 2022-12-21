import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePet } from "../reducers/singlePetSlice";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
const SinglePet = () => {
  const { id } = useParams();

  const pet = useSelector((state) => state.pet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSinglePet(id));
  }, [dispatch]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        bgcolor: "#87BBA2",
        pt: 3,
      }}>
      <Box
        justifyContent="center"
        sx={{
          display: "flex",
          width: "60%",
          height: "100vh",
          bgcolor: "#C9E4CA",
          p: 3,
          borderRadius: "16px",
        }}>
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
          </div>

          <div>
            <br />
            <h3>Room</h3>
            {pet.room ? (
              <div>
                <Link to={`/rooms/${pet.room.id}`}>
                  <p>{pet.room.name}</p>
                </Link>
              </div>
            ) : (
              <p>This pet is not in a room</p>
            )}
          </div>
        </div>
      </Box>
    </Grid>
  );
};

export default SinglePet;
