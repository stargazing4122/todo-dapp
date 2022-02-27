import validator from 'validator';
import Swal from 'sweetalert2'

export const isFormValidOnLogin = (email, password) => {
  if(!validator.isEmail(email)){
    Swal.fire('Error', 'Ingrese un email valido', 'error');
    return false;
  } else if (validator.isEmpty(password)){
    Swal.fire('Error', 'El password no puede estar vacio', 'error');
    return false;
  } else if (password.trim().length < 6) {
    Swal.fire('Error', 'La contraseña debe ser más de 6 caracteres', 'error');
    return false;
  } 
  return true;
}