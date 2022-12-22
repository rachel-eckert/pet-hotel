import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateRoom,
  fetchSingleRoom,
  selectSingleRoon,
} from "../reducers/singleRoomSlice";
import { TextField, Grid, Button } from "@mui/material";

const UpdatePet = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const room = useSelector((state) => state.room);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchSingleRoom(id));
  }, [dispatch, id]);

  const handleNameSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateRoom({ id, name }));
    setName("");
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateRoom({ id, imageUrl }));
    setImageUrl("");
  };

  const handleDescriptionSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateRoom({ id, description }));
    setDescription("");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleImage = (event) => {
    setImageUrl(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h3 className="header" align="center">
        Update {room.name}'s information below:
      </h3>
      <form className="update-form" algin="center" onSubmit={handleNameSubmit}>
        <TextField
          className="submission-field"
          label="Name"
          value={name || ""}
          onChange={handleName}
          sx={{
            bgcolor: "#FFFFFF",
          }}
        />
        <Button
          variant="contained"
          className="update-button"
          align="center"
          type="submit"
          sx={{ bgcolor: "#55828B", width: 150, ml: 1.5 }}>
          Update Name
        </Button>
      </form>
      <form className="update-form" align="center" onSubmit={handleImageSubmit}>
        <TextField
          className="submission-field"
          label="Image URL"
          value={imageUrl || ""}
          onChange={handleImage}
          sx={{
            bgcolor: "#FFFFFF",
          }}
        />
        <Button
          variant="contained"
          className="update-button"
          align="center"
          type="submit"
          sx={{ bgcolor: "#55828B", width: 150, ml: 1.5 }}>
          Update Photo
        </Button>
      </form>
      <form
        className="update-form"
        align="center"
        onSubmit={handleDescriptionSubmit}>
        <TextField
          multiline
          rows={4}
          className="submission-field"
          label="Description"
          value={description || ""}
          onChange={handleDescription}
          sx={{
            bgcolor: "#FFFFFF",
          }}
        />
        <Button
          variant="contained"
          className="button"
          align="center"
          type="submit"
          sx={{ bgcolor: "#55828B", width: 150, ml: 1.5 }}>
          Update Description
        </Button>
      </form>
    </div>
  );
};

export default UpdatePet;
