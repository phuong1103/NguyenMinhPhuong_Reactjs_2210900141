import logo from './logo.svg';
import './App.css';
import Func_JSX_NguyenMinhPhuong from './components/Func_JSX_NguyenMinhPhuong';
import Class_NguyenMinhPhuong from './components/Class_NguyenMinhPhuong';

function App() {
    return ( <
        div className = "App" >
        <
        h1 > Demo JSX < /h1> { /* Function Components Demo */ } <
        Func_JSX_NguyenMinhPhuong / >
        <
        Func_JSX_NguyenMinhPhuong fullName = "Nguyen Minh Phuong "
        Age = "20" / >


        <
        Class_NguyenMinhPhuong / >
        <
        hr / > < Class_NguyenMinhPhuong info = "Hoc ReactJs"
        time = "12" / >

        <
        /div>
    );
}

export default App;