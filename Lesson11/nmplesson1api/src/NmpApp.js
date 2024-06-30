import { useEffect, useState } from 'react';
import './App.css';
import NmpCategoryList from './Components/NmpCategoryList';
import axios from './api/NmpApi';
import NmpCategoryForm from './Components/NmpCategoryForm';

function NmpApp() {
// Lay du lieu tu api
const [nmpCategoties,setNmpCategories] = useState([]);

const getCategories = async ()=>{
  try{
    const nmpCateResponse =await axios.get("NmpCategory");
  setNmpCategories(nmpCateResponse.data);
  }catch(error){
    console.log("Lỗi:",error);
  }

}
useEffect(()=>{
  getCategories();
  
},[])

//Trạng thái form
const [nmpCategoryIsForm, setnmpCategoryIsForm] =useState(false);

// dữ liệu form: add/edit
let nmpCategoryInit= {
  NmpId: 0,
  NmpCategoryName: "",
  NmpCategoryStatus: true
}
const [nmpCategoryEdit , setNmpCategoryEdit]= useState("nmpCategoryInit");


const nmpHandleAddNew = (param)=>{
  setnmpCategoryIsForm(param);
}
const nmpHandleCategoryCloseForm=(param)=>{
  setnmpCategoryIsForm(param);
}
const nmpHandleCategorySubmit = (param)=>{
  let id = nmpCategoties[nmpCategoties.length-1].NmpId;
  console.log("Mã:",id);
  param.NmpId= id+1;
  nmpCategoties.push(param);
  setNmpCategories((prev)=>{
    return[...prev];
  })

setnmpCategoryIsForm(false);
}

// ham xư lý xóa
const nmpHandleDele = (NmpId)=>{
  console.log("App-Delete-NmpId:",NmpId);
  // xoa tren api
  const nmpResponse = axios.delete('NmpCategory/${NmpId}');
  let nmpDelete = nmpCategoties.filter(x=>x.NmpId !== NmpId);
  setNmpCategories(nmpDelete);
  console.log("Deleted:",nmpDelete);
}

// suarw
const nmpHandleEdit = (nmpCategory)=>{
  setNmpCategoryEdit(nmpCategory)
  setnmpCategoryIsForm(true);
}
  return (
    <div className="container border my-3">
        <h1>NGUYỄN MINH PHƯƠNG - Call API</h1>

        <NmpCategoryList renderNmpCategories = {nmpCategoties}

              onAddNew={nmpHandleAddNew}
              onNpmDelete={nmpHandleDele}
              onNmpEdit={nmpHandleEdit}/>
      <hr/>
      {
        nmpCategoryIsForm===true?<NmpCategoryForm 
                                        renderNmpCategory ={nmpCategoryEdit}
                                        onCloseForm={nmpHandleCategoryCloseForm}
                                        onCategorySubmit={nmpHandleCategorySubmit}           />:""
      }
      
    </div>
  );
}

export default NmpApp;
