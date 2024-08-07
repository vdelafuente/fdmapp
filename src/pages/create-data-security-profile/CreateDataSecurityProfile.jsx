import React from "react";
import {Box, Button, TextField, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#b10b1c",
  "&:hover": {
    backgroundColor: "#b10b1cb3",
  },
}));

const CreateDataSecurityProfile = () => {
  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{mb: 2}}>
              Create data security profile
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Business object name" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Permission group" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Permissions" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <MyButton
              type="submit"
              variant="contained"
              color="primary"
              sx={{mr: 2}}
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

export default CreateDataSecurityProfile;
