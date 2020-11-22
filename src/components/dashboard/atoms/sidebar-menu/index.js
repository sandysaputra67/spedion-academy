import React from 'react';
import { NavLink } from "react-router-dom";
const SidebarMenu = (props) => {

  return (
    <>
    	<div id="sidebar-menu">
    	    <ul>
    	        <li className="menu-title">Main</li>

    	        <li>
    	            <NavLink to="/admin" className="waves-effect">
    	                <i className="dripicons-meter"></i>
    	                <span> Dashboard <span className="badge badge-success badge-pill float-right">3</span></span>
    	            </NavLink>
    	        </li>

    	        <li className="has_sub">
					  <NavLink to="/" className="waves-effect">
						<i className="dripicons-briefcase"></i> <span> Elements </span> 
						<span className="menu-arrow float-right">
							<i className="mdi mdi-chevron-right"></i>
						</span>
					</NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="ui-alerts.html">Alerts</NavLink></li>
    	                <li><NavLink to="ui-buttons.html">Buttons</NavLink></li>
    	                <li><NavLink to="ui-badge.html">Badge</NavLink></li>
    	                <li><NavLink to="ui-cards.html">Cards</NavLink></li>
    	                <li><NavLink to="ui-dropdowns.html">Dropdowns</NavLink></li>
    	                <li><NavLink to="ui-tabs-accordions.html">Tabs & Accordions</NavLink></li>
    	                <li><NavLink to="ui-modals.html">Modals</NavLink></li>
    	                <li><NavLink to="ui-images.html">Images</NavLink></li>
    	                <li><NavLink to="ui-progressbars.html">Progress Bars</NavLink></li>
    	                <li><NavLink to="ui-navs.html">Navs</NavLink></li>
    	                <li><NavLink to="ui-pagination.html">Pagination</NavLink></li>
    	                <li><NavLink to="ui-popover-tooltips.html">Popover & Tooltips</NavLink></li>
    	                <li><NavLink to="ui-carousel.html">Carousel</NavLink></li>
    	                <li><NavLink to="ui-video.html">Video</NavLink></li>
    	                <li><NavLink to="ui-typography.html">Typography</NavLink></li>
    	                <li><NavLink to="ui-grid.html">Grid</NavLink></li>
    	            </ul>
    	        </li>

    	        <li className="has_sub">
    	            <NavLink to="/" className="waves-effect"><i className="dripicons-broadcast"></i> <span> Advanced UI </span> <span className="menu-arrow float-right"><i className="mdi mdi-chevron-right"></i></span></NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="advanced-alertify.html">Alertify</NavLink></li>
    	                <li><NavLink to="advanced-rating.html">Rating</NavLink></li>
    	                <li><NavLink to="advanced-nestable.html">Nestable</NavLink></li>
    	                <li><NavLink to="advanced-rangeslider.html">Range Slider</NavLink></li>
    	                <li><NavLink to="advanced-sweet-alert.html">Sweet-Alert</NavLink></li>
    	                <li><NavLink to="advanced-lightbox.html">Lightbox</NavLink></li>
    	            </ul>
    	        </li>

    	        <li className="has_sub">
    	            <NavLink to="/" className="waves-effect"><i className="dripicons-document"></i><span> Forms </span> <span className="badge badge-warning badge-pill float-right">8</span></NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="form-elements.html">Form Elements</NavLink></li>
    	                <li><NavLink to="form-validation.html">Form Validation</NavLink></li>
    	                <li><NavLink to="form-advanced.html">Form Advanced</NavLink></li>
    	                <li><NavLink to="form-editors.html">Form Editors</NavLink></li>
    	                <li><NavLink to="form-uploads.html">Form File Upload</NavLink></li>
    	                <li><NavLink to="form-mask.html">Form Mask</NavLink></li>
    	                <li><NavLink to="form-summernote.html">Summernote</NavLink></li>
    	                <li><NavLink to="form-xeditable.html">Form Xeditable</NavLink></li>
    	            </ul>
    	        </li>

    	        <li className="has_sub">
    	            <NavLink to="/" className="waves-effect"><i className="dripicons-graph-pie"></i><span> Charts </span> <span className="menu-arrow float-right"><i className="mdi mdi-chevron-right"></i></span></NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="charts-morris.html">Morris Chart</NavLink></li>
    	                <li><NavLink to="charts-chartist.html">Chartist Chart</NavLink></li>
    	                <li><NavLink to="charts-chartjs.html">Chartjs Chart</NavLink></li>
    	                <li><NavLink to="charts-flot.html">Flot Chart</NavLink></li>
    	                <li><NavLink to="charts-c3.html">C3 Chart</NavLink></li>
    	                <li><NavLink to="charts-other.html">Jquery Knob Chart</NavLink></li>
    	            </ul>
    	        </li>

    	        <li className="has_sub">
    	            <NavLink to="/" className="waves-effect"><i className="dripicons-list"></i><span> Tables </span> <span className="menu-arrow float-right"><i className="mdi mdi-chevron-right"></i></span></NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="tables-basic.html">Basic Tables</NavLink></li>
    	                <li><NavLink to="tables-datatable.html">Data Table</NavLink></li>
    	                <li><NavLink to="tables-responsive.html">Responsive Table</NavLink></li>
    	                <li><NavLink to="tables-editable.html">Editable Table</NavLink></li>
    	            </ul>
    	        </li>

    	        <li className="menu-title">Extra</li>

    	        <li className="has_sub">
    	            <NavLink to="/" className="waves-effect"><i className="dripicons-location"></i><span> Maps </span> <span className="badge badge-danger badge-pill float-right">2</span></NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="maps-google.html"> Google Map</NavLink></li>
    	                <li><NavLink to="maps-vector.html"> Vector Map</NavLink></li>
    	            </ul>
    	        </li>

    	        <li className="has_sub">
    	            <NavLink to="/" className="waves-effect"><i className="dripicons-brightness-max"></i> <span> Icons </span> <span className="menu-arrow float-right"><i className="mdi mdi-chevron-right"></i></span></NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="icons-material.html">Material Design</NavLink></li>
    	                <li><NavLink to="icons-ion.html">Ion Icons</NavLink></li>
    	                <li><NavLink to="icons-fontawesome.html">Font Awesome</NavLink></li>
    	                <li><NavLink to="icons-themify.html">Themify Icons</NavLink></li>
    	                <li><NavLink to="icons-dripicons.html">Dripicons</NavLink></li>
    	                <li><NavLink to="icons-typicons.html">Typicons Icons</NavLink></li>
    	            </ul>
    	        </li>

    	        <li>
    	            <NavLink to="calendar.html" className="waves-effect"><i className="dripicons-calendar"></i><span> Calendar </span></NavLink>
    	        </li>

    	        <li className="has_sub">
    	            <NavLink to="/" className="waves-effect"><i className="dripicons-copy"></i><span> Pages </span> <span className="menu-arrow float-right"><i className="mdi mdi-chevron-right"></i></span></NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="pages-blank.html">Blank Page</NavLink></li>
    	                <li><NavLink to="pages-login.html">Login</NavLink></li>
    	                <li><NavLink to="pages-register.html">Register</NavLink></li>
    	                <li><NavLink to="pages-recoverpw.html">Recover Password</NavLink></li>
    	                <li><NavLink to="pages-lock-screen.html">Lock Screen</NavLink></li>
    	                <li><NavLink to="pages-404.html">Error 404</NavLink></li>
    	                <li><NavLink to="pages-500.html">Error 500</NavLink></li>
    	            </ul>
    	        </li>

    	        <li className="has_sub">
    	            <NavLink to="#" className="waves-effect"><i className="dripicons-jewel"></i><span> Extras </span> <span className="menu-arrow float-right"><i className="mdi mdi-chevron-right"></i></span></NavLink>
    	            <ul className="list-unstyled">
    	                <li><NavLink to="extras-pricing.html">Pricing</NavLink></li>
    	                <li><NavLink to="extras-invoice.html">Invoice</NavLink></li>
    	                <li><NavLink to="extras-timeline.html">Timeline</NavLink></li>
    	                <li><NavLink to="extras-faqs.html">FAQs</NavLink></li>
    	                <li><NavLink to="extras-maintenance.html">Maintenance</NavLink></li>
    	                <li><NavLink to="extras-comingsoon.html">Coming Soon</NavLink></li>
    	            </ul>
    	        </li>

    	    </ul>
    	</div>
    	<div className="clearfix"></div>
    </>
  )
}

export default SidebarMenu;