import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault()
    registerUser();

  };

  const registerUser = async () => {
    try {
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Registration successful:', data);
    } catch (error) {
        console.error('There was an error', error);
    }
};

// Optionally, you could use useEffect to make a request when the component mounts
useEffect(() => {
    // Uncomment the following line if you want to make a request on mount
    // registerUser();
}, []); 
  return (
    <div>
            <form className='form' onSubmit={handleSubmit}>
        <h4>Register</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            username
          </label>
          <input type='text' className='form-input' id='username' value={username} onChange={(e)=>setUsername(e.target.value)} name="username"/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} name="email"/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} name="password"/>
        </div>
        {/* set the "name" in the input tags to the specific value of each input */}

        <button type='submit' className='btn btn-block'>
          GO
        </button>
      </form>
    </div>
  )
}

export default Register