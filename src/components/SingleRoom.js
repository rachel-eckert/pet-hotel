import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleRoom } from "../reducers/singleRoomSlice";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

const SingleRoom = () => {
  const { id } = useParams();

  const room = useSelector((state) => state.room);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleRoom(id));
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
              <img className="petImg" src={room.imageUrl} />
            </div>
            <p>
              <b>Name: </b>
              {room.name}
            </p>
            <p>
              <b>Description: </b>
              {room.description}
            </p>
          </div>

          <div>
            <br />
            <h3>Pets</h3>
            {room.pets && room.pets[0] ? (
              room.pets.map((pet) => (
                <div>
                  <Link key={pet.id} to={`/pets/${pet.id}`}>
                    <p>
                      <b>Pet Name: </b>
                      {pet.name}
                    </p>
                  </Link>
                </div>
              ))
            ) : (
              <p>This room has no pets</p>
            )}
          </div>
        </div>
      </Box>
    </Grid>
  );
};

export default SingleRoom;
