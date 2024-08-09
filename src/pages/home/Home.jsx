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
import { styled } from "@mui/material/styles";

const CardButton = styled(Button)(({ theme }) => ({
  color: "#b10b1c",
}));

const Home = () => {
  return (
    <Box>
      <Typography variant="h6" textAlign="center" mb={10}>
        Federated Data Marketplace
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Announcements
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
              </Typography><br />
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
              </Typography><br />
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
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
                Inbox (Approval / Requests)
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
              </Typography><br />
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
              </Typography><br />
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
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
                Favorites
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
              </Typography><br />
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
              </Typography><br />
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                molestiae voluptatum unde neque, recusandae <a href="#">click here</a>
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
