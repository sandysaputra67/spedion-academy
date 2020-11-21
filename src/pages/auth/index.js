import React from 'react';
import {Masuk , Daftar} from '../../components';
const SignIn = (props) => {
  return (
    <div>
    	<Masuk/>
    </div>
  )
}

const SignUp = (props) => {
  return (
    <div>
    	<Daftar/>
    </div>
  )
}

export {SignUp, SignIn};