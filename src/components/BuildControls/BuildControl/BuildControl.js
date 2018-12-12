import React from 'react';
// import classes from './BuildControl.css';

import classes from './BuildControl2.css'
const BuildControl =(props)=>{
    
    return (
        <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.button} onClick={props.added}>+</button>
        <button className={classes.button} onClick={props.removed} disabled={props.Disabled}>-</button>

        </div>
        
    );
}

export default BuildControl;