import React, { useState } from 'react'

export default function NmpUseState() {
  const[ count, setCount] = useState(10);
  // mảng
  const[list,setList]= useState([1,5]);
  //Hàm xử lí thêm ngẫu nhiên
 const nmpHandleList = ()=>{
    //Sinh ngẫu nhiên 1 giá trị số
    let num = parseInt(Math.random()*100);
    //Cập nhật lại state:list
    setList([
      ...list,
      num
    ])
    // // Cách khác
    // let lst = list.push(num);
    // setList(lst);
  }
    return (
    <div>
  <p>You Clicked {count} times</p>
  <button onClick={() => setCount(count +1)}>
    Click me 
    </button>  
    <hr/>
    <h3>List:{list.toString()}</h3>  
    <button onClick={nmpHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}
