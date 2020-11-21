import React, { useState, useEffect } from 'react';
// import { CrudContext } from '../../../utils';
import { db } from '../../../utils/services/firebase';


const JadwalSeminar = (props) => {
	// const {DataRoot} = useContext(CrudContext);
	const [bacaJadwal, setBacaJadwal] = useState([]);

	useEffect(()=>{
		const jadwal_seminar = [];
		db.ref('spedion/jadwal').once('value', snap=>{
		snap.forEach(baca=>{
			const data = baca.val();
			const { seminar, date, tempat, desc} = data;
			const nilai = {
				key : baca.key,
				seminar,
				date,
				tempat,
				desc,
			}
			jadwal_seminar.push(nilai)
		})
		})
		setBacaJadwal(jadwal_seminar)
	}, [])

		if(!bacaJadwal) return;
		

  return (
                <>
                <div className='container'>
        			<div className='jumbotron'>
        				<h2 className="text-center">Jadwal Seminar Online</h2>
        			</div>
                	<>
    	            	<table className='table'>
    	            		<thead className='thead-dark'>
    	            			<tr>
    	            				<th>Seminar</th>
    	            				<th>Tanggal</th>
    	            				<th>Kota</th>
    	            				<th>Deskripsi</th>
    	            			</tr>
    	            		</thead>
    	            		<tbody>
    	            		
    	            		{
    	            			bacaJadwal.map((jadwal)=>{
    	            				console.log(jadwal)
    	            				return (
    	            					<>
    	            					<tr >
    	            					<td>{jadwal.seminar}</td>
    	            					<td>{jadwal.date}</td>
    	            					<td>{jadwal.tempat}</td>
    	            					<td>{jadwal.desc}</td>
    	            					</tr>
    	            					</>
    	            					
    	            				)
    	            			})

    	            		}

    	            		
    	            			
    	            		</tbody>
    	            	</table>	
    	            
    	         	</>
    	         </div>
                </>
  )
}

export default JadwalSeminar;