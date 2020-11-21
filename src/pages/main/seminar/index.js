import React from 'react';
import FormSeminar from './form'
import { CrudContextProvider } from '../../../utils';

const SeminarOnline =()=> {

        return (
            <div style={{ height: '100vh' }} className="justify-content-center content-center">
                <h3 className="jumbotron text-center">Jadwal Seminar Online</h3>
            </div>
         );
    
}

export const SeminarForm = () => {
    return (
        <CrudContextProvider>

            <FormSeminar />

        </CrudContextProvider>
    )
}


export default SeminarOnline;
