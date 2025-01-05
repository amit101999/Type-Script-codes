import  { useContext } from 'react'
import { ThemeContext } from './USeContextHook'

const ContextBox = () => {

    const {theme ,   toggleTheme } = useContext(ThemeContext) 
    alert(theme);
  return (
      <div className='boxContainer'>
          <h1>Box 1</h1>
          <button onClick={toggleTheme}>change Theme</button>
    </div>
  )
}

export default ContextBox