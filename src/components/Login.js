import '../style/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import {initializeApp} from 'firebase/app';
import {getAuth , signInWithEmailAndPassword} from "firebase/auth";
import {firebaseConfig} from './firebaseConfig.js';
import { useState } from 'react';

const Login = page =>{

    const app = initializeApp(firebaseConfig);
    const [email,setEmail] = useState('');
    //useState is used to maintain the internal states of a component
    const [password,setPassword]=useState('');
    //defining the method for sign in
    //first of all we need to initiate it
    const navigate = useNavigate();
    const auth = getAuth();
    const [ isUserExist,setUserExist] = useState(false); // initially user does not exist

    const onSignInHandler = (e) =>{
        //for default behavior, we are using usDefault
        //uneNavigate method is used to redirect to a page
        e.preventDefault(); //here we use this, otherwise page will get refreshed
        signInWithEmailAndPassword(auth,email,password)
        .then( auth =>{
            if(auth){
                navigate('/dashboard');
            }
        })
        .catch(error=> setUserExist(true));
        //user-not-found
    }
    const emailOnChangeHandler=(e)=>{
        setEmail(e.target.value);
    }
    
    return(
        <div className='login'>
            <div className='card-holder'>
                <h1 className='text-white'>{page ? 'Sign In' : 'Register'}</h1>
                <br/>
                <form>
                    <input className='form-control' value={email} onChange={emailOnChangeHandler} type="email" placeholder='Email' />
                    <input className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'/>
                    <button className='btn btn-danger btn-block' onClick={onSignInHandler}> {page ? "Sign In" : 'Register'}</button>
                    <br/>
                    <br/>
                    {
                        page && <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value="" id='flexCheckDefault'/>
                        <label className='form-check-label text-white' htmlFor='flexCheckDefault'>Remember Me</label>
                    </div>
                    }
                </form>
                <br/>
                {  isUserExist && <p className='text-danger'> User does not exist</p> }
                <div className='Sign-up'>
                    <div className='sign-up-now'>
                    {page ? "New to Netflix" : 'Existing User'} &nbsp;
                        <Link className=' '  to={page ? "/register" : '/login'}>{page ? "Sign up now" : 'Sign In'}</Link>
                    </div>
                </div>
            </div>
            <div className='shadow'></div>
            <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
    )
}
export default Login;