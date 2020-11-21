import React, { Component } from 'react';

export default class TaglineComponent extends Component {
	state = {
		 tagline : {

            tagline_a : {
                text_a: "100,000 Kursus Online",
                state_a: "Menyediakan Ribuan Materi Kursus Secara Online"
            },

            tagline_b : {
                text_b: "Expert Instruktur",
                state_b: "Belajar Online Bersama Instruktur Proffesional Secara Intensif"

            },

            tagline_c : {
                text_c: "Lifetime Akses",
                state_c: "Akses Semua Materi 24 Jam Secara Realtime Kapanpun dan Dimanapun"
            }

        }
	}

	render() {

	const { tagline_a, tagline_b, tagline_c } = this.state.tagline;
    // TAGLINE A
    const { text_a, state_a } = tagline_a;

    // TAGLINE B
    const { text_b, state_b } = tagline_b;

    // TAGLINE C
    const { text_c, state_c } = tagline_c;

		return (
		    <div className="trips_wrap full light-colors">
		        <div className="container">
		            <div className="row m-0">

		                <div className="col-lg-4 col-md-4 col-sm-12" id="tagline_a">
		                    <div className="trips">
		                        <div className="trips_icons">
		                            <i className="ti-video-camera"></i>
		                        </div>
		                        <div className="trips_detail">
		                            <h4>{text_a}</h4>
		                            <p>{state_a}</p>
		                        </div>
		                    </div>
		                </div>

		                <div className="col-lg-4 col-md-4 col-sm-12" id="tagline_b">
		                    <div className="trips">
		                        <div className="trips_icons">
		                            <i className="ti-medall"></i>
		                        </div>
		                        <div className="trips_detail">
		                            <h4>{text_b}</h4>
		                            <p>{state_b} </p>
		                        </div>
		                    </div>
		                </div>

		                <div className="col-lg-4 col-md-4 col-sm-12" id="tagline_c">
		                    <div className="trips none">
		                        <div className="trips_icons">
		                            <i className="ti-infinite"></i>
		                        </div>
		                        <div className="trips_detail">
		                            <h4>{text_c}</h4>
		                            <p>{state_c}</p>
		                        </div>
		                    </div>
		                </div>

		            </div>
		        </div>
		    </div>
		)
	}
}
