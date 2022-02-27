import React, { useState } from 'react'

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return {
    formValues,
    handleInput,
  }
}

export default useForm
