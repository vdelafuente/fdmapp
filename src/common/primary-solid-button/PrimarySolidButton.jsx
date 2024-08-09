import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const PrimarySolidButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#b10b1c",
  "&:hover": {
    backgroundColor: "#b10b1cb3",
  },
}));

export default PrimarySolidButton;
