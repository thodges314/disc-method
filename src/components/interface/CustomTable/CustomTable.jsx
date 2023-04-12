import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Card from "@mui/material/Card";
import { hexToRgba } from "utils/utils";

import {
  themeBackground,
  synthCyberPink,
  synthSunsetPink,
} from "interactivity/resources/constants/colors";

const cyberPink = hexToRgba(synthCyberPink, 1);
const backgroundColor = hexToRgba(themeBackground, 1);
const sunsetPink = hexToRgba(synthSunsetPink, 1);

const mapEntryColumns = (entries, sx, headerCol) => {
  return entries.map((entry, i) => (
    <TableCell
      sx={{
        borderLeft: `0.1px solid ${sunsetPink}`,
        borderRight: `0.1px solid ${sunsetPink}`,
        borderBottom: `0.1px solid ${sunsetPink}`,
        color: sunsetPink,
        ...sx,
        width: i === 0 && headerCol ? "100%" : sx.width,
      }}
      key={i}
    >
      {entry}
    </TableCell>
  ));
};

const mapEntryRows = (entries, sx, headerCol) =>
  entries.map(
    (entryRow, i) => (
      <TableRow key={i}>{mapEntryColumns(entryRow, sx, headerCol)}</TableRow>
    ),
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
      color: sunsetPink,
      backgroundColor: backgroundColor,
    }}
  >
    {children}
  </Card>
);

const CustomTable = ({ entries, sx = {}, headerCol = false }) => {
  return (
    <TableContainer component={WrapperCard}>
      <Table>
        <TableBody>{mapEntryRows(entries, sx, headerCol)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
