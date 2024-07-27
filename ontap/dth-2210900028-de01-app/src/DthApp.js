import axios from './dth_apis/dth_2210900028'
import React, { useEffect, useState } from 'react'
import DthListTableName from './dth_components/DthListTableName'
import DthFormTableName from './dth_components/DthFormTableName'

export default function DthApp() {
  //Đọc dữ liệu từ API
  const [dthListTableName,  setDthListTableName] = useState([])

  const dthGetTableName = async () => {
    try {
      const dthResp = await axios.get("dthTableName");
      console.log("API Data: ", dthResp);
      setDthListTableName(dthResp.data);
      
    } catch (error) {
      console.log("Lỗi: ",error);
    }
    // let dthResp = await axios.get('dthTableName');
    // console.log("API Data: ", dthResp);
    // setDthListTableName(dthResp.data);
  }
  useEffect(()=>{
    dthGetTableName();
  },[])
  //Hàm xóa
  const DthHanldeDetele= async (dthId)=>{
    let dthRes = await axios.delete('dthTableName/'+dthId);
    dthGetTableName();
  }
  //xét trạng thái from
  const [dthCategoryIsForm, setCategoryIsForm] = useState(false);
  const dthHandleCloseForm = (param)=>{
    setCategoryIsForm(param);
  }
  
  const dthObjTableName = {
    "dthId": "2210900028",
    "dthTbName": "Đàm Thúy Hường",
    "dthTbEmail": "thuyhuong31804@gmai.com",
    "dthTbPhone": "0962169464",
    "dthStatus": false
   
  }
  const[dthTableName, setDthTableName] = useState(dthObjTableName);
  // const DthHanldADD = ()=>{
  //   dthGetTableName();
  // }
  const DthHanldEdit = ()=>{
    dthGetTableName();
  }
  // const DthHanldADD = ()=>{
  //   dthGetTableName();
  // }

  const dthHanldeEdit = (dthObjEditTableName)=>{
    setDthTableName(dthObjEditTableName)
    setCategoryIsForm(true);
  }

  
  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá hết học phần - Đàm Thúy Hường: 2210900028</h1>
      <hr/>
      <DthListTableName rederDthListTableName={dthListTableName} onDthDelete={DthHanldeDetele} onDthEdit={dthHanldeEdit} />
      <hr/>
      {
        dthCategoryIsForm ===true? <DthFormTableName rederDthTableName={dthTableName} onDthEdit={DthHanldEdit}  onCloseForm={dthHandleCloseForm}/>:""
      }
    </div>
  )
}
