import { useEffect } from "react";
import { useState } from "react";

function FetchAPI () {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fecthData = async () => {
            const reponse = await fetch('https:jsonplaceholder.typicode.com/photos')
            const result = await reponse.json();
            setData(result);
            console.log('datas récupérées');
            
        };

        fecthData();
    }, []);
    return(
        <div>
            <h1>Données récupérées:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default FetchAPI;