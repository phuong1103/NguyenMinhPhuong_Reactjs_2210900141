import React from 'react'

export default function NmpListTableName({renderNmpListTableName,onNmpDelete,onNmpEdit}) {
    console.log("List:",renderNmpListTableName);
    //hiển thị dữ liệu
    const nmpElementTableName = renderNmpListTableName.map((nmpItem,nmpIndex)=>{
        return(
            <tr key={nmpIndex}>
                <td>{nmpItem.nmpId}</td>
                <td>{nmpItem.nmpTbName}</td>
                <td>{nmpItem.nmpTbEmail}</td>
                <td>{nmpItem.nmpTbPhone}</td>
                <td>{(nmpItem.nmpTbStatus===true || nmpItem.nmpTbStatus==="true")?"Active":"Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'
                        onClick={()=>nmpHandleEdit(nmpItem)}
                        >Nmp-Edit</button>
                    <button className='btn btn-danger'
                        onClick={()=>nmpHandleDelete(nmpItem.nmpId)}
                    >Nmp-Delete</button>
                </td>

            </tr>
        )
    })
    // Sự kiện xoá 
    const nmpHandleDelete = (nmpId)=>{
        if(window.confirm("Bạn có muốn xoá dữ liệu có NmpId="+nmpId)){
        onNmpDelete(nmpId);
    }
    }

    // sửa
    const nmpHandleEdit = (nmpObjTbName)=>{
        onNmpEdit(nmpObjTbName)
    }
  return (
    <div>
        <h2>Danh sách thông tin .....</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <tr>
                <th>nmpId</th>
                <th>nmpTbName</th>
                <th>nmpTbEmail</th>
                <th>nmpTbPhone</th>
                <th>nmpTbStatus</th>
                <th>NMP: Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {nmpElementTableName}
            </tbody>
        </table>
    </div>
  )
}
