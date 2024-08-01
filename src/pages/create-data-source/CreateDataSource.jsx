import React from "react";
import {Box, Button, TextField, Typography, Unstable_Grid2 as Grid} from "@mui/material";

const CreateDataSource = () => {
  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{mb: 2}}>
              Create data source
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Application context" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Data source name" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Data source type" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Data source endpoint" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Data source topic" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Credentials" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Data contract" required />
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

export default CreateDataSource;
