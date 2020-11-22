import React from 'react';
import {

	LayoutSidebar, LayoutDashboard, LayoutContentBoard

} from '../../../components';


const LayoutStudents = (props) => {
	return (
		<>
			<LayoutDashboard>
				<LayoutSidebar/>

				<LayoutContentBoard>
					
					{props.children}

				</LayoutContentBoard>

			</LayoutDashboard>
		</>
	)
}

export default LayoutStudents;