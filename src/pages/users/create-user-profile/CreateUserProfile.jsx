import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
  Alert,
  IconButton,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#b10b1c",
  "&:hover": {
    backgroundColor: "#b10b1cb3",
  },
}));

const CreateUserProfile = () => {
  const [alert, setAlert] = React.useState(false);
  const [role, setRole] = React.useState("owner");
  const [roles, setRoles] = React.useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setAlert(true);

    const timeout = setTimeout(() => {
      setAlert(false);
      clearTimeout(timeout);
    }, 5000);
  };

  React.useEffect(() => {
    axios.get("http://localhost:3000/roles").finally((response) => {
      const rolesAux = [
        { value: "owner", label: "Data Owner" },
        { value: "steward", label: "Data Steward" },
        { value: "consumer", label: "Data Consumer" },
      ];
      setRoles(rolesAux);
    })
  }, []);

  return (
    <Box>
      <Collapse in={alert}>
        <Alert
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Record saved successfully!
        </Alert>
      </Collapse>

      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Create user profile
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth name="name" label="User Name" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              required
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                name="role"
                id="role"
                label="Role"
                value={role}
                required
              >
                {roles.map((r) => <MenuItem key={r.value} value={r.value}>{r.label}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <MyButton
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Submit
            </MyButton>
            <MyButton type="button" variant="contained" color="primary">
              Cancel
            </MyButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateUserProfile;
