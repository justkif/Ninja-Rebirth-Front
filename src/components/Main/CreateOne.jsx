import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateOne() {
    const [createSucceed, setCreateSucceed] = useState('');
    const navigate = useNavigate();
    const [createOne, setCreateOne] = useState({
        name: '',
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: ''
    });
    const handleData = (event) => {
        const { name, value } = event.target;
        setCreateOne((prevData) => ({
          ...prevData,
          [name]: value
        }));
    }
    const handleCreate = async (event) => {
        event.preventDefault();

        const payload = {
            name: createOne.name,
            skill1: createOne.skill1,
            skill2: createOne.skill2,
            skill3: createOne.skill3,
            skill4: createOne.skill4
        }

        try {
            const token = localStorage.getItem('Token');
            const response = await fetch(`http://localhost:8080`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': `${token}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                navigate(`/`);
            } else if (response.status === 409) {
                setCreateSucceed('Ninja existed');
                window.scrollTo({ top: 0 });            
            }
        } catch (error) {
            setCreateSucceed('Create ninja failed, check if user logged in or not');
            window.scrollTo({ top: 0 });
            console.error(error);
        }
    }
    return (
        <div className='max-w-lg mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>Create Ninja</h2>
          <form onSubmit={handleCreate}>
            {createSucceed && (
                <div className='text-red-500 text-l mt-2 font-semibold'>
                    {createSucceed}
                </div>
            )}
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={createOne.name}
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
                value={createOne.skill1}
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
                value={createOne.skill2}
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
                value={createOne.skill3}
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
                value={createOne.skill4}
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
                Create
              </button>
            </div>
          </form>
        </div>
    );
}
