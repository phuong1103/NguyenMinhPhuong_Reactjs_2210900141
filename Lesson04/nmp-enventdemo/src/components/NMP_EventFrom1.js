import React, { Component } from 'react';

class NMP_EventFrom1 extends Component {

    //Hàm xử lí sự kiện
    eventHandleClick1 = () => {
        alert("event handle 1 ");
    }
    eventHandleClick2 = () => {
        alert("event Click 2 ");
    }
    render() {
        return ( <
            div className = 'alert alert-danger' >
            <
            h2 > Event handle < /h2> { /*Gọi hàm xử lí sự kiện khi render */ } { /* <button onClick={this.eventHandleClick1()}> Click 1</button> */ } { /* {gọi hàm xử lí hi click} */ } <
            button onClick = { this.eventHandleClick2 } > Click 2 < /button> <
            /div>
        );
    }
}

export default NMP_EventFrom1;