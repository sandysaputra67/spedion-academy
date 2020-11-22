import React, {StrictMode} from 'react';
import LayoutStudents from "./LayoutStudents";

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

export default Students;