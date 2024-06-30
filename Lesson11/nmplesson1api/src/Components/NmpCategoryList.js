import React from 'react'

export default function NmpCategoryList({renderNmpCategories, onAddNew, onNpmDelete,onNmpEdit}) {
  console.log("renderNmpCategories:", renderNmpCategories);
  let nmpCategoryElement = renderNmpCategories.map((nmpCategory,index)=>{
    return(
        <tr key ={index}>
            <th>{index+1}</th>
            <td>{nmpCategory.NmpId}</td>
            <td>{nmpCategory.NmpCategoryName}</td>
            <td>{nmpCategory.NmpCategoryStatus===true?"Hiển thị":"Tạm khóa"}</td>
            <td>
            <button className='btn btn-outline-success mx-1' onClick={()=>nmpHandleEdit(nmpCategory)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='btn btn-outline-danger mx-1' onClick={()=>nmpHandleDelete(nmpCategory.NmpId)}>
                    <i className="fa-solid fa-trash-arrow-up"></i>
                    </button>
            </td>
        </tr>
    )
  })

  const nmpHandleAdd =()=>{
    onAddNew(true);
  }


  //Hàm xử lý sự kiện xóa 
  const nmpHandleDelete = (NmpId)=>{
       if(window.confirm('Bạn có thực sự muốn xóa Category có mã '+NmpId+' không')){
        console.log("Deleted:",NmpId);
          onNpmDelete(NmpId)
    }else{

    }
  
  }

  const nmpHandleEdit = (nmpCategory)=>{
    onNmpEdit(nmpCategory);
  }
    return (
    <div className='container m-2'>
      <h2>DANH SÁCH LOẠI SẢN PHẨM </h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>Mã loại</th>
                <th>Tên loại</th>
                <th>Trang thái</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {nmpCategoryElement}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={nmpHandleAdd}>Thêm mới</button>
    </div>
  )
}
