import { useContext } from "react"
import ThemContext from "./ThemContext"


const Button = () => {
    const theme = useContext(ThemContext)
  return (
    <button style={{ backgroundColor: theme === "dark" ? "#333" : "#FFF", color: theme === "dark" ? "#FFF" : "#000" }}>
    Button Component
  </button>
  )
}

export default Button
