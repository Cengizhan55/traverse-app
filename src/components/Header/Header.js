import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import Button from "@mui/material/Button";
import Logo from "../../traverse2.png";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <img src={Logo} style={{ width: "10%", height: "10%" }}></img>

        <Box display="flex">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/map" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Map</Button>
          </Link>
          <Link to="/news" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">News</Button>
          </Link>
          <Link
            to="/busCard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Transport Card</Button>
          </Link>
          <Link
            to="/travelGuide"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">TravelGuide</Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Profile</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
