import React, { StrictMode } from 'react';
import LayoutStudents from "./LayoutStudents";
import { NotifStudent } from '../../../components';
const Students = (props) => {

  return (
    <div>
      <StrictMode>
        <LayoutStudents>
          {props.children}
        </LayoutStudents>
      </StrictMode>
    </div>
  )
}


export const NotificationStudents = (props) => {

  return (
    <div>
      <StrictMode>
        <Students>
          <NotifStudent />
        </Students>
      </StrictMode>
    </div>
  )
}



export default Students;