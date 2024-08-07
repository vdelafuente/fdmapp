import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#b10b1c",
  "&:hover": {
    backgroundColor: "#b10b1cb3",
  },
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
          Request data product
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
          <DialogTitle mb={3}>Request data product</DialogTitle>
          <DialogContent>
            <form>
              <Grid container spacing={2}>
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
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <MyButton type="button" variant="contained" color="primary" onClick={handleClose}>
              Cancel
            </MyButton>
            <MyButton variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleClose}>
              Submit
            </MyButton>
          </DialogActions>
        </Dialog>
      </Box>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
