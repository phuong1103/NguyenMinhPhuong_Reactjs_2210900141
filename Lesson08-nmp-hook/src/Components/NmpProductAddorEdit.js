import React, { useState } from 'react'

export default function NmpProductAddorEdit(nmpOnSubmit) {
    const[nmp_productId, setNmp_producId] = useState('');
    const[nmp_productName, setNmp_producName] = useState('');
    const[nmp_quantity, setNmp_quantity] = useState(0);
    const[nmp_price, setNmp_price] = useState(0);


    const nmpHandleSubmit = (nmpEvent) => {
        nmpEvent.preventDefault();
        let nmpProduct = {
            nmp_productId: nmp_productId,
            nmp_productName: nmp_productName,
            nmp_quantity: nmp_quantity,
            nmp_price: nmp_price,
        };
        
      
        nmpOnSubmit(nmpProduct);
    };
    
  return (
    <div className='col-md-6'>
        <h2>Thêm mới / Sửa đổi sản phẩm</h2>
    <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
        <input type="text" className="form-control" placeholder="Mã sản phẩm"
                name='nmp_productId' value={nmp_productId}
                onChange={(ev)=>setNmp_producId(ev.target.value)}
           aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Tên sản phẩm</span>
        <input type="text" className="form-control" placeholder="Tên sản phẩm"
             name='nmp_productName' value={nmp_productName}
             onChange={(ev)=>setNmp_producName(ev.target.value)}
           aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Số lượn sản phẩm</span>
        <input type="number" className="form-control" placeholder="Số lượng sản phẩm"
             name='nmp_quantity' value={nmp_quantity}
             onChange={(ev)=>setNmp_quantity(ev.target.value)}
           aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Đơn giá</span>
        <input type="number" className="form-control" placeholder="Đơn giá"
             name='nmp_price' value={nmp_price}
             onChange={(ev)=>setNmp_price(ev.target.value)}
           aria-describedby="basic-addon1"/>
    </div>
    <button className='btn btn-primary' name='nmpBtnAction'
    onClick={nmpHandleSubmit}
    >Thêm mới</button>
    </div>
  )
}
