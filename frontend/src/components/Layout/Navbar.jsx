// Import Statements

import React from 'react';                                                                          // React Library Components
import Typography from '@mui/material/Typography';                                                  // Typography Component from Meterial UI
import AppBar from '@mui/material/AppBar';                                                          // AppBar Component from Meterial UI
import Button from '@mui/material/Button';                                                        // Button Component from Meterial UI
import CssBaseline from '@mui/material/CssBaseline';                                                // CssBaseline Component from Meterial UI
import Toolbar from '@mui/material/Toolbar';                                                        // Toolbar Component from Meterial UI
import './Navbar.css';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from '../../actions/authActions';


// Definition Statements

function Navbar(props) {                                                                                 // Application Navbar Component
    let navigate = useNavigate();
    const state = useSelector((state) => state)
    const onLogoutClick = (e) => {
        e.preventDefault();
        props.logoutUser();
        return navigate("/");
    }
    const guestLinks = (
        <>
        <Typography variant="h6" color="inherit" noWrap>
            <Link to="/" className="links" data-testid="homeNavbarLink">Home</Link>
        </Typography>
        <Typography variant="h6" color="inherit" noWrap>
            <Link to="/register" className="links" data-testid="registerNavbarLink">Register</Link>
        </Typography>
        <Typography variant="h6" color="inherit" noWrap>
            <Link to="/login" className="links" data-testid="loginNavbarLink">Login</Link>
        </Typography>
        </>
    );
    const authLinks = (
        <>
        <Typography variant="h6" color="inherit" noWrap>
            <Link to="/Dashboard" className="links" data-testid="dashboardNavbarLink">Dashboard</Link>
        </Typography>
        <Button href="http://localhost:3000/account/logout" variant="contained" color="error" position="rigth" onClick={onLogoutClick} data-testid="logoutNavbarLink">Logout</Button>
        </>
    );
    return (                                                                                        // Return Code
        <>
        <CssBaseline />
        <AppBar position="sticky">
            <Toolbar className="NavBar">
                {state.auth.isAuthenticated ? authLinks : guestLinks}
                
            </Toolbar>
        </AppBar>
        </>
    );
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar);

// export default Navbar;                                                                               // Export Navbar Component