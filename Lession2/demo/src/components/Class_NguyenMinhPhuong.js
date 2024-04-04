import React, { Component } from 'react'

export default class Class_NguyenMinhPhuong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Nguyen Minh Phuong",
            class: "K22CNTT4"
        }
    }
    users = {
            Name: "Nguyen Minh Phuong",
            Age: 20
        }
        //ham xuw li su kien
    handleChange = (event) => {
        this.setState({
            fullName: "Nguyen Van A"
        })
    }
    render() {
        return ( <
            div >
            <
            h2 > Class components demo < /h2> { this.users.Name } - { this.users.Age } <
            hr / >
            <
            h3 >
            info: { this.props.info } <
            h3 > time: { this.props.time } < /h3> <
            /h3> <
            hr / >
            <
            h3 >
            state:
            FullName: { this.state.fullName } -
            class: { this.state.class } < /h3> <
            button onClick = { this.handleChange } > Change name < /button> <
            /div>
        )
    }
}