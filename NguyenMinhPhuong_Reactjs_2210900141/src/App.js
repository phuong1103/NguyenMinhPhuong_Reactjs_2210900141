import logo from './logophuong.png';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >

        <
        /header> <
        h1 > Chào mừng đến với tiểu sử của mình < /h1> <
        h3 > Họ và Tên: "Nguyễn Minh Phương" < /h3> <
        h4 > MSV: 2210900141 < /h4> <
        p > Email: "nminhphuong685@gmail.com"
        Phone: "0348124474" < /p> <
        p > Company: "NTU Univescity" < /p> <
        /div>
    );
}

export default App;