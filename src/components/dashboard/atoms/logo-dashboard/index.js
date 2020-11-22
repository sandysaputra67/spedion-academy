import React from 'react';
import { Link } from 'react-router-dom';

const LogoDashboard = (props) => {
  return (
    <>
    	<div className="text-center">
    	    <Link to="/" className="logo">
    	    	<img src="assets/dash/images/logo-dark.png" height="20" alt="logo"/>
    	    </Link>
    	</div>
    </>
  )
}

export default LogoDashboard;