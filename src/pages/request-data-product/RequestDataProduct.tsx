import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Box, Button, TextField, Typography} from "@mui/material";

const RequestDataProduct: React.FC = () => {
  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{mb: 2}}>
              Request data product
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Domain name" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Sub domain name" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Product" required />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField fullWidth label="Desc of request" required />
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

export default RequestDataProduct;
