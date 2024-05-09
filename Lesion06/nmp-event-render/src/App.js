import React, { Component } from 'react'
import Nmp_Productlist from './component/Nmp_Productlist';
import NmpProductAdd from './component/NmpProductAdd';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {title: 'Nguyễn Minh Phương', id:2210900141 , status:1},
        {title: 'Cabbage', id:1, status:1},
        {title: 'Garlic', id:2, status:0},
        {title: 'Apple', id:3, status:1},
        {title: 'Samsung', id:4, status:0},
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
      <div className='container border mt-5'>
        <h1>Nguyễn Minh Phương Event Form - Render Data</h1>
        <hr/>
       <Nmp_Productlist renderProducts={this.state.products}/>
       <hr/>
       <NmpProductAdd onSubmit = {this.nmpHandleSubmit}/>
      </div>
    )
  }
}
