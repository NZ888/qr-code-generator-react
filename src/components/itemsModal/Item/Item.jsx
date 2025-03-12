import React from 'react';
import classes from "./Item.module.css"
const Item = ({link, deleteFunc, regenerateFunc,  item}) => {
    return (
        <div className={classes.container}>
            <div className={classes.link}>
                <a href={link} target={"_blank"}>{link}</a>
            </div>
            <div className={classes.btnContainer}>
                <button style={{backgroundColor:"#f60b0b"}} onClick={()=> deleteFunc(item)}>Delete</button>
                <button style={{backgroundColor:"#000000"}} onClick={()=> regenerateFunc(link)}>Regenerate</button>
            </div>
        </div>
    );
};

export default Item;