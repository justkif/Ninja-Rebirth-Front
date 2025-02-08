import { useEffect, useState } from "react";

export default function Get({ setNinja }) {
    const [text, setText] = useState('');

    useEffect(() => {
        if (text) {
            fetch(`http://localhost:8080/search?name=${text}`)
                .then((response) => response.json())
                .then((data) => {
                    setNinja(data);
                })
                .catch((error) => console.log(error));
        } else {
            fetch("http://localhost:8080/")
                .then((response) => response.json())
                .then((data) => {
                    setNinja(data);
                })
                .catch((error) => console.log(error));
        }}, [setNinja, text]);
        
    return (
        <form className="mt-2 flex justify-center">
            <input className="bg-white rounded-xl h-[30px] w-lg" onChange={(text) => setText(text.target.value)} placeholder="    Search for a ninja..."/>
        </form>
    )
}
