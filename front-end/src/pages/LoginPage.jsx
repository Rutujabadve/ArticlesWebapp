import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage(){
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError ] = useState('');

    const navigate = useNavigate();

    async function LogIn(){
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        }catch(e){
            setError(e.message);
        }
    }

    return(
        <>
        <h1>Login In</h1>
        {error && <p>{error}</p>}
        <input
        placeholder = 'Your Email Address'
        value = {email}
        onChange = {e=> setEmail(e.target.value)}/>
        <input
        placeholder = 'Your Password'
        type = 'password'
        value = {password}
        onChange = {e=> setPassword(e.target.value)}/>
        <button onClick={LogIn}>Log In</button>
        <Link to = '/create-account'>Dont have an account? Create one here.</Link>
        </>
        

    );
}