import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function UpdateOne({ passNinja }) {
    const [updateSucceed, setupdateSucceed] = useState('');
    const navigate = useNavigate();
    const id = useParams();
    const [updateOne, setupdateOne] = useState({
        name: `${passNinja.name}`,
        skill1: `${passNinja.skill1}`,
        skill2: `${passNinja.skill2}`,
        skill3: `${passNinja.skill3}`,
        skill4: `${passNinja.skill4}`
    });
    const handleData = (event) => {
        const { name, value } = event.target;
        setupdateOne((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleUpdate = async (event) => {
        event.preventDefault();

        const payload = {
            name: updateOne.name,
            skill1: updateOne.skill1,
            skill2: updateOne.skill2,
            skill3: updateOne.skill3,
            skill4: updateOne.skill4
        }

        try {
            const token = localStorage.getItem('Token');
            const response = await fetch(`http://localhost:8080/${id.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': `${token}`
                },
                body: JSON.stringify(payload)
            });
            navigate(`/`);                         
        } catch (error) {
            setupdateSucceed('Update ninja failed, check if user logged in or not');
            window.scrollTo({ top: 0 });
            console.error(error);
        }
    }
    return (
        <div className='max-w-lg mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold mb-6 text-center'>Update Ninja: {passNinja.name}</h2>
            <form onSubmit={handleUpdate}>
            {updateSucceed && (
                <div className='text-red-500 text-l mt-2 font-semibold'>
                    {updateSucceed}
                </div>
            )}
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                type='text'
                id='name'
                name='name'
                value={updateOne.name}
                onChange={handleData}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Skill 1</label>
                <textarea
                id='skill1'
                name='skill1'
                value={updateOne.skill1}
                onChange={handleData}
                rows='4'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Skill 2</label>
                <textarea
                id='skill2'
                name='skill2'
                value={updateOne.skill2}
                onChange={handleData}
                rows='4'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Skill 3</label>
                <textarea
                id='skill3'
                name='skill3'
                value={updateOne.skill3}
                onChange={handleData}
                rows='4'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Skill 4</label>
                <textarea
                id='skill4'
                name='skill4'
                value={updateOne.skill4}
                onChange={handleData}
                rows='4'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                required
                />
            </div>
            <div className='flex justify-center'>
                <button
                type='submit'
                className='px-4 py-2 bg-gradient-to-b font-semibold from-orange-400 to-yellow-30 text-black rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                >
                Update
                </button>
            </div>
            </form>
        </div>
    );
}
