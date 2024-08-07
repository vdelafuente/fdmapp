import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CreateAServiceContext = () => {
  const MyButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#b10b1c",
    "&:hover": {
      backgroundColor: "#b10b1cb3",
    },
  }));

  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Create a service context
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Application context" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="System name" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Enviroment" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Secretes manager" required />
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

export default CreateAServiceContext;
