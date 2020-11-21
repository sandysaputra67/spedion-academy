import React, { createContext } from  'react';
import { db, firestore } from '../services/firebase'

const CrudContext = createContext();

// Membuat Referensi Data
// const dataRef = 'spedion';

const DataRoot = (root) => {
const dbRoot = db.ref(root);
	return dbRoot
}

const SetKeyData = (ref, key, data) => {
	return DataRoot(ref).child(key).set(data)
}

const PushData = (ref, data) =>{
	return DataRoot(ref).push(data)
}

const UpdateKeyData = (ref, key, data) => {
	return DataRoot(ref).child(key).update(data)
}

const DeleteKey = (ref, key) => {
	return DataRoot().child(key).remove();
}

const DeleteAll = (ref) => {
	return DataRoot(ref).remove();
}


const CrudContextProvider = ({children}) => {
	return(
		<>
		 <CrudContext.Provider 
		 	value={{ 
		 		DataRoot, SetKeyData, PushData, 
		 		UpdateKeyData, DeleteKey, DeleteAll, firestore }}>
		 {children}
		 </CrudContext.Provider>
		</>
		)
}

export {CrudContext, CrudContextProvider}