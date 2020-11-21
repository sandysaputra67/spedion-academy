import React from 'react';
import { NavLink } from "react-router-dom";

const NavComponent = (props) => {

const handleQuery = (e) =>{
	e.preventDefault()
    var inputQueryKursus = document.getElementById("input_search").value;
    if(inputQueryKursus){
        var q = `/?query=${inputQueryKursus}`;
        window.location.href = q
    }
}
const handleDefault = (e) =>{
	    e.preventDefault()
        
}
const goDashboard = () => {
    // const host = window.location.hostname;
    window.location.href = "/admin";
}


  return (
    <>
    	<ul className="nav-menu" id="nav-menu">
    	   
    	      <li className="beranda"><NavLink to='/'>Beranda</NavLink></li>
    	        
    	       <li> <NavLink to='/' onClick={handleDefault}>Pelatihan<span className="submenu-indicator"></span></NavLink>
    	        <ul className="nav-dropdown nav-submenu">
    	            <li>
    	                <NavLink to='/kursus'>Semua Kursus</NavLink>
    	            </li>
    	            <li>
    	                <NavLink to='/instruktur'>Semua Instruktur</NavLink>
    	            </li>
    	        </ul>
    	    </li>

    	        <li><NavLink to='/' onClick={handleDefault}>Services<span className="submenu-indicator"></span></NavLink>
    	        <ul className="nav-dropdown nav-submenu">
    	            <li>
    	                <NavLink to='/seminar'>Seminar Online</NavLink>
    	            </li>
    	            <li>
    	                <NavLink to='/market'>Market Produk Digital</NavLink>
    	            </li>

    	        </ul>
    	    </li>

    	    <li><NavLink to='/' onClick={handleDefault}>Akun<span className="submenu-indicator"></span></NavLink>
    	        <ul className="nav-dropdown nav-submenu">
    	            <li>
    	                <NavLink to='/admin' onClick={()=>goDashboard()}>Dashboard</NavLink>
    	            </li>
    	        </ul>
    	    </li>
    	   

    	</ul>

    	<ul className="nav-menu nav-menu-social align-to-right">
    	    <li className="login_click search">

    	        <form className="form-inline addons">
    	            <input className="form-control" type="search" id="input_search" placeholder="Cari Kursus" aria-label="Search" />
    	            <button className="btn my-2 my-sm-0" type="submit" id="btn_search" 
    	            	onClick={handleQuery}><i className="ti-search"></i>
    	            </button>
    	        </form>

    	    </li>
    	    <li className="login_click bg-red" id="authBtnLogin">
    	         <NavLink to='/masuk'>Masuk</NavLink>
    	    </li>
    	    <li className="login_click bg-blue" id="authBtnSignup">
    	         <NavLink to='/daftar'>Daftar</NavLink>
    	    </li>
    	</ul>

    </>
  )
}

export default NavComponent;