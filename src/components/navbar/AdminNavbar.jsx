import React, { useContext, lazy } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Drawer from "./DrawerNavbar";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
    content: { height: "300vh" },
    root: { backgroundColor: "#000000", zIndex: "99" },
    sectionToolbar: { alignItems: "flex-end" },
    sections: { width: "100%", height: "100%" },
    logo: {
      maxHeight: "50px",
      margin: "10px 0px",
    },
    subscribeButton: {
      letterSpacing: "1.5px",
      fontSize: ".8rem",
      background: "transparent",
      border: "1px solid #f5f5f5",
      color: "#f5f5f5",
      textTransform: "uppercase",
      fontWeight: 700,
      boxSizing: "border-box",
      height: "34px",
      padding: "0.5rem 1rem",
      borderRadius: "2px",
      textDecoration: "none",
      "&:hover": {
        background: "#f5f5f5",
        color: "#000",
      },
    },
    logoutBtn: {
      marginLeft: "10px",
    },
  };
});

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
       <AppBar className={classes.root}>
          <Container maxWidth="md">
            <Toolbar>
              <Box
                className={classes.sections}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {isMatch ? (
                  <Drawer sections={["1", "2"]} />
                ) : (
                <Link to="#" className={classes.subscribeButton}>
                    Button 1
                  </Link>
                )}
                <Box>
                  CEM
                </Box>
                <Box>
                  {!isMatch &&
                      <>
                      <Link
                        className={classes.subscribeButton}
                        to="#"
                      >
                        Login
                      </Link>
                      </>
                    }
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      {/* Div for Gap Here */}
      <div className={classes.toolbar}></div>
    </nav>
  );
};

export default Header;