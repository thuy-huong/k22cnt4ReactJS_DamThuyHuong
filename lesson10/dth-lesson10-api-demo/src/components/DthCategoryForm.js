import React from 'react'

export default function DthCategoryForm(onCloseForm) {
    const dthHandleClose = ()=>{
        onCloseForm(false);
      }
  return (
    <div>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Name</span>
            <input type="text" className="form-control" 
                name='dthCategoryName'
                value={''}
                placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Status</span>
            <select className="form-control" name='dthCategoryStatus' value={''}>
                <option value={true}> Hiển thị</option>  
                <option value={false}>Tạm khóa</option>  
            </select> 
        </div>
        <button className='btn btn-success'>Ghi lại</button>
        <button className='btn btn-danger' onClick={dthHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
