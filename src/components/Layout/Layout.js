import React from 'react';
import Aux from '../../hoc/Aux'

const Layout =(props)=>{
    return(
        <Aux>
            {/* <div>toolbar,sidebar,navbar</div> */}
            <main>{props.children}</main>
        </Aux>
        
    );
};


export default Layout;