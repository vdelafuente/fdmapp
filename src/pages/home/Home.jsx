import {
  Box,
  Typography,
  Unstable_Grid2 as Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import * as React from "react";
import { createTheme, styled } from '@mui/material/styles';

const CardButton = styled(Button)(({theme}) => ({
  color: "#b10b1c",
}));

const Home = () => {
  return (
    <Box>
      <Typography variant="h6" textAlign="center" mb={10}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis at
        quibusdam nemo facilis nisi magnam dolorum laboriosam ab omnis quam,
        cupiditate corrupti maxime in?
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae
              </Typography>
            </CardContent>
            <CardActions>
              <CardButton size="small">See More</CardButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae
              </Typography>
            </CardContent>
            <CardActions>
              <CardButton size="small">See More</CardButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae
              </Typography>
            </CardContent>
            <CardActions>
              <CardButton size="small">See More</CardButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
