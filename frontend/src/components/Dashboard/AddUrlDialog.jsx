// Import Statements

import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import crud from '../../utils/crudFunctions'

// Definition Statements

const AddUrlDialgo  = () => {
    const [open, setOpen] = React.useState(false);
    const [urlToAdd, setUrlToAdd] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await crud.createURL(urlToAdd)
        setOpen(false)
    }

    return (
        <>
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add new URL
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new URL</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please Enter a valid URL in the text box below and press Submit to store it in the DataBase.
                </DialogContentText>
                    
                        <TextField
                            autoFocus
                            margin="dense"
                            name="urlToAdd"
                            id="url"
                            label="url"
                            type="url"
                            onChange={e => setUrlToAdd(e.target.value)}
                            value={urlToAdd}
                            fullWidth
                            variant="standard"
                        />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
        </>
    );
}

export default AddUrlDialgo;