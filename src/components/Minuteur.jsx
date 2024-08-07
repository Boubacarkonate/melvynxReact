import { useEffect } from "react"; // Importation du hook useEffect
import { useState } from "react"; // Importation du hook useState

const Minuteur = () => {
    // Déclaration des états
    const [count, setCount] = useState(0); // État pour le compteur
    const [isRunning, setIsRunning] = useState(false); // État pour suivre si le minuteur est en cours de fonctionnement

    const inputTime = (e) =>{
        const valueInput = Number(e.target.value);
        // const valueInput = parseInt(e.target.value, 10); // Conversion de l'entrée en nombre entier
        setCount(valueInput); // Mise à jour de l'état count avec la valeur de l'entrée

        
    }

    useEffect(() => {
        console.log('Composant monté');
        // Effet secondaire/side effect pour gérer l'intervalle du minuteur
        let decompte; //déclaration d'une variable pou une pour dans tout le useEffect
        if (isRunning) {
            // Si le minuteur est en cours d'exécution donc true
            decompte = setInterval(() => {
                console.log('Mise à jour du compteur');
                setCount(prevCount => prevCount - 1); // Incrémente le compteur toutes les secondes
            }, 1000); //toutes les 1 seconde
        }

        return () => {
            console.log('Composant démonté');
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
            <input type="number" className="input input-bordered input-primary w-full max-w-xs" onChange={inputTime}/>
            <button className="btn btn-success" onClick={startTimer}>START</button>
             <button className="btn btn-error" onClick={stopTimer}>STOP</button>
           <button className="btn btn-warning" onClick={resetTimer}>RESET</button>
            <p className="text-ellipsis text-4xl">{count}</p>
        </div>
    );
};

export default Minuteur;