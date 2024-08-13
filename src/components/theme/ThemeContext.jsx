import { useState } from "react"; 
import { createContext } from "react";

// Création du contexte pour le thème, avec 'light' comme valeur par défaut
export const ThemeContext = createContext('light');

export function ThemeProvider ({children}) {
    // Déclaration de l'état 'theme' avec 'light' comme valeur initiale
    const [theme, setTheme] = useState('light');

    // Fonction pour basculer entre le thème clair et sombre
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        // Fournisseur de contexte pour le thème
        // Tous les composants enfants peuvent accéder à la valeur du thème actuel via `ThemeContext`
        <ThemeContext.Provider value={theme}>
            {/* Bouton pour changer le thème. Appelle `toggleTheme` lorsqu'il est cliqué */}
            <button onClick={toggleTheme}>Changer thème</button>

            {/* Rendu des composants enfants, qui auront accès au contexte du thème */}
            {children}
        </ThemeContext.Provider>
    );
}

// Exportation par défaut du contexte pour une utilisation dans d'autres fichiers
export default ThemeContext;
