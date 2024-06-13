
import './App.css';
import {React, useEffect, useState} from 'react'
import axios from 'axios';
import DthStudentList from './components/DthStudentList';
import DthStudentAddOrEdit from './components/DthStudentAddOrEdit';

function DthApp() {
  //sử dụng UseState trong Hook
  const [dthStudentList, setDthStudentList] = useState([]);
  // Function to fetch data using Axios
  const dthGetStudent = async () => {
    try {
      const response = await axios.get("https://666a99ae7013419182cffd68.mockapi.io/api/dthv1/dthStudent");
      setDthStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
    // Call fetchData on component mount
  useEffect(()=>{
    dthGetStudent();
  }, []);

  //Add student
  const dthHandleSubmit = (dthStudent)=>{
    // console.log("addOrEdit: ", dthStudent);
    //Add
    setDthStudentList((dthPrev) =>{
      return[
        ...dthPrev,
        dthStudent
      ]
    })
 
  }

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>Xử lý chức năng CURD - Hook - API</h1>
      <hr/>
      <DthStudentList renderDthStudentList = {dthStudentList}  />
      <hr/>
      <DthStudentAddOrEdit dthOnSubmit={dthHandleSubmit} />
    </div>
  );
}

export default DthApp;
