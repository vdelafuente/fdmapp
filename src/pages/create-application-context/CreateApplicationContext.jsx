import React from "react";
import {
  Box,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import PrimarySolidButton from "../../common/primary-solid-button/PrimarySolidButton";
import PrimaryOutlineButton from "../../common/primary-outline-button/PrimaryOutlineButton";

const applications = [
  { value: "app1", label: "App 1" },
  { value: "app2", label: "App 2" },
  { value: "app3", label: "App 3" },
];
import { toast } from "sonner";

const CreateApplicationContext = () => {
  const formik = useFormik({
    initialValues: {
      application: "",
      profileName: "",
      costCenter: "",
      billingManager: "",
    },
    onSubmit: (values) => {
      toast.success("Record created successfully!");
      formik.resetForm();
      axios
        .post("http://localhost:3000/application-contexts", values)
        .finally(() => {});
    },
  });

  const onCancel = () => {
    formik.resetForm();
  };

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Create application context
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <FormControl fullWidth>
              <InputLabel id="application-label">Application</InputLabel>
              <Select
                labelId="application-label"
                id="application-label"
                label="Application"
                required
                name="application"
                value={formik.values.application}
                onChange={formik.handleChange}
              >
                {applications.map((app) => (
                  <MenuItem key={app.value} value={app.value}>
                    {app.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Profile name"
              required
              name="profileName"
              value={formik.values.profileName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Cost center"
              required
              name="costCenter"
              value={formik.values.costCenter}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              type="email"
              label="Billing manager"
              required
              name="billingManager"
              value={formik.values.billingManager}
              onChange={formik.handleChange}
            />
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

export default CreateApplicationContext;
