import { useRef, useState, useEffect, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Menu from './Menu';
import { booleanContext } from '../Context';
import { refreshContext } from '../Context';
import axios from '../api/axios';



const LOGIN_URL = '/api/auth/login';

const Login = () => {
    const { auth, setAuth } = useAuth();
const {refreshToken, setRefreshToken} = useContext(refreshContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/admin";

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
const{isLoggedIn, setIsLoggedIn} =useContext(booleanContext )
const url = `${LOGIN_URL}?username=${username}&password=${password}`

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(url);
console.log(response);
            const accessToken = response?.data?.access_token;
            const roles = response?.data?.authorities;
            const r =[roles]
            console.log(response?.data);
            const admin = "[ROLE_ADMIN]";
        
        setRefreshToken(response?.data?.refresh_token)
        const reftoken = localStorage.setItem("refToken", response?.data?.refresh_token);

                    setAuth({ username, password, r, accessToken });

// setIsLoggedIn(true)


    // console.log(accessToken);
            setUsername('');
            setPassword('');
            navigate(from, { replace: true });
// alert("Login Successful");
          
        } catch (err) {
alert("error with login")
            if (!err?.response) {
              
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
   

  return (
  
    <>
     <Menu/>
      <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </section>

    </>
  )
}

export default Login