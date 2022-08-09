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
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email!").required("required!"),
  password: Yup.string().required("This field is required!"),
});

const UserLogin = () => {
  const [values, setValues] = useState({
    values: "",
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
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
    <>
      <Box
        component="form"
        style={{ margin: "1rem 1.5rem 1rem 1.5rem" }}
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h6"
          style={{
            color: "cornflowerblue",
            fontSize: "16px",
            marginBottom: "1rem",
          }}
        >
          Login your account :
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              size="small"
              fullWidth
              required
              id="email"
              name="email"
              label="Email Address"
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="small"
              fullWidth
              required
              id="password"
              name="password"
              label="Password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
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
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
        </Grid>

        <div
          className="left_checkbox"
          style={{ fontSize: "14px", color: "slategray" }}
        >
          <Checkbox />
          <span>Remember Me</span>
        </div>
        <div className="captcha">
          <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "0.6rem",
          }}
        >
          <Button variant="contained" className="login_btn">
            Sign In
          </Button>
          <Typography
            className="forgot_password"
            variant="h6"
            style={{
              color: "cornflowerblue",
              fontSize: "16px",
              marginTop: "0.7rem",
            }}
          >
            <Link to="/">Forgotten Password?</Link>
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default UserLogin;
