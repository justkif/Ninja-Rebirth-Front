import { useState } from "react";
import { Link } from "react-router-dom";
import Ninja from "./Ninja"; 
import Get from "./Get";

export default function Main() {
    const [ninja, setNinja] = useState([]);
    return (
        <main>
            <Get setNinja={setNinja} />
            <div className="container mx-auto mt-4">
                <div className="grid grid-cols-5 gap-4">
                    {ninja.map((ninja) => (
                        <Link to={`/ninja/${ninja.name}`} key={ninja.id}> {}
                            <Ninja ninja={ninja} />
                        </Link>
                    ))}
                </div>
            </div>        
        </main>
    );
}
