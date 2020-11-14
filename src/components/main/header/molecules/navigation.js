import React from 'react';
import Logo from './logo';
import NavComponent from './nav';

const Navigation = (props) => {

  return (
    <>
    	<div className="app-header-navigation">
    	    <div className="header header-light head-shadow">
    	        <div className="container">
    	            <nav id="navigation" className="navigation navigation-landscape">
    	                
    	              <Logo/>

    	                <div className="nav-menus-wrapper">
    	                    <NavComponent/>
    	                </div>
    	                 
    	            </nav>
    	        </div>
    	    </div>

    	    <div className="clearfix"></div>

    	</div>
    </>
  )
}

export default Navigation;