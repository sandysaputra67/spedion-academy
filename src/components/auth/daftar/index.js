import React from 'react';

const Daftar = (props) => {
  return (
    <div>
    	<div class="content-center p-4">
    	    <div class="content-desc-center">
    	        <div class="container">
    	            <div class="row justify-content-center">
    	                <div class="col-lg-5 col-md-8">
    	                    <div class="card">
    	                        <div class="card-body">
    	        
    	                            <h4 class="text-muted text-center font-18"><b>Register</b></h4>
    	        
    	                            <div class="p-3">
    	                                <form class="form-horizontal m-t-20" action="">
    	        
    	                                    <div class="form-group row">
    	                                        <div class="col-12">
    	                                            <input 
                                                        class="form-control" 
                                                        type="email" required="" 
                                                        placeholder="Email"/>
    	                                        </div>
    	                                    </div>
    	        
    	                                    <div class="form-group row">
    	                                        <div class="col-12">
    	                                            <input 
                                                        class="form-control" 
                                                        type="text" 
                                                        required="" 
                                                        placeholder="Username"/>
    	                                        </div>
    	                                    </div>
    	        
    	                                    <div class="form-group row">
    	                                        <div class="col-12">
    	                                            <input 
                                                        class="form-control" 
                                                        type="password" 
                                                        required="" 
                                                        placeholder="Password"/>
    	                                        </div>
    	                                    </div>
    	        
    	                                    <div class="form-group row">
    	                                        <div class="col-12">
    	                                            <div class="control">
    	                                                <input 
                                                            type="checkbox" 
                                                            class="checkbox-custom" 
                                                            id="customCheck1" checked/>
    	                                                <label 
                                                            class="checkbox-custom-label font-weight-normal" 
                                                            for="customCheck1">
                                                        I Accept <a href="/" class="text-primary">Terms and Conditions</a></label>
    	                                            </div>
    	                                        </div>
    	                                    </div>
    	        
    	                                    <div class="form-group text-center row m-t-20">
    	                                        <div class="col-12">
    	                                            <button 
                                                        class="btn btn-primary btn-block waves-effect waves-light" 
                                                        type="submit">Daftar</button>
    	                                        </div>
    	                                    </div>
    	        
    	                                    <div class="form-group m-t-10 mb-0 row">
    	                                        <div class="col-12 m-t-20 text-center">
    	                                            <a href="/" class="text-muted">Sudah punya akun?</a>
    	                                        </div>
    	                                    </div>
    	                                </form>
    	                            </div>
    	        
    	                        </div>
    	                    </div>                        
    	                </div>
    	            </div>
    	           {/* <!-- end row -->*/}
    	        </div>
    	    </div>
    	</div>
    </div>
  )
}

export default Daftar;