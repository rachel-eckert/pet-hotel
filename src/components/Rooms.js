import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, deleteRoom, roomList } from "../reducers/roomSlice";
// import NewRoom from "./NewRoom";

import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(roomList);

  const removeRoom = async (room) => {
    dispatch(deleteRoom(room.id));
  };

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div id="rooms" className="column">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          float: "center",
          justifyContent: "center",
          backgroundColor: "#87BBA2",
          pt: 6,
        }}>
        {rooms && rooms.length
          ? rooms.map((room) => {
              return (
                <div className="room" key={room.id}>
                  <Card
                    raised
                    sx={{
                      width: 280,
                      ml: 10,
                      mb: 3,
                      padding: "0.1em",
                    }}>
                    <CardMedia
                      component="img"
                      image={room.imageUrl}
                      height="200"
                      width="140"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center">
                        {room.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center">
                        Explore the {room.name}!
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <DeleteIcon
                        size="small"
                        onClick={() => removeRoom(room)}
                        color="#364958"
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          "&:hover": {
                            cursor: "pointer",
                            color: "#3B6064",
                          },
                        }}
                      />

                      <Button
                        size="small"
                        component={Link}
                        to={`/rooms/${room.id}`}
                        key={room.id}
                        sx={{
                          display: "flex",
                        }}>
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })
          : null}
        {/* <div className="new-room-form">
          <NewRoom />
        </div> */}
      </Grid>
    </div>
  );
};

export default Rooms;
