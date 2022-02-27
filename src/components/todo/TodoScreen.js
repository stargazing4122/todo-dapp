import React from 'react'

const TodoScreen = () => {
  const style = {
    color: 'azure',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={style}>  
      <h2>Pagina en construcción...</h2>
      <button className='btn btn-logout'>Logout</button>
    </div>
  )
}

export default TodoScreen
