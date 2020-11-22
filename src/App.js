import React, {StrictMode} from 'react';
import { MainApp, StudentDash } from './routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = (props) => {
  return (
	  <StrictMode>
		  <Router>
			  <Route exact path='/' render={() => <MainApp />} />
			  <Route exact path='/admin' render={() => <StudentDash />} />
		  </Router>
	  </StrictMode>
  )
}

export default App;