import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import { hexToRgba } from "utils/utils";

import {
  synthCyberDarkBlue,
  synthCyberBlack,
  themeBackground,
  synthCyberPink,
  synthSunsetPink,
} from "interactivity/resources/constants/colors";

const cyberDarkBlue = hexToRgba(synthCyberDarkBlue, 1);
const cyberPink = hexToRgba(synthCyberPink, 1);
const backgroundColor = hexToRgba(themeBackground, 1);
const darkColour = hexToRgba(synthCyberBlack, 1);
const sunsetPink = hexToRgba(synthSunsetPink, 1);

const mapEntryColumns = (entries) =>
  entries.map((entry, i) => (
    <TableCell
      sx={{
        borderLeft: `0.1px solid ${sunsetPink}`,
        borderRight: `0.1px solid ${sunsetPink}`,
        borderBottom: `0.1px solid ${sunsetPink}`,
      }}
      key={i}
    >
      {entry}
    </TableCell>
  ));

const mapEntryRows = (entries) =>
  entries.map(
    (entryRow, i) => <TableRow key={i}>{mapEntryColumns(entryRow)}</TableRow>,
    []
  );

const WrapperCard = ({ children }) => (
  <Card
    sx={{
      mt: "20px",
      mb: 0,
      boxShadow: `2px 2px 2px 2px ${cyberPink}`,
      borderLeft: `1px solid ${sunsetPink}`,
      borderRight: `1px solid ${sunsetPink}`,
      borderBottom: `1px solid ${sunsetPink}`,
      borderTop: `1px solid ${sunsetPink}`,
      backgroundColor: backgroundColor,
    }}
  >
    {children}
  </Card>
);

const CustomTable = ({ entries }) => (
  <TableContainer component={WrapperCard}>
    {mapEntryRows(entries)}
  </TableContainer>
);

export default CustomTable;
