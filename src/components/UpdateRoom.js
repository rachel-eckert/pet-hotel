import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateRoom,
  fetchSingleRoom,
  selectSingleRoon,
} from "../reducers/singleRoomSlice";

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
    await dispatch(updatRoom({ id, description }));
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
      <form className="form" algin="center" onSubmit={handleNameSubmit}>
        <textarea
          rows={1}
          cols={20}
          className="submission-field"
          placeholder="Name"
          value={name || ""}
          onChange={handleName}
        />
        <button className="room-button" align="center" type="submit">
          Update Name
        </button>
      </form>
      <form className="form" align="center" onSubmit={handleImageSubmit}>
        <textarea
          rows={1}
          cols={20}
          className="submission-field"
          placeholder="Image URL"
          value={imageUrl || ""}
          onChange={handleImage}
        />
        <button className="room-button" type="submit">
          Update Image
        </button>
      </form>
      <form className="form" align="center" onSubmit={handleDescriptionSubmit}>
        <textarea
          rows={4}
          cols={20}
          className="submission-field"
          placeholder="Description"
          value={description || ""}
          onChange={handleDescription}
        />
        <button className="room-button" type="submit">
          Update Description
        </button>
      </form>
    </div>
  );
};

export default UpdatePet;
