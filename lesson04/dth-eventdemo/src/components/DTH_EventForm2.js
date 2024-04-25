import React from 'react'

export default function DTH_EventForm2() {
    // Định nghĩa các hàm xử lý sự kiện
    const eventHandleClick1 = (content) =>{
        console.log('=======================================');
        console.log(content);
        console.log('=======================================');
    }
  return (
    <div className='alert alert-success'>
      <h2>Event demo -Function component</h2>
      <button onClick={eventHandleClick1("Đàm Thúy Hường")}>Gọi Khi render</button>
      <button onClick={()=>eventHandleClick1("Đàm Thúy Hường")}>Gọi khi click</button>
    </div>
  )
}
