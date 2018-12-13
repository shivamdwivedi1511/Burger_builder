import React from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const Modal =(props)=>{
   
    return (
    <Aux>
    <Backdrop show={props.show} cancel={props.modalClose}></Backdrop>
        <div className={classes.Modal}
    style={{
        transform:props.show?'translateY(0)':'translateY(-100Vh)',
        opacity:props.show?'1':'0',
    }}>
        {props.children}
    </div>
    </Aux>
    )
    
}

export default Modal;
