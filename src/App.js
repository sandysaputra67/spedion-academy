import React, { StrictMode } from 'react';
import { MainApp, StudentDash } from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = (props) => {

	return (
		<StrictMode>
			<Router>
				<Switch>
				{/*== START == ROUTING ULANG CHILD COMPONENT MENCEGAH HALAMAN KOSONG */}
					<Route exact path={
						["/", "/masuk", "/daftar", "/seminar", "/market", "/instruktur", "/kursus"]
						}>
						<MainApp/>
					</Route>
				
				{/* == ENDING == ROUTING ULANG CHILD COMPONENT MENCEGAH HALAMAN KOSONG */}

					{/*== START == ROUTING ULANG CHILD COMPONENT MENCEGAH HALAMAN KOSONG */}	
					<Route exact path={["/admin", "/profile"]}>
						<StudentDash />
					</Route>
					{/* == ENDING == ROUTING ULANG CHILD COMPONENT MENCEGAH HALAMAN KOSONG */}

					
				</Switch>
			</Router>
			
		</StrictMode>

		

	)
}

export default App;