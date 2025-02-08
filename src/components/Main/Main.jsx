import { useState } from "react";
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
                        <Ninja key={ninja.id} ninja={ninja} />
                    ))}
                </div>
            </div>        
        </main>
    );
}
