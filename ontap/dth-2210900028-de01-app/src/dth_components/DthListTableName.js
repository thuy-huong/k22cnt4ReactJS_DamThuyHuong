import React from 'react'

export default function DthListTableName({rederDthListTableName, onDthDelete,onDthEdit}) {
    console.log("List: ",rederDthListTableName);
    //Hiển thị dữ liệu
    const dthElementTableName = rederDthListTableName.map((dthItem,dthIndex)=>{
        return(
            <tr key={dthIndex}>
                <td>{dthItem.dthId  }</td>
                <td>{dthItem.dthTbName}</td>
                <td>{dthItem.dthTbEmail}</td>
                <td>{dthItem.dthTbPhone}</td>
                <td>{(dthItem.dthStatus===true || dthItem.dthStatus==="true")?"Active":"Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'
                        onClick={()=>dthHanldeEdit(dthItem)}
                        >dth-Edit</button>
                    <button className='btn btn-danger'
                        onClick={()=>dthHanldeDelete(dthItem.dthId)}
                        >dth-Delete</button>
                </td>
            </tr>
        )
    })
    //sự kiện xóa
    const dthHanldeDelete = (dthId)=>{
        if(window.confirm('Bạn có muốn xóa dữ liệu có dthID = ' + dthId)){
            onDthDelete(dthId);
        }
       
    }
    //Sự kiện sửa
    const dthHanldeEdit = (dthObjTableName)=>{
        onDthEdit(dthObjTableName);
    }
  return (
    <div>
      <h2>Danh sách thông tin....</h2>
      <hr/>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>dthId</th>
                <th>dthTbName</th>
                <th>dthTbEmail</th>
                <th>dthTbPhone</th>
                <th>dthTbStatus</th>
                <th>dth: Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {dthElementTableName}
        </tbody>
      </table>
    </div>
  )
}
