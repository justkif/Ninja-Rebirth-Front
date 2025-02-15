import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import GetOne from './GetOne';
import GetAllAndMany from './GetAllAndMany';
import CreateOne from './CreateOne';
import DeleteOne from './DeleteOne';

export default function Main() {
    const [ninja, setNinja] = useState([]);
    return (
        <main>
            <Routes> 
                <Route path='/' element={<GetAllAndMany ninja={ninja} setNinja={setNinja} />} />                
                <Route path='/ninja/:id' element={<><GetOne /><DeleteOne /></>} />
                <Route path='/create' element={<CreateOne />} />
            </Routes>
        </main>
    );
}
