import React from 'react';

const ContentWrapper = (props) => {
  return (
    <>
    	<div className="page-content-wrapper ">

    	    <div className="container-fluid">

    	        <div className="row">
    	            <div className="col-sm-12">
    	                <div className="float-right page-breadcrumb">
    	                    <ol className="breadcrumb">
    	                        <li className="breadcrumb-item"><a href="/">Home</a></li>
    	                        <li className="breadcrumb-item"><a href="/">Pages</a></li>
    	                        <li className="breadcrumb-item active">Starter</li>
    	                    </ol>
    	                </div>
    	                <h5 className="page-title">Starter Page</h5>
    	                
    	            </div>
    	        </div>
    	        {props.children}              
    	    </div>{/*<!-- container fluid -->*/}



    	</div> {/*<!-- Page content Wrapper -->*/}
    </>
  )
}

export default ContentWrapper;