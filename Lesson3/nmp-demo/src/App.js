import './App.css';
import NMP_ClassComp from './components/NMP_ClassComp';
import NMP_FuncDemo from './components/NMP_FuncDemo';

function App() {
    // khai báo biến, đối tượng
    const users = {
            userName: "K22CNTT4",
            password: "123456@",
            fistName: "Nguyễn Minh ",
            lastName: "Phương"
        }
        //Khai báo đối tượng hàm 
    function formatName(users) {
        return <h2 > Xin chào, { users.fistName } { users.lastName } < /h2>

    }
    return ( <
        div className = "App" > { /*Biểu thức jsx*/ } <
        div >
        <
        p > FullName: { users.fistName } { users.lastName } < /p> { formatName(users) } <
        /div> { /*sử dụng function components*/ } <
        div >
        <
        NMP_FuncDemo / > { /*Sử dụng Func-Comp có props*/ } <
        NMP_FuncDemo userName = "NMP"
        fullName = "Nguyễn Minh Phương"
        age = "20" / >
        <
        /div> { /* Sử dụng class components */ } { /*Dùng không sử dụng props */ } <
        NMP_ClassComp company = "Fit-NTU - K22CNTT4"
        course = "Reactjs" / >
        <
        /div>
    );
}

export default App;