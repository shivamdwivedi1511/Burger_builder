import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.css';

const OrderSummary =(props)=>{

    let items=[];
    for(let key in props.ingredients){
        items.push(<li key={key}><span>{key} </span>: : {props.ingredients[key]}</li>);

    }

return (<Aux >
    <h3>YOUR ORDER</h3>
    <h3>your yummy burger has following ingredients::</h3>
    <ul  className={classes.ul}>
           {items}
    </ul>
    <p className={classes.p}>total price : {props.price}</p>
    <button className={classes.button+" "+ classes.red} onClick={props.modalClose}>Cancel</button>
    <button className={classes.button+" "+ classes.green} onClick={props.modalContinue}>continue</button>
</Aux>);

}

export default OrderSummary;