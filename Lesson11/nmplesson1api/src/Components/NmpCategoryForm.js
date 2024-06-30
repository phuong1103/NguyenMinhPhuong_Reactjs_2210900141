import React, { useEffect, useState } from 'react'
import axios from '../api/NmpApi';
export default function NmpCategoryForm({ onCloseForm, onCategorySubmit, renderNmpCategory }) {
    // state
    const [NmpId, setNmpId] = useState("");
    const [nmpCategoryName, setNmpCategoryName] = useState("");
    const [nmpCategoryStatus, setnmpCategoryStatus] = useState(true);


    useEffect(() => {
        setNmpId(renderNmpCategory.NmpId);
        setNmpCategoryName(renderNmpCategory.nmpCategoryName);
        setNmpId(renderNmpCategory.nmpCategoryStatus);
    });

    const nmpHandleClose = () => {
        onCloseForm(false);
    }

    const nmpHandleSubmit = async (event) => {
        event.preventDefault();

        if (NmpId === 0) {//them
            let nmpCategory = {
                NmpId: 0,
                NmpCategoryName: nmpCategoryName,
                NmpCategoryStatus: nmpCategoryStatus
            }
            console.log("NmpCategory", nmpCategory);
            await axios.post("NmpCategory", nmpCategory);
            onCategorySubmit(nmpCategory);
        } else {//sua
            let nmpCategory = {
                NmpId: NmpId,
                NmpCategoryName: nmpCategoryName,
                NmpCategoryStatus: nmpCategoryStatus
            }
            console.log("NmpCategory", nmpCategory);
            await axios.put("NmpCategory", nmpCategory);
            onCategorySubmit(nmpCategory);
        }



    }
    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input type="text" className="form-control"
                        name='nmpCategoryName'
                        value={nmpCategoryName}
                        onChange={(ev) => setNmpCategoryName(ev.target.value)}
                        placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                    <select className='form-control'
                        name='nmpCategoryStatus'
                        value={nmpCategoryStatus}>
                        onChange={(ev) => setnmpCategoryStatus(ev.target.value)}
                        <option value={true}>Hiển thị</option>
                        <option value={false}>Tạm khóa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={nmpHandleSubmit}>Ghi lại</button>
                <button className='btn btn-success' onClick={nmpHandleClose}>Đóng</button>
            </form>
        </div>
    )
}
