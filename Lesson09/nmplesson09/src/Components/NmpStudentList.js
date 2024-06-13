import React from 'react'

export default function NmpStudentList({ renderNmpStudentList }) {
    console.log("Data:", renderNmpStudentList);
    let NmpElement = renderNmpStudentList.map((NmpStudents, index) => {
        return (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{NmpStudents.NmpId}</td>
                <td>{NmpStudents.NmpName}</td>
                <td>{NmpStudents.NmpAge}</td>
                <td>{NmpStudents.NmpPhone}</td>
                <td>{NmpStudents.NmpEmail}</td>
                <td>{NmpStudents.NmpStatus}</td>
                <td>
                <button className='btn btn-outline-success mx-1'>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='btn btn-outline-danger mx-1'>
                    <i class="fa-solid fa-trash-arrow-up"></i>
                    </button>
                </td>
            </tr>
        )
    });

    return (
        <div>
            <h2> Danh sách sinh viên </h2>
            <table className=" table table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Tuổi </th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>

                    </tr>
                </thead>
                <tbody>

                {NmpElement}

                </tbody>
            </table>

        </div>
    )
}
