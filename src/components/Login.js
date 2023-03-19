import React, { useState } from 'react'

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Input username' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
