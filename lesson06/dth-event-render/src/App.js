import React, { Component } from 'react';
import Dth_ProductList from './Components/Dth_ProductList';
import DthProductAdd from './Components/DthProductAdd';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Đàm Thúy Hường', id: 2210900028 , status:1},
        { title: 'Cabbage', id: 1 , status:1},
        { title: 'Garlic', id: 2 , status:0},
        { title: 'Apple', id: 3 , status:0},
        { title: 'SamSung', id: 4 , status:1},
      ]
    }
  }
  dthHandlSubmit = (param)=>{
    // console.log("App: ", param);
    // thêm vào mảng dữ liệu products
    // let products = this.state.products;
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1 >Đàm Thúy Hường - Event Form - Render Data</h1>
        <hr/>
        <Dth_ProductList renderProducts={this.state.products}/>
        <hr/>
        <DthProductAdd onSubmit = {this.dthHandlSubmit}/>
      </div>
    );
  }
}

export default App;