import React, { useEffect, useState } from 'react'

export default function DthUseEffect() {
    //state :count
    const [count, setCount] = useState(0);
    //xử lý sự kiện click me
    const dthHandleClick = ()=>{
        setCount(prev =>prev +1);       
    }
    //Sử Dụng hàm useEfect để cập nhật lại title, có 1 tham số

    useEffect(()=>{
        document.title = `Đàm Thúy Hường: You clicked ${count} times`;
        console.log( `You clicked ${count} times`)
    })

    //useEffect : tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("Chậy lần đầu tiên - một lần");
    },[])
    // [deps]
    useEffect(()=>{
       console.log(`useEfect count click: ${count}`);
    },[count])
  return (
    <div>
      <h2>Demo - useEffect: You clicked {count} times</h2>
      <button onClick={dthHandleClick}>Click here</button>
    </div>
  )
}
