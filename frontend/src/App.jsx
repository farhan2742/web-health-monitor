// Import Statements

//import React, { useEffect } from 'react';                                              // React Library Components
import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Landing from './components/Layout/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import jwt_decode from "jwt-decode";
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { useSelector } from 'react-redux';
import store from './store';
import { connect } from 'react-redux';
import { logoutUser } from './actions/authActions';
import './App.css';
//import { useAuth, useLoginWithRedirect } from "@frontegg/react";

// Definition Statements

// Definition Statements

if(localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set User and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "/login";
    }
  }
// <Route path="/Dashboard" element={state.auth.isAuthenticated === true ? <Navigate to="/Dashboard"/> : <Login />} />

const App = () => {                                                     // Main App Component
    const state = useSelector((state) => state)
    return (                                                            // Return Code
    <div className="App">
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </div>
    )
};

// const App = () => {                                                     // Main App Component
//     const { user, isAuthenticated } = useAuth();
//     const loginWithRedirect = useLoginWithRedirect();
//     useEffect( () => { 
//         if(!isAuthenticated) {
//             loginWithRedirect()
//         }                                                                             // Before a component is loaded                                                                                   // Download URLs
//       }, []);
//     return (                                                            // Return Code
//         <div className="App">
//             { isAuthenticated ? (
//                 <>
//                 <Navbar User={user} />
//                 <main>
//                     <Container sx={{paddingBottom: 2}}>
//                         <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Database</Typography>                    
//                         <UrlTable />
//                     </Container>
//                 </main>
//                 <Footer />
//                 </>
//             ) : (
//                 <Typography variant="h2" align="center" color="textPrimary" gutterBottom>This App Requires Authentication, Redirecting to login......</Typography>
//       )}
//         </div>
//     )
// };

export default App;                                                     // Export Main App Component