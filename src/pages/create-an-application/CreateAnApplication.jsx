import React from "react";
import {Box, Button, TextField, Typography, Unstable_Grid2 as Grid} from "@mui/material";

const CreateAnApplication = () => {
  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{mb: 2}}>
              Create an application
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Application name" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="MAP ID" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Application owner" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Data steward" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="TDO" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{mr: 2}}
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

export default CreateAnApplication;
