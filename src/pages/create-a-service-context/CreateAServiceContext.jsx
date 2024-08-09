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
import { toast } from "sonner";

const applicationContexts = [
  { value: "appContext1", label: "App Context 1" },
  { value: "appContext2", label: "App Context 2" },
  { value: "appContext3", label: "App Context 3" },
];

const CreateAServiceContext = () => {
  const formik = useFormik({
    initialValues: {
      applicationContext: "",
      systemName: "",
      enviroment: "",
      secretManager: "",
    },
    onSubmit: (values) => {
      toast.success("Record created successfully!");
      formik.resetForm();
      axios
        .post("http://localhost:3000/service-contexts", values)
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
              Create a service context
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <FormControl fullWidth>
              <InputLabel id="application-context-label">
                Application context
              </InputLabel>
              <Select
                labelId="application-context-label"
                id="application-context-label"
                label="Application context"
                required
                name="applicationContext"
                value={formik.values.applicationContext}
                onChange={formik.handleChange}
              >
                {applicationContexts.map((app) => (
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
              label="System name"
              required
              name="systemName"
              value={formik.values.systemName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Enviroment"
              required
              name="enviroment"
              value={formik.values.enviroment}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              type="email"
              label="Secretes manager"
              required
              name="secretManager"
              value={formik.values.secretManager}
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

export default CreateAServiceContext;
