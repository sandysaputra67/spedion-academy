import React, { StrictMode } from 'react';
import Alert from './molecules/alert';
import Navigation from './molecules/navigation';
const Header = (props) => {
  return (
    <StrictMode>
    	<Alert/>
    	<Navigation/>
    </StrictMode>
  )
}

export default Header;