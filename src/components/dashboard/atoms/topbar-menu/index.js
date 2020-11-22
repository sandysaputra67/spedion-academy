import React from 'react';
import { NavLink } from "react-router-dom";
const TopBarMenu = (props) => {

	const handleQuery = (e) => {
		e.preventDefault()
		var inputQueryKursus = document.getElementById("appSearch").value;
		if (inputQueryKursus) {
			var q = `/admin?query=${inputQueryKursus}`;
			window.location.href = q
		}
	}
  return (
    <>
    	{/*<!-- Top Bar Start -->*/}
    	<div className="topbar">

    	    <div className="topbar-left d-lg-block">
    	        <div className="text-center">
    	            
    	            <NavLink to="/admin" className="logo">
                    <img src="assets/dash/images/logo.png" height="20" alt="logo"/></NavLink>
    	        </div>
    	    </div>

    	    <nav className="navbar-custom">

    	        <ul className="list-inline float-right mb-0">
    	            <li className="list-inline-item notification-list dropdown d-none d-sm-inline-block">
    	                <form role="search" className="app-search">
    	                    <div className="form-group mb-0"> 
    	                        <input type="text" className="form-control" placeholder="Search.." id="appSearch"/>
								  <button type="submit" onClick={handleQuery}><i className="fa fa-search"></i></button>
    	                    </div>
    	                </form> 
    	            </li>
					{/* add list herer */}

    	        </ul>

    	        <ul className="list-inline menu-left mb-0">
    	            <li className="list-inline-item">
    	                <button type="button" className="button-menu-mobile open-left waves-effect">
    	                    <i className="ion-navicon"></i>
    	                </button>
    	            </li>
    	        </ul>

    	        <div className="clearfix"></div>

    	    </nav>

    	</div>
    	{/*<!-- Top Bar End -->*/}
    </>
  )
}

export default TopBarMenu;