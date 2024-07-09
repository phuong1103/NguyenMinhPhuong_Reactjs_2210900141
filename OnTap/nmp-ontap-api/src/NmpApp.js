
import { useEffect, useState } from 'react';
import './App.css';
import NmpListUsers from './Components/NmpListUsers';
import axios from './api/NmpApi'


function NmpApp() {

const [nmpListUsers,setNmpListUsers] = useState([]);

  // dọc dữ liệu từ api
const nmpGetAllUsers = async()=>{
  const nmpResponse = await axios.get("NmpUsers");
  console.log("Api Data:",nmpResponse.data);
}
useEffect(()=>{
  nmpGetAllUsers();
},[])


  return (
    <div className="container border my-3">
      <h1>Làm việc với Mock-API</h1>
     <hr/>
     <NmpListUsers renderNmpListUsers={nmpListUsers}/>
    </div>
  );
}

export default NmpApp;
