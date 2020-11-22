import React from 'react';
import { LogoDashboard, ButtonClose, SidebarMenu, ContentWrapper, TopBarMenu, } from '../atoms';
// import '../assets/css/bootstrap.min.css';
// import '../assets/css/icons.css';
// import '../assets/css/style.css';

// import '../assets/js/jquery.min.js';
// import '../assets/js/bootstrap.bundle.min.js';
// import '../assets/js/modernizr.min.js';
// import '../assets/js/detect.js';
// import '../assets/js/fastclick.js';
// import '../assets/js/jquery.slimscroll.js';
// import '../assets/js/jquery.blockUI.js';
// import '../assets/js/waves.js';
// import '../assets/js/jquery.nicescroll.js';
// import '../assets/js/jquery.scrollTo.min.js';
// import '../assets/js/app.js';


export const LayoutTopBar = (props) => {
  return (
    <>
      <TopBarMenu/>
    </>
  )
}

export const LayoutSidebar = (props) => {
  return (
    <>
     {/*<!-- ========== Left Sidebar Start ========== -->*/}
       <div className="left side-menu">

            <ButtonClose/>

            <div className="left-side-logo d-block d-lg-none">
              <LogoDashboard/>
            </div>
            
            <div className="sidebar-inner slimscrollleft">
               <SidebarMenu/>
            </div>
            {/*<!-- end sidebarinner -->*/}

        </div>
    {/*<!-- Left Sidebar End -->*/}
    </>
  )
}


export const LayoutContentBoard = (props) => {
  return (
    <>
    	  {/*<!-- Start right Content here -->*/}
            <LayoutTopBar/>
            <div className="content-page">
            	{/*<!-- Start content -->*/}
            	<div className="content">
            		<ContentWrapper>
                  {props.children}
                </ContentWrapper>
            	</div>

            	<footer className="footer">
            	    © 2018 <b>Drixo</b> <span className="d-none d-sm-inline-block"> - Crafted with 
            	    <i className="mdi mdi-heart text-danger"></i> by Themesdesign.</span>
            	</footer>
            </div>
          {/*<!-- End Right content here -->*/}

    </>
  )
}

export const LayoutDashboard = (props) => {
  return (
    <>
    {/*<!-- Loader -->*/}
        <div id="preloader"><div id="status"><div className="spinner"></div></div></div>

    {/*<!-- Begin page -->*/}
            <div id="wrapper">
                {props.children}
            </div>
    {/*<!-- END wrapper -->*/}
    </>
  )
}

