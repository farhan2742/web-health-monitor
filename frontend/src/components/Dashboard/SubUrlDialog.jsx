// Import Statements

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Definition Statements

const SubUrlDialog = () => {
    const [openChart, setOpenChart] = useState(false);

    const handleChartClose = () => {
        setOpenChart(false);
    };

    return (
        <>
        <Dialog fullScreen open={openChart} onClose={handleChartClose}>
            <DialogTitle>
                Sub-URLs
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Below is an hierarcal chart that shows sub urls for the selected URL.
                </DialogContentText>
                <div id="subUrlChart"></div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleChartClose}>Close</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default SubUrlDialog;