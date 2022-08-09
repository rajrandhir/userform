import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CaptchValidation from "./CaptchValidation";

const validationSchema = Yup.object({
  fname: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long")
    .required("required"),
  mobile: Yup.string()
    .min(10, "Number must be 10 digit!")
    .max(10, "Number must be 10 digit !!")
    .required("required"),
  lname: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long")
    .required("required"),
  email: Yup.string().email("Invalid email!").required("required!"),
  password: Yup.string().required("This field is required!"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("required"),
});

const Reg = () => {
  const [values, setValues] = useState({
    values: "",
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      mobile: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Box
        component="form"
        style={{ marginTop: "0.5rem" }}
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h6"
          style={{
            color: "cornflowerblue",
            fontSize: "16px",
            marginBottom: "0.5rem",
          }}
        >
          Create your account :
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              fullWidth
              name="fname"
              label="First Name"
              onChange={formik.handleChange}
              {...formik.getFieldProps("fname")}
              error={formik.touched.fname && Boolean(formik.errors.fname)}
              helperText={formik.touched.fname && formik.errors.fname}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="text"
              size="small"
              fullWidth
              name="lname"
              label="Last Name"
              onChange={formik.handleChange}
              {...formik.getFieldProps("lname")}
              error={formik.touched.lname && Boolean(formik.errors.lname)}
              helperText={formik.touched.lname && formik.errors.lname}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              type=""
              size="small"
              fullWidth
              name="mobile"
              label="Mobile No."
              onChange={formik.handleChange}
              {...formik.getFieldProps("mobile")}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              type=""
              size="small"
              fullWidth
              name="email"
              label="Email"
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              size="small"
              fullWidth
              name="password"
              label="Password"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              size="small"
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              {...formik.getFieldProps("confirmpassword")}
              error={
                formik.touched.confirmpassword &&
                Boolean(formik.errors.confirmpassword)
              }
              helperText={
                formik.touched.confirmpassword && formik.errors.confirmpassword
              }
              type={values.showPassword ? "text" : "password"}
              value={values.confirmpassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <div
          className="left_checkbox"
          style={{ fontSize: "14px", color: "slategray" }}
        >
          <Checkbox />
          <span>Accept the term and condition</span>
        </div>
        <div>
          <CaptchValidation />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "0.6rem",
          }}
        >
          <Button variant="contained" className="login_btn">
            Sign Up
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Reg;
