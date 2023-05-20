import React from 'react'

const UserForm = ({ data, updateHandle }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name='name'
          id='name'
          placeholder='Digite seu nome'
          required
          value={data.name || ''}
          onChange={(e) => updateHandle('name', e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name='email'
          id='email'
          placeholder='Digite seu email'
          required
          value={data.email || ''}
          onChange={(e) => updateHandle('email', e.target.value)}
        />
      </div>
    </div>
  )
}

export default UserForm