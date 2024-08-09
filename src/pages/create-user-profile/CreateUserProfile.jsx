import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "sonner";
import PrimarySolidButton from "../../common/primary-solid-button/PrimarySolidButton";
import PrimaryOutlineButton from "../../common/primary-outline-button/PrimaryOutlineButton";

const CreateUserProfile = () => {
  const [roles, setRoles] = React.useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      role: "owner",
    },
    onSubmit: (values) => {
      toast.success("Event has been created");
      formik.resetForm();
      //axios.post("http://localhost:3000/users", values).finally(() => {});
    },
  });

  const onCancel = () => {
    formik.resetForm();
  };

  React.useEffect(() => {
    /* axios.get("http://localhost:3000/roles").finally((response) => { */
    const rolesAux = [
      { value: "owner", label: "Data Owner" },
      { value: "steward", label: "Data Steward" },
      { value: "consumer", label: "Data Consumer" },
    ];
    setRoles(rolesAux);
    /*  }); */
  }, []);

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Create user profile
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="User Name"
              required
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              required
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                label="Role"
                required
                name="role"
                onChange={formik.handleChange}
                value={formik.values.role}
              >
                {roles.map((r) => (
                  <MenuItem key={r.value} value={r.value}>
                    {r.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <PrimarySolidButton
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Submit
            </PrimarySolidButton>
            <PrimaryOutlineButton
              type="button"
              variant="outlined"
              color="primary"
              onClick={onCancel}
            >
              Cancel
            </PrimaryOutlineButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateUserProfile;
