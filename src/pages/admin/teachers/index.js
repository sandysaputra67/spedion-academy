import React, { StrictMode } from 'react';
import LayoutTeachers from "./LayoutTeachers";
import  { Profile }from '../../../components';


const Teachers = (props) => {
  return (
    <StrictMode>
      <LayoutTeachers>

     
    	  <Profile/>


      </LayoutTeachers>
     
    </StrictMode>
  )
}

export default Teachers;