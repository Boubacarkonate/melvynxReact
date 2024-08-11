import { useState } from "react";
import Hearder from "./Hearder";
import ThemContext from "./ThemContext";


const ThemeComponent = () => {
    const [theme, setTheme] = useState('light'); // Gestion du thème (clair par défaut)
  return (
    <ThemContext.Provider value={theme}>
      <Hearder />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemContext.Provider>
  )
}

export default ThemeComponent
