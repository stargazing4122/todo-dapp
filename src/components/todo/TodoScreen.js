import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/authActions';

const TodoScreen = () => {
  //hooks
  const dispatch = useDispatch();

  //functions
  const handleLogout = () => {
    dispatch(startLogout());
  }
  
  return (
    <div className="todo-main">  
      <h2>Pagina en construcción...</h2>
      <button 
        className='btn btn-logout'
        onClick={handleLogout}
        >Logout</button>
    </div>
  )
}

export default TodoScreen
