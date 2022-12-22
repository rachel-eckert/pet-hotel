import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPet } from "../reducers/petSlice";

const NewPet = () => {
  const dispatch = useDispatch();

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
      addPet({
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
  };

  return (
    <div>
      <label align="center" className="header">
        Check In a New Pet to the Hotel!
      </label>
      <form
        align="center"
        className="form"
        id="new-pet-form"
        onSubmit={handleSubmit}>
        <input
          className="submission-field"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="submission-field"
          placeholder="Species"
          value={species}
          onChange={handleSpeciesChange}
        />
        <input
          className="submission-field"
          placeholder="Profile Picture"
          value={imageUrl}
          onChange={handleImageChange}
        />
        <input
          className="submission-field"
          placeholder="Food Brand"
          value={food}
          onChange={handleFoodChange}
        />
        <input
          className="submission-field"
          placeholder="Age"
          value={age}
          onChange={handleAgeChange}
        />
        <input
          className="submission-field"
          placeholder="Room Request"
          value={roomId}
          onChange={handleRoomChange}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPet;
