import React, { useContext, useState } from 'react';
// import { useList } from 'react-firebase-hooks/database';
import JadwalSeminar from './jadwal';
import { CrudContext } from '../../../utils';

const FormSeminar =()=> {
const { PushData } = useContext(CrudContext)
const [ jadwal, setJadwal ] = useState({});
const [ event, setEvent ] = useState('');
const [ tanggal, setTanggal ] = useState('');
const [ deskripsi, setDeskripsi ] = useState('');
const [ tempat, setTempat ] = useState('')
// const [snapshot, loading, error] = useList();

const handleTambahSeminar = () => {
	if(!event && !tanggal) return alert("kosong!");

	const jadwal_baru = {
		...jadwal, seminar: event, date : tanggal, tempat: tempat, desc : deskripsi
     }
   
    setJadwal(jadwal_baru)
	PushData('spedion/jadwal', jadwal_baru)
	.then(()=>{
		setJadwal({})
		setEvent('')
		setTanggal('')
		setDeskripsi('')
		setTempat('')
	})
	
}

const handleSubmitSeminar = (e) => {
	e.preventDefault()
	
}


        return (
            <>
            <JadwalSeminar/>
            <div className='container'>
    			<div className='panel jumbotron'>
    				<h2 className="text-center heading">Buat Jadwal Seminar</h2>
    			</div>
            	<>
	            		
	            	<form 
	            		onSubmit={handleSubmitSeminar}>
		            	<div className='row'>
			            	<div className='col-md-6'>
				            	<div className='form-group'>
					            	<input 
					            		className='form-control'
					            		type='text'
					            		value={event} name='Event'
					            		onChange={(e)=>setEvent(e.target.value)} 
					            		placeholder='Event ...'
					            		/>
								</div>
								
							</div>
							<div className='col-md-6'>
				            	<div className='form-group'>
					            	<input
					            		
			                     		className="form-control mb-2"
			                     		type='text' 
			         	            	value={tanggal} name='Tanggal' 
			         	            	onChange={(e)=>setTanggal(e.target.value)} 
			         	            	placeholder='Tanggal...'/>
								</div>
								
							</div>

							<div className="col-md-6">
								<div className='form-group'>
									<input
										className='form-control'
										type='text'
										value={tempat}
										onChange={(e)=>setTempat(e.target.value)}
										placeholder='Tempat Seminar...'
									/>

								</div>
							</div>
							<div className="col-md-6">
								<div className='form-group'>
									<input
										className='form-control'
										type='file'
										placeholder='Tempat Seminar...'
										disabled
									/>

								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12'>
								
								<textarea
									className='form-control'
									value={deskripsi} 
									onChange={(e)=>setDeskripsi(e.target.value)}
									
									/>
							</div>
						</div>
					
							<div className='text-center'>
								<button
									style={{margin: '2rem 0rem'}} 
				             		className='btn btn-primary row-md-12'
					            	onClick={()=>handleTambahSeminar()}>
					            	Tambah Jadwal
					    		 </button>
					    	</div>
				    							
		            </form>    
	         	</>
	         </div>
            </>
         );
    
}

export default FormSeminar;