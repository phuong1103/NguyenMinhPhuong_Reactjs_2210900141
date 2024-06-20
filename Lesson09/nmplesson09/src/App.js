import './App.css';
import { React,useEffect, useState } from 'react'
import axios from "axios";
import NmpStudentList from './Components/NmpStudentList';


function App() {

  const [nmpStudentList, setNmpStudentList] = useState([]);
  // get data from api
  const nmpGetStudent = async () => {
    try {
      const response = await axios.get("https://666a9f037013419182d01ab2.mockapi.io/api/nmpv1/NmpStudents");
      setNmpStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    nmpGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center my-3">
        Xử lý chức năng CRUD - Hook - API
      </h1>
      <hr />
      <NmpStudentList renderNmpStudentList = {nmpStudentList} />
    </div>
  );
}

export default App;
