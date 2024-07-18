import axios from '../nmp_apis/nmp-2210900141'
import React, { useEffect, useState } from 'react'

export default function NmpFormTableName({ renderNmpTableName,onNmpAdd }) {

    const [nmpId, setNmpId] = useState(renderNmpTableName.nmpId)
    const [nmpTbName, setNmpTbName] = useState(renderNmpTableName.nmpTbName)
    const [nmpTbEmail, setNmpTbEmail] = useState(renderNmpTableName.nmpTbEmail)
    const [nmpTbPhone, setNmpTbPhone] = useState(renderNmpTableName.nmpTbPhone)
    const [nmpTbStatus, setNmpTbStatus] = useState(renderNmpTableName.nmpTbStatus)

    useEffect(()=>{
        setNmpId(renderNmpTableName.nmpId)
        setNmpTbName(renderNmpTableName.nmpTbName)
        setNmpTbEmail(renderNmpTableName.nmpTbEmail)
        setNmpTbPhone(renderNmpTableName.nmpTbPhone)
        setNmpTbStatus(renderNmpTableName.nmpTbStatus)
    },[renderNmpTableName])

    const nmpHandleSubmit = async (nmpEvent) => {
        nmpEvent.preventDefault();
        const nmpObjectTableName = {
            "nmpTbName": nmpTbName ,
            "nmpTbEmail": nmpTbEmail,
            "nmpTbPhone": nmpTbPhone,
            "nmpTbStatus": nmpTbStatus,
            "nmpId": nmpId
        }
        console.log(nmpObjectTableName);
        //Thêm dữ liệu trong api
        await axios.put("nmpTableName/"+nmpObjectTableName.nmpId,nmpObjectTableName);
        onNmpAdd();
    }   

    return (
        <div>
            <h2>Form xử lý dữ liệu sửa thông tin </h2>
            <form>
                <div class="input-group mb-3">
                    <span className="input-group-text" id="nmpId">nmpId</span>
                    <input type="text" className="form-control" placeholder="nmpId"
                        name='nmpId'
                        value={nmpId}
                        onChange={(nmpEv) => setNmpId(nmpEv.target.value)}
                        aria-label="nmpId" aria-describedby="nmpId" />
                </div>
                <div class="input-group mb-3">
                    <span className="input-group-text" id="nmpTbName">nmpTbName</span>
                    <input type="text" className="form-control" placeholder="nmpTbName"
                        name='nmpTbName'
                        value={nmpTbName}
                        onChange={(nmpEv) => setNmpTbName(nmpEv.target.value)}
                        aria-label="nmpInmpTbNamed" aria-describedby="nmpTbName" />
                </div>
                <div class="input-group mb-3">
                    <span className="input-group-text" id="nmpTbEmail">nmpTbEmail</span>
                    <input type="text" className="form-control" placeholder="van.convet@gmail.com"
                        name='nmpTbEmail'
                        value={nmpTbEmail}
                        onChange={(nmpEv) => setNmpTbEmail(nmpEv.target.value)}
                        aria-label="nmpTbEmail" aria-describedby="nmpTbEmail" />
                </div>
                <div class="input-group mb-3">
                    <span className="input-group-text" id="nmpTbPhone">nmpTbPhone</span>
                    <input type="text" className="form-control" placeholder="0348124474"
                        name='nmpTbPhone'
                        value={nmpTbPhone}
                        onChange={(nmpEv) => setNmpTbPhone(nmpEv.target.value)}
                        aria-label="nmpTbPhone" aria-describedby="nmpTbPhone" />
                </div>
                <div class="input-group mb-3">
                    <span className="input-group-text" id="nmpTbStatus">nmpTbStatus</span>
                    <select id='nmpTbStatus' className='form-control'
                        name='nmpTbStatus'
                        value={nmpTbStatus}
                        onChange={(nmpEv) => setNmpTbStatus(nmpEv.target.value)}>
                        <option value={true}>Active</option>
                        <option value={false}>Non-Active</option>

                    </select>
                </div>
                <button className='btn btn-primary my-3' name='btnNmpSave' onClick={nmpHandleSubmit}>Nmp:Save</button>
            </form>
        </div>
    )
}
