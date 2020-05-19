import React from 'react';
import { useForm } from 'react-hook-form';

const HookForm = (props) => {
    const {register, handleSubmit, reset} = useForm();
    console.log(useForm());

    const onSubmit = (data) => {
        //console.log(data);
        props.onFormAdd(data);
        reset({
            userid: null,
            username: ''
        })
        // useForm().reset()
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="username" ref={register} />
          <input type="number" name="userid" ref={register} />
          <button type="submit">Add User</button>
        </form> 
    )
}

export default HookForm;