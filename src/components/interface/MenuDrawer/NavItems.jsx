import { useState } from "react";
import {
  AppBar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const items = [
  {
    name: "Pre-Calculus",
    items: [
      "Shifting Graphs with h and k",
      "Logarithm Properties",
      "Trigonometric Identities",
    ],
  },
  { name: "Limits", items: ["Delta-Epsilon Proof", "L'Hôpital's rule"] },
  {
    name: "Theorems",
    items: [
      "Rolle's Theorem",
      "Mean Value Theorem",
      "First Fundamental Theorem of Calculus",
      "Second Fundamental Theorem of Calculus",
    ],
  },
  {
    name: "Derivatives",
    items: [
      "Constant Function",
      "Scalar Multiple",
      "Sum or Difference Rule",
      "Product Rule",
      "Quotient Rule",
      "Chain Rule",
      "Trigonometric Derivatives",
      "Inverse Trigonometric Derivatives",
      "Exponential Functions",
      "Log Functions",
      "Inverse Functions",
    ],
  },
  {
    name: "Differentiation Methods",
    items: ["Implicit Differentiation", "Logarithmic Differentiation"],
  },
  {
    name: "Integrals",
    items: [
      "Sum or Difference Rule",
      "Constant Multiple Rule",
      "Power Rule",
      "du/u",
      "Exponential Rule",
      "Logarithmic Integrals",
      "Trigonometric Integrals",
      "Inverse Trigonometric Integrals",
      "Integration by Parts",
    ],
  },
  {
    name: "Integral Applications and Methods",
    items: [
      "Work",
      "Volume - Disk/Washer Method",
      "Volume = Shell Method",
      "Arc Length Integration",
      "Products of Sine and Cosine",
      "Products of Secant and Tangent",
      "Reduction - Sine and Cosine",
      "Reduction - Secant and Cosecant",
      "Reduction - Tangent and Cosecant",
    ],
  },
  {
    name: "Center of Mass / Centroid",
    items: [
      "Double Integration for Area",
      "Linear Center of Mass / Centroid",
      "Planar Center of Mass / Centroid - Double Integral Approach",
      "Planar Centrois - Area Beneath a Curve",
      "Planar Centroid - Area Between Two Curves",
      "Centroid - Solid of Revolution",
      "Centroid - Curve",
    ],
  },
  {
    name: "Infinite Series",
    items: [
      "Series Test Battery",
      "Nth Term Test",
      "Geometric Series",
      "Telescoping Series",
      "Integral Test",
      "p-Series Test",
      "Comparison Test",
      "Limit Comparison Test",
      "Alternating Series Test",
      "Ratio Test",
      "Root Test",
    ],
  },
  {
    name: "Taylor (Maclaurin) Series",
    items: [
      "Taylor (Maclaurin) Series",
      "Taylor's Theorem",
      "Common Maclaurin Series",
    ],
  },
  {
    name: "Vector Calculus",
    items: ["Two-Dimensional Vector Representations"],
  },
];

const NavItems = () => {
  const [openItems, setOpenItems] = useState([]);
  const isOpen = (item) => openItems.includes(item.name);
  const setOpen = (item) =>
    setOpenItems((openItems) => [...openItems, item.name]);
  const handleClose = (item) =>
    setOpenItems((openItems) => openItems.filter((i) => i !== item.name));
  const handleClick = (item) => () =>
    isOpen(item) ? handleClose(item) : setOpen(item);
  const makeNested = (entry) => (
    <>
      <ListItemButton onClick={handleClick(entry)} key={entry.name}>
        <ListItemText
          primary={entry.name}
          primaryTypographyProps={{ fontSize: 16 }}
        />
        {isOpen(entry) ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen(entry)} timeout="auto" unmountOnExit>
        {
          <List component="div" disablePadding>
            {entry.items.map((item) => (
              <ListItemButton key={item} sx={{ pl: 4 }}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ fontSize: 14 }}
                />
              </ListItemButton>
            ))}
          </List>
        }
      </Collapse>
    </>
  );

  return <List>{items.map(makeNested)}</List>;
};

export default NavItems;
