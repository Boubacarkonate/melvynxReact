import { useContext } from "react"
import ThemContext from "./ThemeContext"


const Button = () => {
    const theme = useContext(ThemContext)
  return (
    <div >
      <h1>Bouton</h1>
    <p>The current theme is: {theme}</p>
    </div>

  )
}

export default Button
