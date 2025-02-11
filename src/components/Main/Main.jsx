import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import GetOne from "./GetOne";
import Get from "./Get";

export default function Main() {
    const [ninja, setNinja] = useState([]);
    return (
        <main>
            <Routes> 
                <Route path="/" element={<Get ninja={ninja} setNinja={setNinja} />} />                
                <Route path="/ninja/:id" element={<GetOne />} />
            </Routes>
        </main>
    );
}
