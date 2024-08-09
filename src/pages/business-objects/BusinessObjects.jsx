import * as React from "react";
import Box from "@mui/material/Box";
import {
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";
import RequestDataProduct from "../../components/request-data-product/RequestDataProduct";
import PrimarySolidButton from "../../common/primary-solid-button/PrimarySolidButton";
import PrimaryTextButton from "../../common/primary-text-button/PrimaryTextButton";

const items = [
  {
    id: 3,
    title: "Business Object",
    description1: "Domaine name:",
    description2: "Subdomain name:",
    description3: "Product:",
    description4: "Desc of request:",
  },
  {
    id: 4,
    title: "Business Object",
    description1: "Domaine name:",
    description2: "Subdomain name:",
    description3: "Product:",
    description4: "Desc of request:",
  },
  {
    id: 5,
    title: "Business Object",
    description1: "Domaine name:",
    description2: "Subdomain name:",
    description3: "Product:",
    description4: "Desc of request:",
  },
  {
    id: 6,
    title: "Business Object",
    description1: "Domaine name:",
    description2: "Subdomain name:",
    description3: "Product:",
    description4: "Desc of request:",
  },
  {
    id: 7,
    title: "Business Object",
    description1: "Domaine name:",
    description2: "Subdomain name:",
    description3: "Product:",
    description4: "Desc of request:",
  },
  {
    id: 8,
    title: "Business Object",
    description1: "Domaine name:",
    description2: "Subdomain name:",
    description3: "Product:",
    description4: "Desc of request:",
  },
  {
    id: 9,
    title: "Business Object",
    description1: "Domaine name:",
    description2: "Subdomain name:",
    description3: "Product:",
    description4: "Desc of request:",
  },
  {
    id: 10,
    title: "Business Object",
    description1: "Domaine name:",
    description2: "Subdomain name:",
    description3: "Product:",
    description4: "Desc of request:",
  },
];

export default function BusinessObjects() {
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
        <PrimarySolidButton
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={handleClickOpen}
        >
          Request data product
        </PrimarySolidButton>

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
            <RequestDataProduct close={handleClose} />
          </DialogContent>
        </Dialog>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid key={item.id} xs={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div" mb={3}>
                    {item.title} {index + 1}
                  </Typography>
                  <Typography variant="body2">{item.description1}</Typography>
                  <Typography variant="body2">{item.description2}</Typography>
                  <Typography variant="body2">{item.description3}</Typography>
                  <Typography variant="body2">{item.description4}</Typography>
                </CardContent>
                <CardActions>
                  <PrimaryTextButton size="small">See More</PrimaryTextButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
