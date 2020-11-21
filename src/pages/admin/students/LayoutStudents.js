import React from 'react';
import {

	SidebarMenu, ContentWrapper, TopBarMenu,
	LayoutSidebar, LayoutTopBar, LayoutDashboard, LayoutContentBoard

} from '../../../components';


const LayoutStudents = (props) => {
	return (
		<>
			<LayoutDashboard>
				<LayoutSidebar>
					<SidebarMenu />
				</LayoutSidebar>

				<LayoutContentBoard>

					<LayoutTopBar>
						<TopBarMenu />
					</LayoutTopBar>

					<ContentWrapper>
						{props.children}
					</ContentWrapper>

				</LayoutContentBoard>

			</LayoutDashboard>
		</>
	)
}

export default LayoutStudents;