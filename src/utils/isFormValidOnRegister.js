import validator from 'validator';
import Swal from 'sweetalert2'

export const isFormValidRegister = (email, password1, password2, name) => {
  if(!validator.isEmail(email)){
    Swal.fire('Error', 'Ingrese un email valido', 'error');
    return false;
  } else if (!validator.equals(password1, password2)){
    Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
    return false;
  } else if (password1.trim().length < 6) {
    Swal.fire('Error', 'La contraseña debe ser más de 6 caracteres', 'error');
    return false;
  } else if (validator.isEmpty(name)){
    Swal.fire('Error', 'El nombre no puede estar vacio', 'error');
    return false;
  }
  return true;
}