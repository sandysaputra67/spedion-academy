import React from 'react';

const Masuk = (props) => {
  return (
    <>
    	<div className="content-center p-4">
    	  <div className="content-desc-center">
    	      <div className="container">
    	          <div className="row justify-content-center">
    	              <div className="col-lg-5 col-md-8">
                   
    	                  <div className="card">
    	                      <div className="card-body">
    	  
    	                          <h4 className="text-muted text-center font-18"><b>Masuk</b></h4>
    	  
    	                          <div className="p-2">
    	                              <form className="form-horizontal m-t-20" action="index.html">
    	  
    	                                  <div className="form-group row">
    	                                      <div className="col-12">
    	                                          <input className="form-control" 
    	                                          type="text" 
    	                                          required="" placeholder="Username"/>
    	                                      </div>
    	                                  </div>
    	  
    	                                  <div className="form-group row">
    	                                      <div className="col-12">
    	                                          <input className="form-control" 
    	                                          type="password" 
    	                                          required="" placeholder="Password"/>
    	                                      </div>
    	                                  </div>

                                            <div className="form-group row">
                                                <div className="col-12">
                                                    <div className="control">
                                                        <input 
                                                            type="checkbox" 
                                                            className="checkbox-custom" 
                                                            id="customCheck1" checked/>
                                                        <label 
                                                            className="checkbox-custom-label font-weight-normal" 
                                                            for="customCheck1" >
                                                                Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                
    	  
    	                                  <div className="form-group text-center row m-t-20">
    	                                      <div className="col-12">
    	                                          <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
    	                                      </div>
    	                                  </div>
    	  
    	                                  <div className="form-group m-t-10 mb-0 row">
    	                                      <div className="col-sm-7 m-t-20">
    	                                          <a href="pages-recoverpw.html" className="text-muted">
    	                                          <i className="mdi mdi-lock"></i> Forgot your password?</a>
    	                                      </div>
    	                                      <div className="col-sm-5 m-t-20">
    	                                          <a href="pages-register.html" className="text-muted"><i className="mdi mdi-account-circle"></i> Create an account</a>
    	                                      </div>
    	                                  </div>
    	                              </form>
    	                          </div>
    	  
    	                      </div>
    	                  </div>
                        
    	              </div>
    	          </div>
    	         
    	      </div>
    	  </div>
    	</div>

    </>
  )
}

export default Masuk;