import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import GetOne from './GetOne';
import GetAllAndMany from './GetAllAndMany';
import CreateOne from './CreateOne';
import DeleteOne from './DeleteOne';
import UpdateOne from './UpdateOne';

export default function Main() {
    const [ninja, setNinja] = useState([]);
    const [passNinja, setPassNinja] = useState({});
    return (
        <main>
            <Routes> 
                <Route path='/' element={<GetAllAndMany ninja={ninja} setNinja={setNinja} />} />                
                <Route path='/ninja/:id' element={<><GetOne setPassNinja={setPassNinja}/><DeleteOne /></>} />
                <Route path='/create' element={<CreateOne />} />
                <Route path="/ninja/:id/update" element={<UpdateOne passNinja={passNinja} />} />
            </Routes>
        </main>
    );
}
