import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GetOne({ setPassNinja }) {
    const id = useParams();
    const [ninja, setNinja] = useState({}); 

    useEffect(() => {
        const GetOne = async () => {
            try {
                const response = await fetch(`https://ninja-rebirth.onrender.com/${id.id}`);
                const data = await response.json();
                setNinja(data);
                setPassNinja(data);
            } catch (error) {
                console.log(error);
            }
        }
        GetOne();
    }, [setPassNinja]);

    return (
        <section className='mt-2 text-[20px] font-bold'>
            <ul className='text-[50px] mb-2'>{ninja.name}</ul>
            <ul>Skill 1: {ninja.skill1}</ul>
            <ul>Skill 2: {ninja.skill2}</ul>
            <ul>Skill 3: {ninja.skill3}</ul>
            <ul>Skill 4: {ninja.skill4}</ul>
        </section>
    );
}
