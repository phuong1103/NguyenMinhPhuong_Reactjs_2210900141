import React, { Component } from 'react'
import NmpListProducts from './components/NmpListProducts';
import NmpProductAdd from './components/NmpProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
       nmp_Products : [
        {
            nmp_ProductId:"2210900141" ,    
            nmp_ProductName:"Nguyễn Minh Phương"  ,     
            nmp_quantity:15  ,      
            nmp_price:1000
        },
        {
             nmp_ProductId:"P002" ,
              nmp_ProductName:"IPhone 12" ,
              nmp_quantity:20 ,
              nmp_price:1250
        },
        {
          nmp_ProductId:"P003" ,
            nmp_ProductName:"IPhone 13" ,
            nmp_quantity:10 ,
            nmp_price:1500 
        },
    ]

    }
  }
  nmpHandleSubmit = (param)=>{
    console.log("App:",param);
    // Thêm vào mảng dữ liệu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div>
        <h2>Nguyễn Minh Phương - 2210900141</h2>
        <NmpListProducts renderProducts={this.state.nmp_Products}/>
        <hr/>
        <NmpProductAdd onSubmit = {this.nmpHandleSubmit}/>
        </div>
    )
  }
}
