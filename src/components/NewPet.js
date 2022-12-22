import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPet } from "../reducers/petSlice";
import { TextField, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewPet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [food, setFood] = useState("");
  const [age, setAge] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleRoomChange = (event) => {
    setRoomId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      addNewPet({
        name,
        species,
        imageUrl,
        food,
        age,
        roomId,
      })
    );
    setName("");
    setSpecies("");
    setImageUrl("");
    setFood("");
    setAge("");
    setRoomId("");
    navigate("/pets");
  };

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        <label align="center" className="header">
          Check In a New Pet to the Hotel!
        </label>
        <form
          align="center"
          className="form"
          id="new-pet-form"
          onSubmit={handleSubmit}>
          <Grid
            item
            sx={{
              mt: 2,
            }}>
            <TextField
              className="submission-field"
              label="Name"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}>
            <TextField
              className="submission-field"
              label="Species"
              value={species}
              onChange={handleSpeciesChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}>
            <TextField
              className="submission-field"
              label="Profile Picture"
              value={imageUrl}
              onChange={handleImageChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}>
            <TextField
              className="submission-field"
              label="Food Brand"
              value={food}
              onChange={handleFoodChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}>
            <TextField
              className="submission-field"
              label="Age"
              value={age}
              onChange={handleAgeChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}>
            <TextField
              className="submission-field"
              label="Room Request"
              value={roomId}
              onChange={handleRoomChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}>
            <Button
              variant="contained"
              className="submit-button"
              type="submit"
              sx={{
                bgcolor: "#55828B",
              }}>
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default NewPet;
