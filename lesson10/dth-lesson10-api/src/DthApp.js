
import { useEffect, useState } from 'react';
import './App.css';
import DthCategoryList from './components/DthCategoryList';
import axios from './api/DthApi';
import DthCategoryForm from './components/DthCategoryForm';


function DthApp() {
  //lấy dữ liệu từ api
  const [dthCategories, setDthCategories] = useState();
  const getCategories = async ()=>{
    try{
      const dthCateResponse = await axios.get("dthCategory");
      setDthCategories(dthCateResponse.data);
    }catch(error){
      console.log("Lỗi: ", error);
    }
  }

   //
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
    <div className="container border my-3 ">
      <h1>Đàm Thúy Hường - Call API</h1>

      <DthCategoryList rederDthCategories={dthCategories} onAddNew={dthHandleAddNew} />
      <hr/>
      {
        dthCategoryIsForm ===true?<DthCategoryForm onCloseForm={dthHandleCloseForm}/>:""
      }
     
    </div>
  );
}

export default DthApp;
