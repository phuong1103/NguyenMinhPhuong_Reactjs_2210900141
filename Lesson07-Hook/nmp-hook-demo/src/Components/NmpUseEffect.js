import React, { useEffect, useState } from 'react'

export default function NmpUseEffect() {
    //state:count
    const[count,setCount] = useState(0);

    //Hàm xử lí sự kiện click me
    const nmpHandleClick = ()=>{
        setCount(prev => prev +1);
    }
    //Sử dụng hàm useEffect để cập nhật lại title
    useEffect(()=>{
        document.title = 'Nguyễn Minh Phương'// : You clicked ${count} times;
        console.log();//'You clicked ${count} times'
    });
   // useEffect: tham số thứ 2 là mảng rỗng
   useEffect(()=>{
    console.log("Chạy lần đầu tiên - một lần");

   },[])
   //[deps]
   useEffect(()=>{
    console.log('useEffect count Clicked: {count} ')
   },[count])
  return (
    <div>
      <h2>Demo - useEffect : You clicked {count} times</h2>
      <button onClick={nmpHandleClick}>
        Click me
      </button>
    </div>
  )
}
