import React, { Component } from 'react'

export default class NmpProductAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            status:0
        }
    }

    nmpHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    //submit form
    nmpHandleSubmit = (ev)=>{
        ev.preventDefault();
        this.props.onSubmit(this.state)
    }
  render() {
    return (
      <div>
        <h2> Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
           <div className="input-group mb-3">
            <span className="input-group-text" id="id">
                 Products ID
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name='id'
                value={this.state.id}
                onChange={this.nmpHandleChange}
            />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Products Name
            </span>
            <input
                type="text"
                className="form-control"
                name='title'
                value={this.state.title}
                onChange={this.nmpHandleChange}
            />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                Quantity
            </span>
            <input
                type="text"
                className="form-control"
                name='status'
                value={this.state.status}
                onChange={this.nmpHandleChange}
            />
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Price
            </span>
            <input
                type="text"
                className="form-control"
                name='price'
                value={this.state.title}
                onChange={this.nmpHandleChange}
            />
            </div>
            </div>
            <button className='btn btn-success' onClick={this.nmpHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    )
  }
}
