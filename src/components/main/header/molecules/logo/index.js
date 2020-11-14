import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


const Logo = (props) => {
const [logo, setLogo] = useState('');
const [alt, setAlt] = useState('')

useEffect(()=>{
	setLogo('assets/img/logo.png')
	setAlt('Spedion Academy')
}, [])
  return (
    <>
    	<div className="nav-header">
    	        <NavLink to='/' className="nav-brand" >
    	        	<img src={logo} className="logo" alt={alt} />
    	        </NavLink>
    	    <div className="nav-toggle"></div>
    	</div>
    </>
  )
}

export default Logo;