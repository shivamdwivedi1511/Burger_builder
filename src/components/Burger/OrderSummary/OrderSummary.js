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
    <h4>your yummy burger has following ingredients::</h4>
    <ul  className={classes.ul}>
           {items}
    </ul>
</Aux>);

}

export default OrderSummary;