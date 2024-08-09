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

const businessObjects = [
  { value: "object1", label: "Business Object 1" },
  { value: "object2", label: "Business Object 2" },
  { value: "object3", label: "Business Object 3" },
];

const CreateDataSecurityProfile = () => {
  const formik = useFormik({
    initialValues: {
      businessObjectName: "",
      permissionGroup: "",
      permissions: "",
    },
    onSubmit: (values) => {
      toast.success("Record created successfully!");
      formik.resetForm();
      axios
        .post("http://localhost:3000/data-security-profiles", values)
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
              Create data security profile
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <FormControl fullWidth>
              <InputLabel id="business-objects-label">
                Business object name
              </InputLabel>
              <Select
                labelId="business-objects-label"
                id="business-objects-label"
                label="Business object name"
                required
                name="businessObjectName"
                value={formik.values.businessObjectName}
                onChange={formik.handleChange}
              >
                {businessObjects.map((bo) => (
                  <MenuItem key={bo.value} value={bo.value}>
                    {bo.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Permission group"
              required
              name="permissionGroup"
              value={formik.values.permissionGroup}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Permissions"
              required
              name="permissions"
              value={formik.values.permissions}
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

export default CreateDataSecurityProfile;
