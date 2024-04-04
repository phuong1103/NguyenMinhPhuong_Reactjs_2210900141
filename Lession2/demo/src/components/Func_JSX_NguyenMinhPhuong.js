import React from 'react'

export default function Func_JSX_NguyenMinhPhuong(props) {
    const users = {
        Name: "Nguyen Minh Phuong",
        Age: 20
    }
    return ( <
        div >
        <
        h2 > Function Components Demo < /h2> <
        h3 >
        Welcome to, { users.Name } - { users.Age } <
        /h3> <
        hr / >
        <
        h3 >
        Props:
        <
        br / > FullName: { props.fullName } <
        br / > Age: { props.Age } <
        /h3> <
        /div>
    )
}