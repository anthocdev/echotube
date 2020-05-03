import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//Custom styles
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      "&:hover": { color: "white", textDecoration: "none" },
    },
  },
  navItem: {
    display: "none",
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "block",
      "&:hover": {
        color: "rgba(255,255,255,0.5)",
        textDecoration: "none",
      },
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function PrimarySearchAppBar(isAuth) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-account-menu";

  //Rendering different components based on user authentication state
  const userAuthRender = isAuth ? (
    <div className={classes.sectionDesktop}>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  ) : (
    <div>
      <Button variant="contained" component={Link} to="/auth">
        {" "}
        Sign In{" "}
      </Button>
    </div>
  );

  //Rendering account option menu
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/user" onClick={handleMenuClose}>
        My Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
    </Menu>
  );

  //Rendering navigation items
  const renderHome = (
    <div>
      <Typography
        component={Link}
        to="/"
        className={classes.navItem}
        variant="subtitle1"
        color="inherit"
      >
        Home
      </Typography>
    </div>
  );

  const renderGuide = (
    <div>
      <Typography
        component={Link}
        to="/guide"
        className={classes.navItem}
        variant="subtitle1"
        color="inherit"
      >
        Guide
      </Typography>
    </div>
  );

  const renderRules = (
    <div>
      <Typography
        component={Link}
        to="/rules"
        className={classes.navItem}
        variant="subtitle1"
        color="inherit"
      >
        Rules
      </Typography>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        style={{ background: "rgba(153, 50, 204, 0.9)" }} //Overriding color
        position="static"
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            EchoTube
          </Typography>
          {renderHome}
          {renderGuide}
          {renderRules}
          <div className={classes.grow} />
          {userAuthRender}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
