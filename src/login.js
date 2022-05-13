import React from 'react';
import './Login.css';

class Login extends React.Component {
  render(){
    return (
      <form>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label><br/>
        <input className='text-box'
          placeholder="Enter email"
        />
      </div>
      <div>
        <label>Password:</label><br/>
        <input className='text-box'
          placeholder="Enter password"
        />
      </div>
      <button>
        Submit
      </button>
    </form>
    );
  }
}

export default Login;