import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updatePet,
  fetchSinglePet,
  selectSinglePet,
} from "../reducers/singlePetSlice";

const UpdatePet = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pet = useSelector(selectSinglePet);

  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    dispatch(fetchSinglePet(id));
  }, [dispatch, id]);

  const handleNameSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updatePet({ id, name }));
    setName("");
  };

  const handleFoodSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updatePet({ id, food }));
    setFood("");
  };

  const handleAgeSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updatePet({ id, age }));
    setAge("");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleFood = (event) => {
    setFood(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <h3 className="header" align="center">
        Update {pet.name}'s information below:
      </h3>
      <form className="form" algin="center" onSubmit={handleNameSubmit}>
        <input
          className="submission-field"
          placeholder="Name"
          value={name || ""}
          onChange={handleName}
        />
        <button className="button" align="center" type="submit">
          Update Name
        </button>
      </form>
      <form className="form" align="center" onSubmit={handleFoodSubmit}>
        <input
          className="submission-field"
          placeholder="Food"
          value={food || ""}
          onChange={handleFood}
        />
        <button className="button" type="submit">
          Update Food
        </button>
      </form>
      <form className="form" align="center" onSubmit={handleAgeSubmit}>
        <input
          className="submission-field"
          placeholder="Age"
          value={age || ""}
          onChange={handleAge}
        />
        <button className="button" type="submit">
          Update Age
        </button>
      </form>
    </div>
  );
};

export default UpdatePet;
