import React, { useContext, useState } from 'react'
import DthUseContext1 from './DthUseContext1';

export const ThemeContext = createContext(); //Tạo ngữ cảnh để chia sẻ

export default function DthUseContext() {
    //state
    const [theme, setTheme] = useState('red');

    const DthHandleChange = ()=>{
      setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value={theme}>
        <div>
            <h2>Dmoe useContext</h2>
            <DthUseContext1/>
            <button onClick={DthHandleChange}>Change bgColor</button>
        </div>
    </ThemeContext.Provider>
  )
}
