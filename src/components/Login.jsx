import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [unauthorized, setUnauthorized] = useState(false);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const handleCredentials = (event) => {
        const { name, value } = event.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleLogin = async (event) => {
        event.preventDefault();

        const payload = {
            username: credentials.username,
            password: credentials.password
        }

        try {
            const response = await fetch(`http://localhost:8080/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('Token', data.token);
                setUnauthorized(false);
                navigate(`/`);

            } else {
                setUnauthorized(true);  
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <form onSubmit={handleLogin} className='bg-white p-6 rounded shadow-lg space-y-4'>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Username</label>
                    <input 
                        type='text' 
                        id='username' 
                        name='username' 
                        value={credentials.username}
                        onChange={handleCredentials}
                        className='w-full p-2 border border-gray-300 rounded mt-1'
                        placeholder='Enter your username' 
                        required 
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password' 
                        value={credentials.password}
                        onChange={handleCredentials}
                        className='w-full p-2 border border-gray-300 rounded mt-1'
                        placeholder='Enter your password' 
                        required 
                    />
                </div>
                {unauthorized && (
                    <div className='text-red-500 text-sm mt-2'>
                        Wrong username or password
                    </div>
                )}
                <button 
                    type='submit' 
                    className='w-full py-2 px-4 bg-gradient-to-b from-orange-400 to-yellow-30 text-black font-semibold rounded hover:to-orange-400 transition-all duration-200'
                > 
                    Login 
                </button>
            </form>
        </div>
    );
}
