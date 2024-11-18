import { useEffect, useState } from "react"

export default function Dashboard(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/nuclearPlantInventory')
        .then((response) => response.json())
        .then((data) => setData(data.inventory))
        .then(console.log(data))
        .catch((error) => console.log("Erro as buscar os dados:", error));
    }, [])

    return (
        <main>
            {data.map((item) => (
                <h1 key={item.id} className="text-black">{item.name}</h1>
            ))}
        </main>
    )
}