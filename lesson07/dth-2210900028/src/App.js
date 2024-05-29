import React, { Component } from 'react';
import DthListProducts from './components/DthListProducts';
import DthProductAdd from './components/DthProductAdd';

class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      dth_Products : [
        {
            dth_productId:"2210900028",
            dth_productName:"Đàm Thúy Hường",
            dth_quantity:15,
            dth_price:1000
        },
        {
              dth_productId:"P002", 
              dth_productName:"IPhone 12", 
              dth_quantity:20, 
              dth_price:1250
        },
        {
            dth_productId:"P003", 
            dth_productName:"IPhone 13",  
            dth_quantity:10, 
            dth_price:1500
        },
      ]
    }
  }
  dthHandlSubmit = (param)=>{
    let {dth_Products} = this.state;
    dth_Products.push(param);
    this.setState({
      dth_Products:dth_Products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
      
        <hr/>
        <DthListProducts  renderProducts={this.state.dth_Products}/>
        <hr/>
        <DthProductAdd onSubmit ={this.dthHandlSubmit}/>
      </div>
    );
  }
}

export default App;