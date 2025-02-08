import { useEffect } from "react";

export default function GetAll({ setNinja }) {
    useEffect(() => {
        fetch("http://localhost:8080/")
            .then((response) => response.json())
            .then((data) => {
                setNinja(data);
            })
            .catch((error) => console.log(error));
    }, [setNinja]);

    return null;
}
