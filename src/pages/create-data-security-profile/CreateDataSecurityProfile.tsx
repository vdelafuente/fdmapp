import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Box, Button, TextField, Typography} from "@mui/material";

const CreateDataSecurityProfile: React.FC = () => {
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

export default CreateDataSecurityProfile;
