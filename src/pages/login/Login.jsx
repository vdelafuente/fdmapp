import {
  Box,
  Unstable_Grid2 as Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useFormik } from "formik";
import PrimarySolidButton from "../../common/primary-solid-button/PrimarySolidButton";

const Login = () => {
  const { setAuth } = React.useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      //axios.post("http://localhost:3001/login", values).finally(() => {
      formik.resetForm();
      const _auth = {
        displayName: "John Doe",
        email: values.username,
        role: "owner",
      };
      sessionStorage.setItem("auth", JSON.stringify(_auth));
      setAuth(_auth);
      //});
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Sig in
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              type="email"
              label="Username"
              required
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              required
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <PrimarySolidButton
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Enter
            </PrimarySolidButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Login;
