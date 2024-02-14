import React, { useState, useEffect, useMemo, useCallback } from "react";
import { TextField, Button, Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/action";
import AxiosInstance from "../../apis/AxiosInstance";

const MockUserForm = () => {
  const dispatch = useDispatch();
  const [loadingForm, setLoadingForm] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  // Handle Change Event
  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Handle Submit Form
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      setLoadingForm(true);
      try {
        const response = await AxiosInstance.post(
          "http://localhost:5000/api/users/add",
          formData
        );
        if (response.status === 201) {
          dispatch(createUser(response.data));
          setFormData({ name: "", age: "", email: "", city: "" });
          setPostSuccess(true);
          setOpen(true);
        } else {
          setPostSuccess(false);
        }
      } catch (error) {
        console.error("Error posting data:", error);
        setPostSuccess(false);
      } finally {
        setLoadingForm(false);
      }
    },
    [dispatch, formData]
  );

  return (
    <Container maxWidth="sm">
      <h3 style={{ textAlign: "center", color: "#6d1b7b" }}>USER FORM</h3>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{ float: "right", backgroundColor: "#af52bf" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default MockUserForm;
