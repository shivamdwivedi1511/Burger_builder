import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls= [
    {label:'Salad',type:'Salad'},
    {label:'Cheese',type:'Cheese'},

    {label:'Meat',type:'Meat'},
    {label:'Bacon',type:'Bacon'},
];

const BuildControls=(props)=>{
    return (
        <div className={classes.BuildControls}>
        <h2>Your Total Price is :: {props.price}</h2>
            {
                controls.map((item)=>{
                    
                    return(
                        
                <BuildControl 
                    label={item.label} 
                    key={item.label} 
                    added={()=>props.add(item.type)}
                    removed={()=>props.remove(item.type)}
                    Disabled={props.Disabled[item.type]} 
                    >
                    
                </BuildControl>)})
            }
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchase}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
