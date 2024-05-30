
import './App.css';
import { useState } from 'react';
import DthListProduct from './components/DthListProduct';
import DthProductAddOrEdit from './components/DthProductAddOrEdit';

function DthApp() {
  //mock data
  const dth_Products = [
    {
        dth_productId:"2210900028" ,     
        dth_productName:"Đàm Thúy hường",     
        dth_quantity:15,       
        dth_price:1000,
    },
    {
        dth_productId:"P002",
        dth_productName:"IPhone 12",
        dth_quantity:20,
        dth_price:1250,
    },
    {
        dth_productId:"P003"
        , dth_productName:"IPhone 13"
        ,  dth_quantity:10
        , dth_price:1500
    },
  ]
  //sử dụng hàm useState của hook
  const [dthListProduct,setDthListProduct] = useState(dth_Products)

  const dthHandleSubmit = (dthProduct)=>{
    console.log("addOrEdit: ", dthProduct);
    //thêm mới
    setDthListProduct((dthPrev) =>{
      return[
        ...dthPrev,
        dthProduct
      ]
    })
  }

  return (
    <div className="container border mt-5 p-5">
      <h1 className='text-center my-3'>Xử lý chức năng CRUD - Hook</h1>
      <hr/>
      <DthListProduct rederDthProducts={dthListProduct} />
      <DthProductAddOrEdit  dthOnSubmit={dthHandleSubmit} />
    </div>
  );
}

export default DthApp;
