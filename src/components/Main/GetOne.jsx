import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GetOne() {
    const id = useParams();
    const [ninja, setNinja] = useState({}); 

    useEffect(() => {
        const GetOne = async () => {
            try {
                const response = await fetch(`http://localhost:8080/${id.id}`);
                setNinja(await response.json());
            } catch (error) {
                console.log(error);
            }
        }
        GetOne();
    }, []);

    return (
        <section className='mt-2 text-[20px] font-bold'>
            <li className='text-[50px] mb-2'>{ninja.name}</li>
            <li>Skill 1: {ninja.skill1}</li>
            <li>Skill 2: {ninja.skill2}</li>
            <li>Skill 3: {ninja.skill3}</li>
            <li>Skill 4: {ninja.skill4}</li>
        </section>
    );
}
