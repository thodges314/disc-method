import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { synthCyberBlack } from "interactivity/resources/constants/colors";
import { hexToRgba } from "utils/utils";

const BackgroundPaper = styled(Paper)({
  width: "1200px",
  minHeight: `calc(100vh - 100px)`,
  margin: "0 auto 100px auto",
  borderRadius: "0px 0px 16px 16px",
  padding: "70px 16px 16px 16px",
  backgroundColor: hexToRgba(synthCyberBlack),
});

export default BackgroundPaper;
