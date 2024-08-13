import { useContext } from 'react'
import Navbar from './Navbar'
import ThemeContext from './ThemeContext'



const Hearder = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme === "dark" ? "#333" : "#FFF", color: theme === "dark" ? "#FFF" : "#000" }}>
      <h1>HEADER</h1>
     <Navbar />
    </div>
  )
}

export default Hearder
