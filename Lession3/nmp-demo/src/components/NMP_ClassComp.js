import React, { Component } from 'react';

class NMP_ClassComp extends Component {
    constructor(props) {
            super(props);
            //tạo đối tượng dữ liệu
            this.state = {
                fistName: "Nguyễn",
                lastName: "Phương",
                userName: "K22cntt4",
            }
        }
        // arrow function
    Member = (props) => {
        return ( <
            div ClassName = ' alert alert-success' >
            <
            h3 > Xin chào: { props.fullName } - Bạn đã { props.age }
            tuổi. < /h3>

            <
            /div>
        );
    }
    listMember = () => {
        return ( <
            >
            <
            this.Member fullName = "Nguyễn Văn A"
            age = "20" / >
            <
            this.Member fullName = "Nguyễn Văn B"
            age = "21" / >
            <
            this.Member fullName = "Nguyễn Văn C"
            age = "22" / >
            <
            this.Member fullName = "Nguyễn Văn D"
            age = "23" / >
            <
            />
        )
    }
    render() {
        return ( <
            div className = 'alert alert-danger' >
            <
            h2 > Class Components Demo < /h2> <
            hr / >
            <
            h3 > Dữ liệu trong state < /h3> <
            h3 > Xin chào: { this.state.fistName } { this.state.lastName } < /h3> <
            hr / >
            <
            h3 > Dữ liệu từ props < /h3> <
            p > Company: { this.props.company } < /p> <
            p > Course: { this.props.course } < /p> <
            hr / >
            <
            this.Member fullName = "Nguyễn Minh Phương"
            age = "20" / >
            <
            hr / > { /*this.listMember*/ } <
            this.listMember / >
            <
            /div>
        );
    }
}

export default NMP_ClassComp;