
import { useEffect, useState } from 'react';
import './App.css';
import DthCategoryList from './components/DthCategoryList';
import axios from './api/DthApi';
import DthCategoryForm from './components/DthCategoryForm';

function DthApp() {
  //Lấy dữ liệu từ api
  const [dthCategories, sethDthCategories] = useState([]);
  const getCategories = async ()=>{
    try {
      const dthCateReponse = await axios.get("DthCategory");
      sethDthCategories(dthCateReponse.data);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  }
  useEffect(()=>{
    getCategories();
  },[])


  //Trạng thái form
  const [dthCategoryIsForm, setCategoryIsForm] = useState(false);

  const dthHandleAddNew = (param) =>{
    setCategoryIsForm(param);
  }
  const dthHandleCloseForm = (param)=>{
    setCategoryIsForm(param);
  }
  return (
    <div className="container border my-3">
      <h1>Đàm Thúy Hường - Call API</h1>
      <hr/>
      <DthCategoryList rederDthCategories={dthCategories} onAddNew={dthHandleAddNew}/>
      <hr/>
      {
        dthCategoryIsForm ===true?<DthCategoryForm onCloseForm={dthHandleCloseForm}/>:""
      }
    </div>
  );
}

export default DthApp;
