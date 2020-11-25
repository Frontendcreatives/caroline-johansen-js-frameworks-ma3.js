import React from "react";
import Heading from "../layout/Heading";
import LoginForm from "../layout/LoginForm";
import "../../sass/style.scss";

export function Login() {
  return (
 <div>
<Heading content="LOGIN"/>
     <LoginForm> The Login Form</LoginForm>
</div> 
       );
}

export default Login;