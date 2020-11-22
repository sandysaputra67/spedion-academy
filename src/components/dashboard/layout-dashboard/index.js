import React from 'react';
import { LogoDashboard, ButtonClose, SidebarMenu, ContentWrapper, TopBarMenu, } from '../atoms';



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

        <footer class="footer">
          © 2020 <b>Spedion Academy</b> <span class="d-none d-sm-inline-block"> - Made With <i class="mdi mdi-heart text-danger"></i> CV Sekolah Pemberdayaan Diri</span>
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

