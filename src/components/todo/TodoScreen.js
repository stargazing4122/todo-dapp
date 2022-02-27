import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/authActions';

const TodoScreen = () => {
  //hooks
  const dispatch = useDispatch();
  const { name } = useSelector( state => state.auth );

  //functions
  const handleLogout = () => {
    dispatch(startLogout());
  }
  
  return (
    <div className="todo-main">  
    <h2>{name}</h2>
      <h2>Lo sentimos, página en construcción... </h2>
      <button 
        className='btn btn-logout'
        onClick={handleLogout}
        >Logout</button>
    </div>
  )
}

export default TodoScreen
