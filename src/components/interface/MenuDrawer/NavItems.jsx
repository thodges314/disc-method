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
import items from "pages/pageDirectory";

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
