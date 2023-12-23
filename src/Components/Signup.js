import React, { useState } from 'react'
const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {


    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "hbingley1",
        password: "CQutx25i8r",
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(`error: ${err}`))
  }


  return (
    <div onSubmit={handleSubmit} className='signup'>
      <form>
        <div className='top-text'>
          <p>Welcome back!👋</p>
          <h2>Sign in to your account</h2>
        </div>
        <label>Your Email:</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' id='submit-btn'>CONTINUE</button>
        <a href='#'>Forget your password?</a>
      </form>
      <p>Don’t have an account? <a href='#'>Sign up</a></p>

    </div>
  )
}

export default Signup