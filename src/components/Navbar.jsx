import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import { Box , Button, Input , Center , Text} from '@chakra-ui/react'

const Navbar = () => {
    let {isAuth , setIsAuth ,toggleAuth} = React.useContext(AuthContext)
    
    return (
        <Box bg = "tomato" h = {20} display = "flex" alignItems = "center"  justifyContent = "center">
             <Button onClick = {toggleAuth} >{isAuth? "LOGOUT" :"LOGIN"}</Button>
        </Box>
    )

}

export default Navbar;