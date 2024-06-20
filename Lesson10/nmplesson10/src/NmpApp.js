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
  return (
    <div className="container border my-3">
        <h1>NGUYỄN MINH PHƯƠNG - Call API</h1>

        <NmpCategoryList renderNmpCategories = {nmpCategoties}

              onAddNew={nmpHandleAddNew}/>
      <hr/>
      {
        nmpCategoryIsForm===true?<NmpCategoryForm 
                                        onCloseForm={nmpHandleCategoryCloseForm}
                                        onCategorySubmit={nmpHandleCategorySubmit}           />:""
      }
      
    </div>
  );
}

export default NmpApp;
