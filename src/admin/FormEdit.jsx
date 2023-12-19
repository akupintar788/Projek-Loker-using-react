import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./editupdate.css";

const Update = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isBlocking, setIsBlocking] = useState(false);

  useEffect(() => {
    // Fetch the data or perform any initialization here
    // For example, if you want to fetch user data based on the ID
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/detail-users/${id}`
        );
        // const userData = response.data;
        setFormData({
          username: response.data.data.username,
          password: response.data.data.password,
        });
        console.log();
      } catch (error) {
        console.log("nilai id", id);
        setError("Error fetching user data");
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsBlocking(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`http://localhost:8080/update-users/${id}`, formData);
      alert("User updated successfully");
      setShow(false);
      setIsBlocking(false);
      window.location.href = '/pages';
    } catch (error) {
      setError("Error updating user");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShow(false);
    setError(null);
  };

  return (
    <div>
      <h2 className="label-input">Form Edit</h2>
      <p>ID: {id}</p>
      <form onSubmit={handleSubmit}>
        <div className="input-form">
          <label className="label-input">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            placeholder="Enter username"
          />
        </div>
        <div className="input-form">
          <label className="label-input">Password</label>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update user"}
        </button>

        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default Update;
