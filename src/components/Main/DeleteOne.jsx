import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteOne() {
    const id = useParams();
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            const confirmDelete = window.confirm("Are you sure you want to delete the ninja?");
            if (confirmDelete) {
                const token = localStorage.getItem('Token');    
                await fetch(`http://localhost:8080/${id.id}`, {
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
        <button
            onClick={handleDelete}
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200 mt-4"
        >
            Delete ninja
        </button>
    );
}
