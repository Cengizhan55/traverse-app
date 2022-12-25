import React, {useState} from 'react'

import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

export default function Warning({open, setOpen}) {

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {

  
      setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                } onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                Bu özellik henüz eklenmemiştir.
            </Alert>
        </Snackbar>
    )
}
