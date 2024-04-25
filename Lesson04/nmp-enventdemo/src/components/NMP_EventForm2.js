import React from 'react'

export default function NMP_EventForm2() {
    //Dịnh nghĩa các hàm xử lí sự kiện 
    const eventHandleClick1 = (content) => {
        console.log('===========================');
        console.log(content);
        console.log('===========================');
    }
    return ( <
        div className = 'alert alert-success' >
        <
        h2 > Event Demo - Function Component < /h2> <
        button onClick = { eventHandleClick1("Nguyễn Minh Phương") } > Gọi khi render < /button> <
        button onClick = {
            () => eventHandleClick1("K22CNTT4-REACTJS") } > Gọi khi click < /button> <
        /div>
    )
}