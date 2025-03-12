import React, { forwardRef } from 'react';
import classes from "./inputModal.module.css";

const InputModal = forwardRef(({ labelText, ...inputProps }, ref) => {
    return (
        <>
            <label className={classes.myLabel}>{labelText}</label>
            <input className={classes.myInput} ref={ref} {...inputProps} />
        </>
    );
});


export default InputModal;
