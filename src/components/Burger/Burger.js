import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger=(props)=>{

    
    let ingredients=Object.keys(props.ingredients)
    let ingarr=[];
    for(let i=0;i<ingredients.length;i++){
      
        let ing=ingredients[i];
            if(props.ingredients[ing]>0){
            for(let j=1;j<=props.ingredients[ing];j++){
                ingarr.push(<BurgerIngredients type={ing} key={`${i}${j}`}/>)
            }
        }
    }
    if(ingarr.length===0){
        ingarr.push(<p key='no ingredient'>plaese start adding Ingredients!</p>)
    }
    
    return(
        
            <div className={classes.Burger}>
                <BurgerIngredients type="BreadTop"/>
               
                {ingarr}
                <BurgerIngredients type="BreadBottom"/>
            </div>
        
    )
}

export default Burger;