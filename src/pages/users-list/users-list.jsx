import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";
import CreateDataSource from "../create-data-source/CreateDataSource";

const items = [
  {
    id: 3,
    title: "Alice Smith",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "Bob Johnson",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    title: "Emily Davis",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    title: "Michael Wilson",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    title: "Olivia Martinez",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 8,
    title: "William Anderson",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 9,
    title: "Sophia Taylor",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 10,
    title: "James Brown",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#b10b1c",
  "&:hover": {
    backgroundColor: "#b10b1cb3",
  },
}));
const CardButton = styled(Button)(({ theme }) => ({
  color: "#b10b1c",
}));

export default function UsersList() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box width="100%" display="flex" justifyContent="flex-end" mb={2}>
        <MyButton
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={handleClickOpen}
        >
          Create data source
        </MyButton>

        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogContent>
            <CreateDataSource close={handleClose} />
          </DialogContent>
        </Dialog>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid key={item.id} xs={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div" mb={3}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
                <CardActions>
                  <CardButton size="small">See More</CardButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
