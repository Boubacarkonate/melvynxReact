import { useEffect } from "react"; // Importation du hook useEffect
import { useState } from "react"; // Importation du hook useState

const Minuteur = () => {
    // Déclaration des états
    const [count, setCount] = useState(0); // État pour le compteur
    const [isRunning, setIsRunning] = useState(false); // État pour suivre si le minuteur est en cours de fonctionnement

    useEffect(() => {
        // Effet secondaire pour gérer l'intervalle du minuteur
        let decompte;
        if (isRunning) {
            // Si le minuteur est en cours d'exécution
            decompte = setInterval(() => {
                setCount(prevCount => prevCount + 1); // Incrémente le compteur toutes les secondes
            }, 1000);
        }

        return () => {
            clearInterval(decompte); // Nettoyage de l'intervalle lorsque le composant est démonté ou lorsque isRunning change
        };
    }, [isRunning]); // L'effet est déclenché à chaque changement de isRunning

    // Fonction pour démarrer le minuteur
    const startTimer = () => {
        setIsRunning(true);  //le useState devient true
    };

    // Fonction pour arrêter le minuteur
    const stopTimer = () => {
        setIsRunning(false);
    };

    // Fonction pour réinitialiser le minuteur
    const resetTimer = () => {
        setIsRunning(false); // le useState est à false
        setCount(0); // Réinitialise le compteur à 0
    };

    return (
        <div className="flex flex-col gap-2">
            <button className="btn btn-success" onClick={startTimer}>START</button>
             <button className="btn btn-error" onClick={stopTimer}>STOP</button>
           <button className="btn btn-warning" onClick={resetTimer}>RESET</button>
            <p className="text-ellipsis text-4xl">{count}</p>
        </div>
    );
};

export default Minuteur;