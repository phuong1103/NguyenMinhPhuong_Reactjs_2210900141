import React, { createContext, useContext, useState } from 'react'
import NmpUsseContext1 from './NmpUsseContext1';
export const ThemeContext = createContext();//TTajo ngữ cảnh để chia sẻ

export default function NmpUseContex() {
   //state
   const [theme, setTheme] = useState('red');

// Hàm thay đổi theme
const nmpHandleChange = () => {
  setTheme(theme === 'red' ? 'blue' : 'red');
}
    return (
        <ThemeContext.Provider value={theme} >
        <div className='alert'>
             <h2>Demo UseContext</h2> 
             <NmpUsseContext1/>
             <button onClick={nmpHandleChange}>Change bgColor</button>
        </div>
        </ThemeContext.Provider>
  )
}
