import React from "react";
import {
  Box,
  TextField,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useFormik } from "formik";
import PrimarySolidButton from "../../common/primary-solid-button/PrimarySolidButton";
import PrimaryOutlineButton from "../../common/primary-outline-button/PrimaryOutlineButton";
import { toast } from "sonner";

const RequestDataProduct = (props) => {
  const { close } = props;

  const formik = useFormik({
    initialValues: {
      domainName: "",
      subDomainName: "",
      product: "",
      descOfRequest: "",
    },
    onSubmit: (values) => {
      close();
      toast.success("Record created successfully!");
      formik.resetForm();
      axios
        .post("http://localhost:3000/data-products", values)
        .finally(() => {});
    },
  });

  const onCancel = () => {
    formik.resetForm();
    close();
  };

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={6} xsOffset={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Request data product
            </Typography>
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Domain name"
              required
              name="domainName"
              value={formik.values.domainName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Sub domain name"
              required
              name="subDomainName"
              value={formik.values.subDomainName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Product"
              required
              name="product"
              value={formik.values.product}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid xs={6} xsOffset={3}>
            <TextField
              fullWidth
              label="Desc of request"
              required
              name="descOfRequest"
              value={formik.values.descOfRequest}
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

export default RequestDataProduct;
