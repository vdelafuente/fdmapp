import React from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Unstable_Grid2 as Grid } from "@mui/material";

const CreateUserProfile = () => {
  const [role, setRole] = React.useState("admin");

  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3} >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Create user profile
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3} >
            <TextField fullWidth label="User Name" required />
          </Grid>
          <Grid xs={6} xsOffset={3} >
            <TextField fullWidth label="Password" type="password" required />
          </Grid>
          <Grid xs={6} xsOffset={3} >
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select labelId="role-label" id="role" label="Role" value={role} required>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} xsOffset={3} >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Submit
            </Button>
            <Button type="button" variant="contained" color="primary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateUserProfile;
