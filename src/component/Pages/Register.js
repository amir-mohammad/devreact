import React, { useState,useContext } from 'react'
import {Form,Button} from "semantic-ui-react";
import UserContext from '../../context/user/userContext';

const Register = () => {

    const userContext =useContext(UserContext);
    const {register} = userContext;

    const [values,setValues] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',

    })

    const onChangeHandler = (e) =>{
        setValues({...values,[e.target.name]:e.target.value});
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
       await register({name:values.name,email:values.email,password:values.password});
       alert("User Registerd Success");
    }
    return (
        <div className="form-container">
            <h1 style={{textAlign:"center"}}>Register Form</h1>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                <Form.Input 
                    label="Name"
                    name='name'
                    type="text"
                    placeholder="Enter Name ..."
                    value={values.name}
                    onChange={onChangeHandler}

                />
                <Form.Input 
                    label="Email"
                    name='email'
                    type="email"
                    placeholder="Enter Email ..."
                    value={values.email}
                    onChange={onChangeHandler}

                />
                 <Form.Input 
                    label="Password"
                    name='password'
                    type="password"
                    placeholder="Enter Password ..."
                    value={values.password}
                    onChange={onChangeHandler}

                />
                <Form.Input 
                    label="Confirm Password"
                    name='confirmPassword'
                    type="password"
                    placeholder="Enter confirm Passwod ..."
                    value={values.confirmPassword}
                    onChange={onChangeHandler}

                />
                <Button type="submit" color="teal">Register</Button>
                </Form.Field>
            </Form>
        </div>
    )
}

export default Register
