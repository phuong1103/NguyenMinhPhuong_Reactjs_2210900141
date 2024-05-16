import React, { Component } from 'react'

export default class NmpListProducts extends Component {

  render() {
    let{renderProducts}= this.props;
    console.log("Products;",renderProducts);
    
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <>
            <tr key={index}>
                    <td>{item.nmp_ProductId}</td>
                    <td>{item.nmp_ProductName}</td>
                    <td>{item.nmp_quantity}</td>
                    {/* <td>{item.status===1?'Active':'NonActive'}</td> */}
                  <td>{item.nmp_price}</td>
                </tr>
            </>
        )
    })
    return (
      <div>
         <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Products ID</th>
                    <th>Products Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    
                </tr>
            </thead>
            <tbody>
                {elementProduct}
            </tbody>
            </table>
      </div>
    )
  }
}
