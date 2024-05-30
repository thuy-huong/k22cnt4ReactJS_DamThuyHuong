import React, { useState } from 'react'

export default function DthProductAddOrEdit({dthOnSubmit}) {
    const[dth_productId, setDth_productId] = useState('');
    const[dth_productName, setDth_productName] = useState('');
    const[dth_quantity, setDth_quantity] = useState(0);
    const[dth_price, setDth_price] = useState(0);

    const dthHandleSubmit = (dthEvent)=>{
        dthEvent.preventDefault();
        let dthProduct = {
            dth_productId:dth_productId,
            dth_productName:dth_productName,
            dth_quantity:dth_quantity,
            dth_price:dth_price,
        }
        dthOnSubmit(dthProduct)
    }
  return (
    <div className='col-md-6'>
      <h2>Thêm mới sản phẩm / sửa đổi</h2>
      <form>
        <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
            <input type="text" className="form-control" placeholder="Mã sản phẩm" 
                name='dth_productId' value={dth_productId}
                onChange={(ev)=>setDth_productId(ev.target.value)}
                aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
            <input type="text" className="form-control" placeholder="Tên sản phẩm" 
                name='dth_productName' value={dth_productName}
                onChange={(ev)=>setDth_productName(ev.target.value)}
                aria-describedby="basic-addon2"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Số lượng</span>
            <input type="number" className="form-control" placeholder="Số lượng" 
                name='dth_quantity' value={dth_quantity}
                onChange={(ev)=>setDth_quantity(ev.target.value)}
                aria-describedby="basic-addon3"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon4">Đơn giá</span>
            <input type="number" className="form-control" placeholder="Đơn giá" 
                name='dth_price' value={dth_price}
                onChange={(ev)=>setDth_price(ev.target.value)}
                aria-describedby="basic-addon4"/>
        </div>
        <button className='btn btn-primary' name='dthBtnAction'
            onClick={dthHandleSubmit}>
            Thêm mới</button>
      </form>
    </div>
  )
}
