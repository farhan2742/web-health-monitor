import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar'                         // Navbar Component
function Landing(props) {                                                                                 // Application Navbar Component
    let navigate = useNavigate();
    const state = useSelector((state) => state)
    useEffect( () => {                                                                                // Before a component is loaded
        if(state.auth.isAuthenticated) {
            return navigate("/Dashboard");
        }                                                                                    // Download URLs
      }, []);                                                                        // Before a component is loaded                                                                                   // Download URLs
    
    return (                                                                                        // Return Code
        <>
      <CssBaseline />
      <Navbar position="relative" />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Web Health Monitor
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Web Health Monitor is the only application that you will ever need in order to make sure your concerned web resources are performing as you need them.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="primary"><Link to="/register" className="links" data-testid="registerHomeLink">Sign Up</Link></Button>
              <Button variant="contained" color="success"><Link to="/login" className="links" data-testid="loginHomeLink">Login</Link></Button>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Footer />
      </Box>
        </>
    );
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Landing);

