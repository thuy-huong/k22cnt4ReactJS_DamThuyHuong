import React from 'react'

export default function DthListEmployee({renderDthListEmployee, onDthDelete}) {
    console.log("Data: ",renderDthListEmployee);
    //Hiển thị dữ liệu
    const dthElementEmployee = renderDthListEmployee.map((dthItem,dthIndex)=>{
        return(
            <tr key={dthIndex}>
                <td>{dthItem.dthId  }</td>
                <td>{dthItem.dthFullName}</td>
                <td>{dthItem.dthDate}</td>
                <td>{dthItem.dthEmail}</td>
                <td>{dthItem.dthPhone}</td>
                <td>{(dthItem.dthStatus===true || dthItem.dthStatus==="true")?"Active":"Non-Active"}</td>
                <td>
                <button className='btn btn-danger'
                    onClick={()=>dthHanldeDelete(dthItem.dthId)}
                        >dth-Delete</button>
                </td>
            </tr>
        )
    })

    const dthHanldeDelete = (dthId)=>{
        if(window.confirm('Bạn có muốn xóa dữ liệu có dthID = ' + dthId)){
            onDthDelete(dthId);
        }
       
    }
 
  return (
    <div>   
          <h2>Danh sách Employee</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>dthId</th>
                    <th>dthFullName</th>
                    <th>dthDate</th>
                    <th>dthEmail</th>
                    <th>dthPhone</th>
                    <th>dthStatus</th>
                    <th>dth: Chức năng</th>
                </tr>
            </thead>
            <tbody>
               {dthElementEmployee}
            </tbody>
        </table>
    </div>
  )
}
