import React, { Component } from 'react';
import ChildBanner from './molecules/banner';

export default class Banner extends Component {
		state = {

			  banner: {
	            img : {
	                link_img: "assets/img/6518.png",
	                alt: "Spedion Academy"
	            },
	            info : {
	                title : "Spedion Academy",
	                desc : "Tempat Belajar Berbagai Bidang Ilmu Pemberdayaan Diri Kapanpun dan Dimanapun",
	                
	            },

	            tombol : {
	                link_btn: "/kursus",
	                text: "Lihat Semua Kursus"
	            }
	        },
		}
		render() {
			

        return (
            <ChildBanner banner={this.state.banner}/>
        );
    }
}

