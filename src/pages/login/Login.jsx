import {
  Box,
  Button,
  Unstable_Grid2 as Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#b10b1c",
  "&:hover": {
    backgroundColor: "#b10b1cb3",
  },
}));

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = React.useContext(AuthContext);

  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    /* axios.post("http://localhost:3001/login", form).finally(() => { */
    setForm({ username: "", password: "" });
    const _auth = {
      firstName: "John",
      lastName: "Doe",
      email: form.username,
    };
    setAuth(_auth);
    navigate("/");
    //});
  };

  return (
    <Box>
      <form onSubmit={onSubmit}>
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
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <MyButton
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Enter
            </MyButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Login;
