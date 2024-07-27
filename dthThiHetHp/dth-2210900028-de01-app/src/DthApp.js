
import { useEffect, useState } from 'react';
import './App.css';
import DthListEmployee from './dth_components/DthListEmployee';
import axios from './dth_apis/dth_2210900028';
import DthFormEmployee from './dth_components/DthFormEmployee';

function DthApp() {
  const [dthListEmployee, setDthListEmployee] = useState([])
  const dthGetListEmployee = async () => {
    try {
      const dthResp = await axios.get("dthEmployee");
      console.log("API Data: ", dthResp);
      setDthListEmployee(dthResp.data);
    } catch (error) {
      console.log("Lỗi: ",error);
    }
  }
  useEffect(()=>{
    dthGetListEmployee();
  },[])
 
   const dthObjEmployee = {
    "dthId": "",
    "dthFullName": "",
    "dthDate": "",
    "dthEmail": "",
    "dthPhone": "",
    "dthStatus": false
   
  }
  const[dthEmployee, setDthEmployee] = useState(dthObjEmployee);
  const DthHanldAdd = ()=>{
    dthGetListEmployee();
  }
  const DthHanldeDetele= async (dthId)=>{
    let dthRes = await axios.delete('dthEmployee/'+dthId);
    dthGetListEmployee();
  }
  return (
    <div className='container border my-3'>
      <h1>Bài đánh cuối học phần - Đàm Thúy Hường : 2210900028</h1>
      <hr/>
      <DthListEmployee renderDthListEmployee={dthListEmployee} onDthDelete={DthHanldeDetele}/>
      <hr/>
      <DthFormEmployee  rederDthEmployee={dthEmployee}  onAddNew={DthHanldAdd}/>
      
    </div>
  );
}

export default DthApp;
