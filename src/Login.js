import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'
function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('')

    const signIn=event => {
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            console.log(auth)
            if(auth) history.push('/');
        })
        .catch(err => alert(err.message))
    
    }

    const create= event => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(auth => {
            console.log(auth)
            if(auth) history.push('/');
        })
        .catch(err => alert(err.message))

    }

    return (
        <div className='login'>
          <Link to='/'>
          <img 
          className='login__image'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="" />

          </Link>
         <div className="login__container">
             <h1>Sign-In</h1>
             <form action="">
                 <h5>
                     E-mail
                 </h5>
                 <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                 <h5>Password</h5>
                 <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                 <button className='login__signinButton' type='submit' onClick={signIn}>Sign-In</button>
             </form>
             <p>
             By continuing, you agree to Amazon(Clone)'s Conditions of Use and Privacy Notice.
             </p>
             <button className='login__createButton' onClick={create}>Create a new account</button>
         </div>
        </div>
    )
}

export default Login
