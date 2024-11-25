import React from 'react'

type InputProps = {
    label: string;
    id: string;
};

function Input({label, id, ...props}: InputProps) {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} type='text'{...props}/>
    </p>
  )
}

export default Input