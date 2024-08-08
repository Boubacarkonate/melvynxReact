import useSWR from 'swr';

// Définition d'une fonction fetcher pour récupérer les données
const fetcher = (...args) => fetch(...args).then(res => res.json());

// Définition du composant FetchAPI_library
const FetchAPI_library = () => {
    // Utilisation de useSWR pour récupérer les données de l'API
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher);

    // Gestion des états de chargement et d'erreur
    if (error) return <div>échec du chargement</div>;
    if (isLoading) return <span className="loading loading-bars loading-lg"></span>;

    // Affichage des données sous forme de liste
    return (
        <div className='flex flex-col gap-4'>

            {/* Commenté pour affichage sous forme de liste json */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

            <ul>
                {data.map((d) => (
                    <li key={d.id}> {/* Chaque élément de la liste est identifié par d.id */}
                        <ul>
                            {Object.entries(d).map(([key, value]) => (
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
};

export default FetchAPI_library;
