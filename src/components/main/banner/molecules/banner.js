import React from 'react';
import { NavLink } from 'react-router-dom';

const ChildBanner = (props) => {
	
	const { link_img, alt } = props.banner.img;
	const { title, desc } = props.banner.info;
	const { link_btn, text } = props.banner.tombol;

  return (
    <>
    		<div className="image-cover hero_banner shadow rlt bg-light">
    	    	    <div className="container">
    	    	        <div className="row align-items-center">
    	    	            <div className="col-lg-6 col-md-6 col-sm-12">
    	    	                <div className="banner-search-2 transparent">
    	    	                    <h1 className="big-header-capt cl_2 mb-2 f_2">{title}</h1>
    	    	                    <p>{desc}</p>
    	    	                    <div className="mt-4">
    	    	                        <NavLink to={link_btn} className="btn btn-modern dark">{text}<span><i className="ti-arrow-right"></i></span></NavLink>
    	    	                    </div>
    	    	                </div>
    	    	            </div>

    	    	            <div className="col-lg-6 col-md-6 col-sm-12">
    	    	                <div className="flixio">
    	    	                    <img className="img-fluid" src={link_img} alt={alt} />
    	    	                </div>
    	    	            </div>

    	    	        </div>
    	    	    </div>
    	    	</div>
    </>
  )
}

export default ChildBanner;





