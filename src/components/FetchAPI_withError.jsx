import { useState, useEffect } from 'react';

const FetchAPI_withError = () => {
   // État pour les données (liste d'utilisateurs), l'état de chargement et les erreurs
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
 
   // Utilisation de useEffect pour fetcher les données au montage du composant
   useEffect(() => {
     // Fonction asynchrone pour fetcher les données
     const fetchData = async () => {
       try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users');
         if (!response.ok) {
           throw new Error('Erreur lors de la récupération des données');
         }
         const result = await response.json();
         setUsers(result); // Mettre à jour l'état avec la liste des utilisateurs
       } catch (error) {
         setError(error); // Gérer les erreurs
       } finally {
         setLoading(false); // Mettre à jour l'état de chargement
       }
     };
 
     fetchData();
   }, []); // Tableau de dépendances vide pour exécuter l'effet une seule fois
 
   // Affichage des données, du chargement et des erreurs
   if (loading) return <p>Chargement...</p>;
   if (error) return <p>Erreur: {error.message}</p>;
 
   return (
    <div>
      <h1>Liste des utilisateurs :</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {/* Chaque utilisateur est rendu dans un <li> */}
            <ul>
              {Object.entries(user).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value, null, 2) : value}
                </li>
              ))}
            </ul>
            <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
 }
 

export default FetchAPI_withError