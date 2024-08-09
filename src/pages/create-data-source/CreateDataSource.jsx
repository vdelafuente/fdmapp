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

const types = [
  { value: "type1", label: "Type 1" },
  { value: "type2", label: "Type 2" },
  { value: "type3", label: "Type 3" },
];

const CreateDataSource = () => {
  const formik = useFormik({
    initialValues: {
      applicationContext: "",
      sourceName: "",
      sourceType: "",
      sourceEndpoint: "",
      sourceTopic: "",
      credentials: "",
      dataContract: "",
    },
    onSubmit: (values) => {
      toast.success("Record created successfully!");
      formik.resetForm();
      axios
        .post("http://localhost:3000/data-sources", values)
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
              Create data source
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
              label="Data source name"
              required
              name="sourceName"
              value={formik.values.sourceName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <FormControl fullWidth>
              <InputLabel id="source-type-label">Data source type</InputLabel>
              <Select
                labelId="source-type-label"
                id="source-type-label"
                label="Data source type"
                required
                name="sourceType"
                value={formik.values.sourceType}
                onChange={formik.handleChange}
              >
                {types.map((t) => (
                  <MenuItem key={t.value} value={t.value}>
                    {t.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Data source endpoint"
              required
              name="sourceEndpoint"
              value={formik.values.sourceEndpoint}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Data source topic"
              required
              name="sourceTopic"
              value={formik.values.sourceTopic}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Credentials"
              required
              name="credentials"
              value={formik.values.credentials}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Data contract"
              required
              name="dataContract"
              value={formik.values.dataContract}
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

export default CreateDataSource;
