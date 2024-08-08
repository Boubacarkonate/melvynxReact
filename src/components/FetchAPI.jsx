import { useState, useEffect } from 'react';

function FetchAPI() {

  const [data, setData] = useState(null);

  // Utilisation de useEffect pour exécuter le fetch des données au montage du composant
  useEffect(() => {
    // Fonction asynchrone pour fetcher les données. "async" permet l'utilisation de "await" àl'intérieur de la fonction pour gérer les opérations asynchrones. 
    const fetchData = async () => {
      // Envoie une requête HTTP GET à l'URL spécifiée et la variable response contiendra la réponse de l'api. 
      //L'utilisation de await permet d'attendre que la requête soit complétée avant de passer à la ligne suivante. 
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      
      // Convertit la réponse en format JSON
      const result = await response.json();
      
      // met à jour l'état data avec le tableau complet des objets récupérés de l'API
      setData(result);
      
      // Optionnel : Récupérer des données/propriétés spécifiques (title et url) de l'index 0 du tableau de résultat
      /*
      const { title, url } = result[0];     
      setData({ title, url });
      */
      
      // Affiche un message dans la console pour indiquer que les données ont été récupérées
      console.log('Données récupérées');
    };

    // Appel de la fonction fetchData. useEffect est utilisé pour exécuter la fonction fetchData lorsque le composant est monté
    fetchData();
  }, []); // Le tableau de dépendances vide indique que l'effet s'exécute uniquement lors du montage du composant

  // Rendu du composant
  return (
    <div>
      <h1>Données récupérées:</h1>
      {/* Affiche les données récupérées dans un format JSON lisible :
      JSON.stringify(data, null, 2)
JSON.stringify : Cette méthode JavaScript convertit une valeur JavaScript (comme un objet ou un tableau) en une chaîne JSON.
data : C'est l'objet ou le tableau que vous voulez convertir en chaîne JSON. Dans ce cas, c'est l'état data qui contient les données récupérées de l'API.
null : Le deuxième argument de JSON.stringify est une fonction de remplacement (replacer) qui permet de modifier le processus de stringification. Ici, null signifie qu'aucune transformation spéciale n'est appliquée.
2 : Le troisième argument est le nombre d'espaces à utiliser comme indentation pour rendre la sortie JSON plus lisible. Ici, 2 signifie que chaque niveau de profondeur dans la structure JSON sera indenté de 2 espaces.
      */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchAPI;
