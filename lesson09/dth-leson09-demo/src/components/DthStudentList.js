import axios from 'axios';
import React from 'react'

export default function DthStudentList({renderDthStudentList}) {
    console.log("Data: ",renderDthStudentList);
    
    let dthElement = renderDthStudentList.map((DthStudent, index)=>{
        return(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{DthStudent.dthId}</td>
                <td>{DthStudent.dthName}</td>
                <td>{DthStudent.dthAge}</td>
                <td>{DthStudent.dthPhone}</td>
                <td>{DthStudent.dthEmail}</td>
                <td>{DthStudent.dthStatus}</td>
                <td>
                    <button className='btn btn-success mx-1'>
                        <i class="fa-solid fa-pen-to-square" ></i>
                    </button>
                    <button className='btn btn-danger mx-1'  >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    });
  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table className="table table-bodered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Mã sinh viên</th>
      <th scope="col">Họ tên</th>
      <th scope="col">Tuổi</th>
      <th scope="col">Địa chỉ</th>
      <th scope="col">Email</th>
      <th scope="col">Trạng thái</th>
      <th scope="col">Chức năng</th>
    </tr>
  </thead>
  <tbody>
   {dthElement}
  </tbody>
</table>

    </div>
  )
}
