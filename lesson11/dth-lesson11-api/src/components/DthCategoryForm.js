import axios from '../api/DthApi';
import React, { useEffect, useState } from 'react'

export default function DthCategoryForm({onCloseForm, onCategorySubmit, renderDthCateEdit}) {
  //state
  console.log("edit: ", renderDthCateEdit);
  const [dthId, setDthId] = useState(0);
  const [dthCategoryName, setDthCategoryName] = useState("");
  const [dthCategoryStatus, setDthCategoryStatus] = useState(true);
  
  useEffect(()=>{
    setDthId(renderDthCateEdit.dthId);
    setDthCategoryName(renderDthCateEdit.dthCategoryName);
    setDthCategoryStatus(renderDthCateEdit.dthCategoryStatus);
  },[renderDthCateEdit])

  const dthHandleClose = ()=>{
    onCloseForm(false);
  }

  const dthHandleSubmit = async (event)=>{
    event.preventDefault();
    if(dthId === 0 ){
      //Thêm mới
      let dthCategory = {
        dthId:0,
        dthCategoryName:dthCategoryName,
        dthCategoryStatus:dthCategoryStatus
      }
      await axios.post("DthCategory", dthCategory);
      onCategorySubmit(dthCategory);
    }else{
      //Sửa
      let dthCategory = {
        dthId:dthId,
        dthCategoryName:dthCategoryName,
        dthCategoryStatus:dthCategoryStatus
      }
      await axios.put("DthCategory", dthCategory);
      onCategorySubmit(dthCategory);
    }
   
  }
  return (
    <div>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Name</span>
            <input type="text" className="form-control" 
                name='dthCategoryName'
                value={dthCategoryName}
                onChange={(ev)=>setDthCategoryName(ev.target.value)}
                placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Status</span>
            <select className="form-control" 
                name='dthCategoryStatus' 
                value={dthCategoryStatus}
                onChange={(ev)=>setDthCategoryStatus(ev.target.value)}>
                <option value={true}> Hiển thị</option>  
                <option value={false}>Tạm khóa</option>  
            </select> 
        </div>
        <button className='btn btn-success' onClick={dthHandleSubmit}>Ghi lại</button>
        <button className='btn btn-danger' onClick={dthHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
