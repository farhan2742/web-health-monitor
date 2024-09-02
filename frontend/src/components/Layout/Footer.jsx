// Import Statements

import React from 'react';                                                                      // React Library Components
import Typography from '@mui/material/Typography';                                              // Typography Component from Meterial UI
import Link from '@mui/material/Link';                                                          // Link Component from Meterial UI
import CssBaseline from '@mui/material/CssBaseline';                                            // CssBaseline Component from Meterial UI

// Definition Statements

function Footer() {                                                                             // Application Footer Component
    return (                                                                                    // Return Code
      <div className="footer">
      <CssBaseline />
      <Typography variant="body2" color="text.secondary" align="center" position="sticky">
        {'Copyright © '}
        <Link color="inherit" href="https://www.linkedin.com/in/farhan-kiyani/">
            Farhan Kiyani
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </div>
    );
}

export default Footer;                                                                           // Export Footer Component