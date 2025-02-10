import { useEffect, useState } from "react";

export default function Get({ setNinja }) {
    const [text, setText] = useState('');

    useEffect(() => {
        const Get = async () => {
            try {
                const response = await fetch(text ? `http://localhost:8080/search?name=${text}` : `http://localhost:8080`);

                if (response.status === 404) {
                    setNinja([]);
                } else {
                    setNinja(await response.json());
                }
            } catch (error) {
                console.log(error);
            }
        };
        Get();
    }, [setNinja, text]);
        
    return (
        <form className="mt-2 flex justify-center">
            <input className="bg-white rounded-xl h-[30px] w-lg" onChange={(text) => setText(text.target.value)} placeholder="    Search for a ninja..."/>
        </form>
    )
}
