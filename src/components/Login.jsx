import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import { Box , Button, Input , Center , Text} from '@chakra-ui/react'

const Login = () => {
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    const [loading , setLoading] = React.useState(false);
    const [error , setError] = React.useState(false);
    let {isAuth , setIsAuth } = React.useContext(AuthContext);
    const [login , setLogin] = React.useState(false);

const handleLogin = () => {
     setLoading(true);
    const body = {email , password}
    fetch(`https://reqres.in/api/login` , {
        method : "POST",
         body : JSON.stringify(body),
         headers: {
            "Content-Type": "application/json"
          }
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.token){
            setLogin(true)
        }

    })
    .catch((err) => {
         setError(true);
    })
    .finally(() => {
          setLoading(false);
    });

}
   if(loading){
      return(
          <Box mt = {200} fontSize = {20}>Loading....</Box>
      )
   }

   if(error){
     return(
        <Box mt = {200} fontSize = {20}>Error...</Box>
     )

   }

  if(login){

      return (
           <Box mt = {200} fontSize = {20}>You have Successfully Loged In .</Box>
      )
  }

   
      return (
        <Center>
        <Box  w='40%' mt = {200}>
               <Text fontSize='2xl'>Login Page</Text>
               <Input type = "text" placeholder = "Email" mt = {30}
                value = {email} onChange = {(e) => setEmail(e.target.value)}/>
               <Input type = "passwoord" placeholder = "Password" mt = {30}
               value = {password} onChange = {(e) => setPassword(e.target.value)}/>
               <Button onClick = {handleLogin} mt = {30}>LOGIN</Button>
        </Box>
        </Center>
      )

}

export default Login;