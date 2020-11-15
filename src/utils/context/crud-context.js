import React, { createContext } from  'react';
import { db } from '../services/firebase'

const CrudContext = createContext();

// Membuat Referensi Data
const dbRef = db.ref('tutorial');

const ReadDb = () => {
	return dbRef
}

const CreateDb = (data) =>{
	return dbRef.push(data)
}

const UpdateDb = (key, data) => {
	return dbRef.child(key).update(data)
}

const DeleteDb = (key) => {
	return dbRef.child(key).remove();
}

const DeleteAll = () => {
	return dbRef.remove();
}


const CrudContextProvider = ({children}) => {
	return(
		<>
		 <CrudContext.Provider 
		 	value={{ ReadDb, CreateDb, UpdateDb, DeleteDb, DeleteAll }}>
		 {children}
		 </CrudContext.Provider>
		</>
		)
}

export {CrudContext, CrudContextProvider}