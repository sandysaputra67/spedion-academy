import React, { StrictMode } from 'react';
import { MainApp, StudentDash } from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = (props) => {
	const arraysRoutegMainApp = ["/", "/masuk", "/daftar", "/seminar", "/market", "/instruktur", "/kursus"]; 
	const arraysRouteDashboard = ["/student", "/profile", "/chat"];

	

	return (
		<StrictMode>
			<Router>
				<Switch>
					{/*== START == ROUTING ULANG CHILD COMPONENT MENCEGAH HALAMAN KOSONG */}
					<Route exact forceRefresh={true} path={arraysRoutegMainApp}>
						<MainApp/>
					</Route>
			

					
					<Route exact forceRefresh={true} path={arraysRouteDashboard}>
						<StudentDash />
					</Route>


					
					{/* == ENDING == ROUTING ULANG CHILD COMPONENT MENCEGAH HALAMAN KOSONG */}

					
				</Switch>
			</Router>
			
		</StrictMode>

		

	)
}

export default App;