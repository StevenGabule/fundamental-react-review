import React from 'react'

export const Header = ({ setUser, user }) => {
  return (
    <div>
      Welcome, {user}
      <button onClick={() => setUser('')}>Logout</button>
    </div>
  )
}
