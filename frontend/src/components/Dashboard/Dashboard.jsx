import React, { useEffect } from 'react';
import Container from '@mui/material/Container';                        // Container Component from Meterial UI
import Typography from '@mui/material/Typography';                      // Typography Component from Meterial UI
import Navbar from '../Layout/Navbar'                         // Navbar Component
import UrlTable from './UrlTable'                  // UrlTable Component
import Footer from '../Layout/Footer'                         // Footer Component
import { connect, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Dashboard = () => {                                                     // Main App Component
    let navigate = useNavigate();
    const state = useSelector((state) => state)
    useEffect( () => {                                                                                // Before a component is loaded
        if(!state.auth.isAuthenticated) {
            return navigate("/login");
        }                                                                                    // Download URLs
      }, []);
    return (                                                            // Return Code
        <div>
            <Navbar />
            <main>
                <Container sx={{paddingBottom: 2}}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Database</Typography>                    
                    <UrlTable />
                </Container>
            </main>
            <Footer />
        </div>
    )
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);