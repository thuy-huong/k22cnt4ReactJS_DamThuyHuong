import React from 'react'

export default function DthListUsers({renderDthListUsers}) {
    let dthElementUser =  renderDthListUsers.map((dthUser, index)=>{
        return(
            <>
                <tr>
                    <td>{dthUser.id}</td>
                    <td>{dthUser.UserName}</td>
                    <td>{dthUser.Password}</td>
                    <td>{dthUser.Email}</td>
                    <td>{dthUser.Phone}</td>
                    <td>Sửa | Xóa</td>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                {dthElementUser}
                </tbody>
            </table>
      </div>
    </div>
  )
}
