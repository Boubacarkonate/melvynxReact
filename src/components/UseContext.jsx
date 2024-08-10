// Importation des icônes Minus et Plus de la bibliothèque lucide-react
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";

// Importation des hooks useState, createContext, et useContext de React
import { useState, createContext, useContext } from "react";

// Création d'un contexte pour partager l'état du compteur entre les composants
const CounterContext = createContext(null);

// Composant parent qui gère l'état du compteur et le partage via le contexte
const Counter = ({children}) => {
    // Déclaration de l'état 'count' avec une valeur initiale de 5
    const [count, setCount] = useState(0);

    // Le composant retourne un Provider qui partage l'état 'count' et la fonction 'setCount' avec ses enfants
    return (
        <CounterContext.Provider value={{
            count,  // Valeur actuelle du compteur
            setCount // Fonction pour mettre à jour la valeur du compteur
        }}>
            {children}  {/*fonctionnalité react permettant de mettre des composants, html, entre les balises => Rend les composants enfants qui peuvent accéder au contexte*/}
        </CounterContext.Provider>
    )
}

// Composant principal qui regroupe les boutons d'incrémentation, de décrémentation et l'affichage du compteur
const UseContext = () => {
    return (
        <Counter>  {/* Encapsule les composants enfants avec le contexte */}
            <div className="flex items-center gap-4">
                <Decrement />  {/* Bouton pour décrémenter le compteur */}
                <CounterDisplay />  {/* Affiche la valeur actuelle du compteur */}
                <Increment />  {/* Bouton pour incrémenter le compteur */}
            </div>
        </Counter>
    )
}

// Composant pour afficher la valeur actuelle du compteur
const CounterDisplay = () => {
    // Utilisation du hook useContext pour accéder au contexte 'CounterContext'
    const context = useContext(CounterContext);
    console.log(context);  // Affiche le contexte dans la console pour le débogage

    // Affiche la valeur actuelle du compteur dans un paragraphe stylisé
    return (
        <p className="border border-neutral bg-base-300 p-4 w-fit rounded-md font-mono">
            {JSON.stringify(context.count, null, 2)}  {/* Convertit la valeur du compteur en chaîne JSON pour l'affichage */}
        </p>
    )
}

// Composant pour le bouton d'incrémentation
const Increment = () => {	
    // Utilisation du hook useContext pour accéder au contexte 'CounterContext'
    const context = useContext(CounterContext);

    // Retourne un bouton qui, lorsqu'il est cliqué, incrémente la valeur du compteur de 1
    return (
        <button className="btn btn-primary" onClick={() => {context.setCount(c => c + 1)}}>
            <Plus size={20}/>  {/* Affiche l'icône Plus */}
        </button>
    )
}

// Composant pour le bouton de décrémentation
const Decrement = () => {	
    // Utilisation du hook useContext pour accéder au contexte 'CounterContext'
    const context = useContext(CounterContext);

    // Retourne un bouton qui, lorsqu'il est cliqué, décrémente la valeur du compteur de 1
    return (
        <button className="btn btn-error" onClick={() => {context.setCount(c => c - 1)}}>
            <Minus size={20}/>  {/* Affiche l'icône Minus */}
        </button>
    )
}

// Exportation du composant principal pour pouvoir l'utiliser dans d'autres parties de l'application
export default UseContext
