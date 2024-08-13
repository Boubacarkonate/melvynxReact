import Hearder from "./Hearder";
import { ThemeProvider } from "./ThemeContext";
import Minuteur from "../Minuteur"


const ThemeComponent = () => {
  return (
   <>
   
    <ThemeProvider>
      <h1>theme 1</h1>
      <Hearder />
    </ThemeProvider>
    <ThemeProvider>
      <h2>theme 2</h2>
      <Hearder />
    </ThemeProvider>
  </>
    
  )
}

export default ThemeComponent
