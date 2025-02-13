import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [unauthorized, setUnauthorized] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const payload = {
            username: username,
            password: password
        }

        try {
            const response = await fetch(`http://localhost:8080/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log('Login successful');
                setUnauthorized(true);
            } else {
                setUnauthorized(false);            
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        onChange={(username) => setUsername(username.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Enter your username" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password}
                        onChange={(password) => setPassword(password.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Enter your password" 
                        required 
                    />
                </div>
                {unauthorized && (
                    <div className="text-red-500 text-sm mt-2">
                        Wrong username or password
                    </div>
                )}
                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-gradient-to-b from-orange-400 to-yellow-30 text-black font-semibold rounded hover:to-orange-400 transition-all duration-200"
                > 
                    Login 
                </button>
            </form>
        </div>
    );
}
