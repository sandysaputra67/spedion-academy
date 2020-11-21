import React from 'react';
import LayoutStudents from "./LayoutStudents";
import { ProfileStudent } from '../../../components';

const Students = (props) => {

  return (
    <div>
      <>
        <LayoutStudents>
          <ProfileStudent />
        </LayoutStudents>
      </>
    </div>
  )
}

export default Students;