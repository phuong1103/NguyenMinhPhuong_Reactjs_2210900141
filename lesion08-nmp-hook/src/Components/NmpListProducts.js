import React from 'react'

export default function NmpListProducts({renderNmpProducts}) {
    console.log("List Product:",renderNmpProducts);
    let nmpTong=0;
    let nmpElementProduct = renderNmpProducts.map((nmpProduct,index)=> {
       nmpTong += nmpProduct.nmp_quantity*nmpProduct.nmp_price;
        return(
            <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{nmpProduct.nmp_productId}</td>
                <td>{nmpProduct.nmp_productName}</td>
                <td>{nmpProduct.nmp_quantity}</td>
                <td>{nmpProduct.nmp_price}</td>
                <td>{nmpProduct.nmp_quantity*nmpProduct.nmp_price}</td>
                <td>
                    <button className='btn btn-outline-success mx-1'>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='btn btn-outline-danger mx-1'>
                    <i class="fa-solid fa-trash-arrow-up"></i>
                    </button>
                </td>
            </tr>
            </>
        )
        
    })
  return (
    <div>
      <h2>DANH SÁCH SẢN PHẨM</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {nmpElementProduct}
        </tbody>
        <tfood>
            <tr>
                <th colSpan={5} className='text-end'> Tổng cộng: </th>
                <th colSpan={2} className='text-start'>
                {nmpTong}
                </th>
            </tr>
        </tfood>
      </table>
    </div>
  )
}
