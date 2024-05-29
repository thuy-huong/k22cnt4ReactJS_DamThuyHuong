import React,{useState} from 'react'

export default function DthUseState() {
     // Declare a new state variable, which we'll call "count" Khai báo một biến trạng thái mới mà chúng ta sẽ gọi là "count"
    const [count, setCount] = useState(0);

    //mảng
    const [list, setList]=useState([]);
    
    //Hàm Xử lý sự kiện thêm ngẫu nhiên
    const dthHanleList = ()=>{
      //sinh ngẫu nhiên 1 số
      let num = parseInt(Math.random()*100)
      //Cập Nhật lại state : list
      setList([
        ...list,
        num
      ])
      // ///Cách khác
      // let lst = list.push(num);
      // setList(lst)
    }
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        <hr/>
        <h3>List: {list.toString()}</h3>
        <button onClick={dthHanleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}
