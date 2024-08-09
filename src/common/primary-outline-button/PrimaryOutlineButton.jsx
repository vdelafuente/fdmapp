import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const PrimaryOutlineButton = styled(Button)(({ theme }) => ({
  borderColor: "#b10b1c",
  color: "#b10b1c",
  "&:hover": {
    borderColor: "#b10b1cb3",
    color: "#b10b1cb3",
    backgroundColor: "#b10b1c0d",
  },
}));

export default PrimaryOutlineButton;
