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
import Player from "../containers/Player";
import { GoogleLogin, GoogleLogout } from "react-google-login";

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

export default function MainAppBar({ isAuth, responseGoogle, logoutSuccess }) {
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
  const userAuthRender = (
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
  );

  //Rendering account option menu
  const renderMenu = isAuth ? (
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
      <GoogleLogout
        render={(renderProps) => (
          <MenuItem
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign Out
          </MenuItem>
        )}
        clientId="253538920754-1qb2i7mgbmk0s2p7dhu1bg3g7hncpep1.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logoutSuccess}
      />
    </Menu>
  ) : (
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
        <GoogleLogin
          clientId="253538920754-1qb2i7mgbmk0s2p7dhu1bg3g7hncpep1.apps.googleusercontent.com"
          render={(renderProps) => (
            <MenuItem
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign In
            </MenuItem>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </MenuItem>
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

  const renderContact = (
    <div>
      <Typography
        component={Link}
        to="/contact"
        className={classes.navItem}
        variant="subtitle1"
        color="inherit"
      >
        Contact
      </Typography>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        style={{ background: "rgba(153, 50, 204, 0.9)", height: "60px" }} //Overriding color
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
          {renderContact}

          <div className={classes.grow} />
          <Player />
          {userAuthRender}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
