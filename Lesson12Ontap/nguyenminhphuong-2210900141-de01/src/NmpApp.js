import React, { useEffect, useState } from 'react'
import NmpListTableName from './Nmp_Components/NmpListTableName'
import axios from './nmp_apis/nmp-2210900141'
import NmpFormTableName from './Nmp_Components/NmpFormTableName'

export default function NmpApp() {
// đọc dữ liệu từ api
const[nmpListTableName,setNmpListTableName] = useState([])
const nmpGetTableName = async()=>{
  let NmpResp = await axios.get("nmpTableName");
  console.log("App list:",NmpResp.data);
  setNmpListTableName(NmpResp.data);

}
useEffect(()=>{
  nmpGetTableName();
},[])

// Hàm xoá
const nmpHandleDelete= async(nmpId)=>{
  let NmpResp = await axios.delete("nmpTableName/"+nmpId);
  nmpGetTableName();
}

const nmpObjectTableName={
  "nmpTbName": "Nguyễn Minh Phương",
  "nmpTbEmail": "van.convet@gmail.com",
  "nmpTbPhone": "0348124474",
  "nmpTbStatus": false,
  "nmpId": "2210900141"
};
const [nmpTableName,setNmpTableName] = useState(nmpObjectTableName);

const nmpHandleAdd = ()=>{
  nmpGetTableName();
}
   const nmpHandleEdit = (nmpObjEditTableName)=>{
    setNmpTableName(nmpObjEditTableName)
   }


  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá hết học phần - Nguyễn Minh Phương : 2210900141</h1>
      <hr/>
      <NmpListTableName renderNmpListTableName={nmpListTableName} onNmpDelete={nmpHandleDelete} onNmpEdit={nmpHandleEdit}/>
      <hr/>
      <NmpFormTableName renderNmpTableName= {nmpTableName} onNmpAdd={nmpHandleAdd} />
    </div>
  )
}
