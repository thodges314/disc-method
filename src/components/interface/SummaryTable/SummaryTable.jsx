import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Card from "@mui/material/Card";
import { hexToRgba } from "utils/utils";

import {
  themeBackground,
  synthSunsetOrange,
} from "interactivity/resources/constants/colors";

const backgroundColor = hexToRgba(themeBackground, 1);
const sunsetOrangeHeavy = hexToRgba(synthSunsetOrange, 1);
const sunsetOrangeLight = hexToRgba(synthSunsetOrange, 0.1);

const mapEntryColumns = (entries) =>
  entries.map((entry, i) => (
    <TableCell
      sx={{
        borderLeft: `0.1px solid ${sunsetOrangeHeavy}`,
        borderBottom: `0.1px solid ${sunsetOrangeHeavy}`,
        color: sunsetOrangeHeavy,
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
      width: "800px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px",
      color: sunsetOrangeHeavy,
      boxShadow: `4px 4px 4px 4px ${sunsetOrangeHeavy}`,
      borderLeft: `1px solid ${sunsetOrangeLight}`,
      borderRight: `1px solid ${sunsetOrangeLight}`,
      borderBottom: `1px solid ${sunsetOrangeHeavy}`,
      borderTop: `1px solid ${sunsetOrangeHeavy}`,
      backgroundColor: backgroundColor,
    }}
  >
    {children}
  </Card>
);

const CustomTable = ({ entries }) => (
  <TableContainer component={WrapperCard}>
    <Table>
      <TableBody>{mapEntryRows(entries)}</TableBody>
    </Table>
  </TableContainer>
);

export default CustomTable;
