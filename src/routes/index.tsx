import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/login';
import { CreateUser } from '../pages/createUser';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/create-user' element={<CreateUser />} />
        </Routes>
    )
}