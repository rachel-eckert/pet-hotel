import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets, deletePet, petList } from "../reducers/petSlice";
// import NewPet from "./NewPet";
import StyledAllGrid from "./AllItemsGrid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

const Pets = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);

  const removePet = async (pet) => {
    dispatch(deletePet(pet.id));
  };

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <StyledAllGrid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}>
      {pets && pets.length
        ? pets.map((pet) => {
            return (
              <div className="pet" key={pet.id}>
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
                    image={pet.imageUrl}
                    height="200"
                    width="140"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center">
                      Meet {pet.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center">
                      {pet.name} is a {pet.age} year-old {pet.species}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <DeleteIcon
                      size="small"
                      onClick={() => removePet(pet)}
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
                      to={`/pets/${pet.id}`}
                      key={pet.id}
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
      {/* <div className="new-pet-form">
          <NewPet />
        </div> */}
    </StyledAllGrid>
  );
};

export default Pets;
