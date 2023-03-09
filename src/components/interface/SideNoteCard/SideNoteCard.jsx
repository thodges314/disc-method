import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { styled } from "@mui/material/styles";

const StyledSummaryCard = styled(Card)({
  width: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  backgroundColor: "rgba(240, 36, 255, 0.60)",
  "& > div": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    // marginBottom: theme.spacing(1),
    // "& .MuiCard-root": {
    //   display: "inline-block",
    //   // padding: theme.spacing(2),
    //   color: "#3c44b1",
    // },
    // "& > div": {
    //   // paddingLeft: theme.spacing(4),
    //   "& .MuiTypography-subtitle2": {
    //     opacity: "0.6",
    //   },
    // },
  },
});

const SummaryCard = ({ children }) => (
  <StyledSummaryCard>
    <CardContent>{children}</CardContent>
  </StyledSummaryCard>
);

export default SummaryCard;
