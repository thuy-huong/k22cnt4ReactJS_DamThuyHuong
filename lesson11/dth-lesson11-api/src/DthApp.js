
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
  //Dữ liệu form add \ edit
  let dthCategoryInit = {
    dthId:0,
    dthCategoryName:"",
    dthCategoryStatus:true
  }
  const [dthCategoryEdit, setCategoryEdit] = useState(dthCategoryInit);

  const dthHandleAddNew = (param) =>{
    setCategoryIsForm(param);
  }
  const dthHandleCloseForm = (param)=>{
    setCategoryIsForm(param);
  }
  const dthHandleCategorySubmit = (param)=>{
    let id = dthCategories[dthCategories.length-1].dthId;
    param.dthid = id +1;
    dthCategories.push(param);
    sethDthCategories((prve)=>{
      return[...prve];
    })
  }
  //Hàm xử lý sự kiện xóa 1 đối tượng category
  const dthHandleDelete = (dthId)=>{
    let dthDelete = dthCategories.filter(x=>x.dthId !== dthId); //xóa trong sate
    sethDthCategories(dthDelete);
    //xóa trên api
     axios.delete(`DthCategory/${dthId}`);
  }
  //Sửa category
  const dthHandleEdit = (dthCategory) =>{
    console.log("Action Edit:",dthCategory);
    setCategoryEdit(dthCategory);
    setCategoryIsForm(true);
  }
  console.log(" dthCategoryEdit: ", dthCategoryEdit);
  return (
    <div className="container border my-3">
      <h1>Đàm Thúy Hường - Call API</h1>
      <hr/>
      <DthCategoryList rederDthCategories={dthCategories} 
                        onAddNew={dthHandleAddNew}
                        onDthDelete={dthHandleDelete}
                        onDthEdit={dthHandleEdit}/>
      <hr/>
      {
        dthCategoryIsForm ===true?<DthCategoryForm 
                                  renderDthCateEdit = {dthCategoryEdit}
                                  onCloseForm={dthHandleCloseForm}
                                  onCategorySubmit={dthHandleCategorySubmit}/>:""
      }
    </div>
  );
}

export default DthApp;
