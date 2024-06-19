import React from 'react'

export default function DthCategoryList(rederDthCategories, onAddNew) {
    console.log("Category: ", rederDthCategories);
    // let dthCategoryElement = rederDthCategories.map((dthCategory, index) =>{
    //     return(
    //         <tr key={index}> 
    //             <th>{index + 1}</th>
    //             <th>{dthCategory.dthId}</th>
    //             <th>{dthCategory.dthCategoryName}</th>
    //             <th>{dthCategory.dthCategoryStatus}</th>
    //             <th> Sửa | Xóa</th>
    //         </tr>
    //     )
    // })
    const dthHandleAdd = ()=>{
        onAddNew(true);
      }
  return (
    <div>
      <div className='container m-2'>
        <h2>Danh sách loại sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã loại</th>
                    <th>Tên loại</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {/* {dthCategoryElement} */}
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={dthHandleAdd}>Thêm mới</button>
     
        </div>
    </div>
  )
}
