import React, { StrictMode } from 'react';
import { MainApp } from './routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = (props) => {
  return (
  	<StrictMode>
  		
  	    <Router>
  	        <>
  	            {/* <Route exact path='/admin' component={Dashboard}/> */}
  	            <Route exact path='/' component={MainApp}/>
  	        </>
  	  
  		</Router>
  	</StrictMode>
  )
}

export default App;