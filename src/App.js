import React, { StrictMode } from 'react';
import { MainApp, StudentDash } from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = (props) => {
	const arraysRoutegMainApp = ["/", "/masuk", "/daftar", "/seminar", "/market", "/instruktur", "/kursus"]; 
	const arraysRouteDashboard = ["/admin", "/pofile"];
	return (
		<StrictMode>
			<Router>
				<Switch>
					{/*== START == ROUTING ULANG CHILD COMPONENT MENCEGAH HALAMAN KOSONG */}
					<Route exact path={arraysRoutegMainApp}>
						<MainApp/>
					</Route>
			

					
					<Route exact path={arraysRouteDashboard}>
						<StudentDash />
					</Route>
					{/* == ENDING == ROUTING ULANG CHILD COMPONENT MENCEGAH HALAMAN KOSONG */}

					
				</Switch>
			</Router>
			
		</StrictMode>

		

	)
}

export default App;