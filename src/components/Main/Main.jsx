import { useState } from "react";
import Ninja from "./Ninja"; 
import GetAll from "./GetAll";

export default function Main() {
    const [ninja, setNinja] = useState([]);
    return (
        <main>
            <GetAll setNinja={setNinja} />
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
