import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewRoom } from "../reducers/roomSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Button } from "@mui/material";

const NewRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      addNewRoom({
        name,
        imageUrl,
        description,
      })
    );
    setName("");
    setImageUrl("");
    setDescription("");
    navigate("/rooms");
  };

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column">
        <label align="center" className="header">
          Construct a New Room!
        </label>
        <form
          align="center"
          className="form"
          id="new-room-form"
          onSubmit={handleSubmit}>
          <Grid
            item
            sx={{
              mt: 2,
            }}>
            <TextField
              className="submission-field"
              placeholder="Name"
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
              placeholder="Inspiration Picture"
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
              placeholder="Describe the Room"
              value={description}
              onChange={handleDescriptionChange}
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

export default NewRoom;
