import React, { Component } from 'react';
import NMP_EventFrom1 from './components/NMP_EventFrom1';
import NMP_EventForm2 from './components/NMP_EventForm2';
import NMP_Eventform3 from './components/NMP_Eventform3';
import NMP_EventForm4 from './components/NMP_EventForm4';

class App extends Component {
    render() {
        return ( <
            div className = "container" >
            <
            h1 > Event Form Demo < /h1> <
            NMP_EventFrom1 / >
            <
            NMP_EventForm2 / >
            <
            NMP_Eventform3 / >
            <
            NMP_EventForm4 name = "Nguyễn Minh Phương" / >
            <
            /div>
        );
    }
}

export default App;