import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'



const INGREDIENT_PRICE={
    Salad:0.4,
    Cheese:0.6,
    Bacon:1.2,
    Meat:2.3
}

class BurgerBuilder extends Component{

    state={
        ingredients:{
            Salad:0,
            Meat:0,
            Cheese:0,
            Bacon:0,
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true});
        console.log('i was called')
    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
        console.log('canceled')
    }

    updatePurchase=(item)=>{
        
        let sum=0;
        for(let key in item){
            sum=sum+item[key];
        }
        
         this.setState({purchasable:sum>0});
         
        
    }


    addIngredientHandler=(item)=>{
        
         let itemcount=this.state.ingredients[item];
         itemcount=itemcount+1;
         let newstate={...this.state.ingredients};
        
        newstate[item]=itemcount;
        let itemprice=INGREDIENT_PRICE[item];
        let oldprice=this.state.totalPrice;
        let totalPrice=oldprice+itemprice;
        this.setState({
            ingredients:newstate,
            totalPrice:totalPrice,
            
        })
        this.updatePurchase(newstate);

      
    }

    removeIngredientHandler=(item)=>{
        
         let itemcount=this.state.ingredients[item];
         if(itemcount>0){ 
             itemcount=itemcount-1;
            let newstate={...this.state.ingredients};
        
           newstate[item]=itemcount;
           let itemprice=INGREDIENT_PRICE[item];
           let oldprice=this.state.totalPrice;
           let totalPrice=oldprice-itemprice;
           this.setState({
               ingredients:newstate,
               totalPrice:totalPrice
           })
           this.updatePurchase(newstate);

         }
        

    }
    

    render(){

        console.log(this.state.purchasing)
        const disabledInfo={...this.state.ingredients};;
        
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        
        return (<Aux>
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}><OrderSummary ingredients={this.state.ingredients}></OrderSummary></Modal>
        
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls add={this.addIngredientHandler} 
                            remove={this.removeIngredientHandler} 
                            Disabled={disabledInfo}
                            price={this.state.totalPrice.toFixed(2)}
                            purchasable={this.state.purchasable}
                            purchase={this.purchaseHandler}
                            />

        </Aux>)
    }
};

export default BurgerBuilder;