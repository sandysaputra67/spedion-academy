import React, { useContext, useState } from 'react';
// import { useList } from 'react-firebase-hooks/database';
import { CrudContext } from '../../../utils';

const FormSeminar =()=> {
const { CreateDb } = useContext(CrudContext)
 
const [ jadwal, setJadwal ] = useState(null);
const [ event, setEvent ] = useState('');
const [ tanggal, setTanggal ] = useState('');
// const [snapshot, loading, error] = useList();

const handleTambahSeminar = () => {
	if(!event && !tanggal) return alert("kosong!");

	const jadwal_baru = {
		...jadwal, seminar: event, date : tanggal
     }
   
    setJadwal(jadwal_baru)
	CreateDb(jadwal_baru)
	setJadwal(null)
	setEvent('')
	setTanggal('')
}

const handleSubmitSeminar = (e) => {
	e.preventDefault()
	
}

        return (
            <>
            	<h2>Jadwal Seminar Online</h2>
            	<form onSubmit={handleSubmitSeminar}>
            	<input type='text' 
	            	value={event} name='Event' 
	            	onChange={(e)=>setEvent(e.target.value)} placeholder='Event ...'/>

            	<input type='text' 
	            	value={tanggal} name='Tanggl' 
	            	onChange={(e)=>setTanggal(e.target.value)} placeholder='Tanggal...'/>
	            </form>
	            <button onClick={()=>handleTambahSeminar()}>Tambah Seminar</button>

            </>
         );
    
}

export default FormSeminar;
