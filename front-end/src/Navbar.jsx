
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useUser from './useUser';

export default function Navbar(){
    const { isLoading, user } = useUser();

    const navigate = useNavigate();
    return(
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        {isLoading ? <li>Loading...</li> : (
            <>
                {user && (
                <li><p>Logged in as {user.email}</p></li>
                )}
                <li>{user
                ? <button onClick={() => signOut(getAuth())}>Log Out</button>
                : <button onClick={() => navigate('/login')}>Log In</button>
                }</li>
            </>
        )}
        
        </ul>
        </nav>
    );
}