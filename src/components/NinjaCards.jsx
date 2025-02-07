import { useState, useEffect } from "react";
import Ninja from "./Ninja";

export default function NinjaCards() {
  const [ninja, setNinja] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNinja(data);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-5 gap-4">
        {ninja.map(ninja => (
          <Ninja key={ninja.id} ninja={ninja}/>
        ))}
      </div>
    </div>
  );
}
