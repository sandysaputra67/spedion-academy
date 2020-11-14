import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


const Alert = (props) => {
const [bintang, setBintang] = useState([]);
const [kalimat, setKalimat] = useState('');
const [link, setLink] = useState('');
const [tombol, setTombol] = useState('');

 useEffect(()=>{
 	setBintang([1,2,3,4,5])
 	setKalimat('Teknik Cepat Menguasai Dasar Hypnotis')
 	setLink('/promotion')
 	setTombol('Daftar Sekarang')
 }, [])

 
  return (
    <>
    	<div className="app-header-alert">
    	    <div className="alert alert_top alert-dismissible fade show" role="alert">
    	        <div className="container">
    	            <div className="alert_caption">
    	                <div className="alert_rate">
    	                    {
    	                    	bintang.map(rate=><i className="fas fa-star filled" key={rate}></i>)
    	                    }
    	                </div>
    	                
    	                    <p>{kalimat}<NavLink to={link}> {tombol}</NavLink></p>
    	                
    	               
    	            </div>
    	            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    	                <span aria-hidden="true">&times;</span>
    	            </button>
    	        </div>
    	    </div>
    	</div>
    </>
  )
}

export default Alert;