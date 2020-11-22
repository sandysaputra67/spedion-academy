import React, { StrictMode } from 'react';
import {

	LayoutSidebar, LayoutDashboard, LayoutContentBoard

} from '../../../components';


const LayoutStudents = (props) => {
	return (
		<StrictMode>
			<LayoutDashboard>
				<LayoutSidebar/>

				<LayoutContentBoard>
					
					{props.children}

				</LayoutContentBoard>

			</LayoutDashboard>
		</StrictMode>
	)
}

export default LayoutStudents;