import React, { useEffect } from 'react';
import { DialogContent, Dialog, Paper, DialogActions, Button, DialogTitle, Grid } from '@material-ui/core';
import CloseIcon  from '@material-ui/icons/Close';
import CheckIcon  from '@material-ui/icons/Check';
import Draggable from 'react-draggable';
import { ResponseContext } from '../Context/ResponseContext';
import { useContext } from 'react';
import clsx from 'clsx';
export default () => {
  const { open, errorTitle, errorContent, handleError, errorCode } = useContext(ResponseContext)
    function PaperComponent(props) {
        return (
          <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
          </Draggable>
        );
      }
    
    const handleClose = () => {
      handleError(false, '', '', '' , () => {});
      console.log("close");
    }
    
    const handleEnter = () => {
      const timer = setTimeout(() => {
        handleClose();
      }, Number(process.env.REACT_APP_TIMER));
    };
    return (
        <Dialog
        onEntered={handleEnter}
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        classes={{paper: 'error-dialog' }}
      >
          
           {/* <div className={'error-head'} id="draggable-dialog-title">
        
      </div> */}
  
        <DialogContent className={errorTitle === "ERROR" ? 'error-content' : 'success-content'}>
        <Grid container >
          <Grid item xs={3} className='grid-icon'>
          <div className={errorTitle === "ERROR" ? 'error-title' : 'success-title'}>
           {
             errorTitle === "ERROR" ? 
             <CloseIcon className={'error-icon'} /> :
             <CheckIcon className={'success-icon'} />
           }
           
        </div>
          </Grid>
          <Grid item xs={8} className='grid-content'>
          <div className='title'>{ errorTitle }</div>
        <div className='content'> { errorContent }</div>
          </Grid>
        </Grid>
        
       
      
        </DialogContent>
         </Dialog>
    );
}