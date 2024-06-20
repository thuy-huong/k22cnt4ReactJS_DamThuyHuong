import React from 'react'

export default function DthCategoryList({rederDthCategories , onAddNew, onDthDelete, onDthEdit}) {
  console.log("Categories: ", rederDthCategories);
  let dthCategoryElement = rederDthCategories.map((DthCategory, index)=>{
    return(
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{DthCategory.dthId}</td>
            <td>{DthCategory.dthCategoryName}</td>
            <td>{DthCategory.dthCategoryStatus===true?"Hiển thị":"Tạm khóa"}</td>
            <td>
                <button className='btn btn-success mx-1' onClick={()=>dthHandleEdit(DthCategory)}>
                    <i className="fa-solid fa-pen-to-square" ></i>
                </button>
                <button className='btn btn-danger mx-1'  onClick={()=>dthHandleDelete(DthCategory.dthId)} >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    )
  })
  const dthHandleAdd = ()=>{
    onAddNew(true);
  }
  //Hàm xử lý sự kiện sửa
  const dthHandleEdit = (DthCategory) => {
    onDthEdit(DthCategory);
  }

 //Hàm xử lý sự kiện xóa
  const dthHandleDelete = (dthId) =>{
    // console.log("Id xóa: ", dthId);
    if(window.confirm('Bạn có chắc chắn muốn xóa danh mục có mã [' +dthId+'] Không?')){
      onDthDelete(dthId);
    }else{

    }
   
  }
  return (
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
            {dthCategoryElement}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={dthHandleAdd}>Thêm mới</button>
     
    </div>
  )
}
