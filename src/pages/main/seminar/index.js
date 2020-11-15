import React from 'react';
import FormSeminar from './form'
import { CrudContextProvider } from '../../../utils';

const SeminarOnline =()=> {

        return (
            <CrudContextProvider>
     
            <FormSeminar/>

            </CrudContextProvider>
         );
    
}

export default SeminarOnline;
