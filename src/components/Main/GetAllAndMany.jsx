import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Ninja from './Ninja';

export default function GetAllAndMany({ setNinja, ninja }) {
    const [text, setText] = useState('');

    useEffect(() => {
        const Get = async () => {
            try {
                const response = await fetch(text ? `https://ninja-rebirth.onrender.com/search?name=${text}` : `https://ninja-rebirth.onrender.com`);

                if (response.ok) {
                    setNinja(await response.json());
                } else {
                    setNinja([]);
                }
            } catch (error) {
                console.log(error);
            }
        };
        Get();
    }, [setNinja, text]);
        
    return (
        <section>
            <form className='mt-2 flex justify-center'>
                <input className='bg-white rounded-xl h-[30px] w-lg' onChange={(text) => setText(text.target.value)} placeholder='    Search for a ninja...'/>
            </form>
            <div className='container mx-auto mt-4'>
                <div className='grid grid-cols-5 gap-4'>
                    {ninja.map((ninja) => (
                        <Link to={`/ninja/${ninja.id}`} key={ninja.id}>
                            <Ninja ninja={ninja} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
