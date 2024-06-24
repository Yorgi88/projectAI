import React from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email, password
        });
        alert('Logged in successfully');
        console.log('Token:', response.data.token);
    } catch (error) {
        console.error('There was an error!', error);
    }
};
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Login</h4>
   
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

export default Login