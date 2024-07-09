import React from 'react'

export default function NmpListUsers({ renderNmpListUsers }) {
    console.log("NmpListUsers:", renderNmpListUsers);
    //hiển thị dữ liệu
    let nmpElementUsers = renderNmpListUsers.map((NmpUser, index) => {
        return (
            <>
                <tr>
                    <td>{NmpUser.id}</td>
                    <td>{NmpUser.UsersName}</td>
                    <td>{NmpUser.PassWord}</td>
                    <td>{NmpUser.Email}</td>
                    <td>{NmpUser.Phone}</td>
                    <td>
                    <button className='btn btn-outline-success mx-1'>
                    <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='btn btn-outline-danger mx-1' >
                    <i className="fa-solid fa-trash-arrow-up"></i>
                    </button>
                    </td>

                </tr>

            </>
        )
    })
    return (
        <div className='row'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>PassWord</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nmpElementUsers}
                </tbody>

            </table>
        </div>
    )
}
