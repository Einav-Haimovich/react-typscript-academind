import React, {type FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from 'react'


type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

export type FormHandles = {
  clear: () => void;
};

const Form = forwardRef<FormHandles, FormProps>(function Form({onSave, children, ...otherProps}, ref) {

  const form = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('Clearing form');
        form.current?.reset();
      }
    } 
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Form submitted');
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    onSave(data);
  }
  return (
    <form {...otherProps} onSubmit={handleSubmit} ref={form}>
    
      {children}
    </form>
  )
});

export default Form