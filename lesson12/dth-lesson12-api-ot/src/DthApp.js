import DthListUsers from "./components/DthListUsers";
import axios from "./api/dthApi";
import { useEffect, useState } from "react";
import DthAddOrEditUsers from "./components/DthAddOrEditUsers";
function DthApp() {
  //Đọc dữ liệu từ API
  const [dthListUsers, setDthListUsers] = useState([]);
  const dthGetAllUsers = async () => {
    const dthResponse = await axios.get("dthUsers");
    console.log("API Data: ", dthResponse);
    setDthListUsers(dthResponse.data);
  }
  useEffect(()=>{
    dthGetAllUsers();
  },[])
  return (
    <div className="container border my-3">
      <h1>Làm việc với Hook - API</h1>
      <hr/>
      <DthListUsers renderDthListUsers={dthListUsers}/>
      <hr/>
      <DthAddOrEditUsers/>
    </div>
  );
}

export default DthApp;
