import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerComponent = ({ sections }) => {
  const drawerWidth = "50%";

  const useStyles = makeStyles((theme) => ({
    drawerContainer: {
      backgroundColor: "#000",
      paddingTop: "30px",
      width: drawerWidth,
    },
    iconButtonContainer: {
      color: "#FFF",
    },
    menuIconToggle: {
      fontSize: "2rem",
    },
    drawerText: {
      color: "#FFF",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);
  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List>
          {sections.map((navbarItem, index) => {
            return (
              <ListItem
                key={index}
                divider
                button
                onClick={() => {
                  setOpenDrawer(false);
                }}
              >
                <ListItemIcon>
                  <ListItemText className={classes.drawerText}>
                    {navbarItem}
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        aria-label="Side Navbar Button"
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
