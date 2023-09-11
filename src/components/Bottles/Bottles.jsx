import { useEffect, useState } from "react";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json");
            const data = await response.json();
            setBottles(data);
        })()
    }, [])

    return (
        <div>
            <h2>Total bottles: {bottles.length}</h2>
        </div>
    );
};

export default Bottles;