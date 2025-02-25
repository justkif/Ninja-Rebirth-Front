import { useNavigate, useParams, Link } from 'react-router-dom';

export default function DeleteOne() {
    const id = useParams();
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            const confirmDelete = window.confirm('Are you sure you want to delete the ninja?');
            if (confirmDelete) {
                const token = localStorage.getItem('Token');    
                await fetch(`https://ninja-rebirth.onrender.com/${id.id}`, {
                    method: 'DELETE',
                    headers: { 'Token': `${token}` }
                });                
                navigate(`/`);
            }        
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='mt-4 text-white font-bold'>
            <button
                onClick={handleDelete}
                className='bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200'
            >
                Delete ninja
            </button>
            <Link to={`/ninja/${id.id}/update`}>
                <button
                    className='bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 ml-2'
                >
                    Update ninja
                </button>
            </Link>
        </div>
    );
}
