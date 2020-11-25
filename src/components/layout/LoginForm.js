import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const formInput = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    
    password: Yup.string()
            .min(4, 'Password must be minimum 4 characters')
            .required('Password is required'),
      
       
});



function LoginForm() {
    
    const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(formInput),
});
    
    function onSubmit(data) {
        console.log("data", data);
    }
    
    return ( 
       <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" placeholder="Enter your name" ref={register} />
                {errors.name && <p>{errors.name.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password"  placeholder="Enter your password" ref={register} />
                {errors.password && <p>{errors.password.message}</p>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
           );
    
}

export default LoginForm;



