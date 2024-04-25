import React, { Component } from 'react';
//Xử lí sự kiện với props,state
class NMP_Eventform3 extends Component {
    constructor(props) {
        super(props);
        //tạo đối tượng thông qua state
        this.state = {
            name: "Nguyễn Minh Phương",
            job: "Students"
        }
    }

    //Hàm sử lí sự kiện
    handleChangename = (event) => {
        this.setState({
            name: "Nguyễn Văn A"
        })
    }
    handleChangejob = () => {
        this.setState({
            job: "Công nghệ thông tin"
        })
    }
    render() {
        return ( <
            div className = 'alert alert-primary' >
            <
            h2 > Thay đổi dữ liệu trong state < /h2> <
            p > Dữ liệu: { this.state.name } - { this.state.job } < /p> <
            button onClick = { this.handleChangename } > Thay đổi Name < /button> <
            button onClick = { this.handleChangejob } > Thay đổi job < /button> <
            /div>
        );
    }
}

export default NMP_Eventform3;