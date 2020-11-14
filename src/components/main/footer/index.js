import React, { Component } from 'react';

export default class Footer extends Component {
	 state = {
        footer: {
            text_footer: "CV. Pemberdayaan Diri",
            link_social: {
                facebook : "/",
                instagram : "/",
                linkedin : "/",
                tweeter : "/"
            }
        }

    }

	render() {

	const {text_footer, link_social} = this.state.footer;
    const {facebook, instagram, linkedin, tweeter} = link_social;
		 return (
        <div>
            <footer className="dark-footer skin-dark-footer">
                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-6 col-md-6">
                                <p className="mb-0"> &copy; 2020 {text_footer}</p>
                            </div>

                            <div className="col-lg-6 col-md-6 text-right">
                                <ul className="footer-bottom-social">
                                    <li><a href={facebook}><i className="ti-facebook"></i></a></li>
                                    <li><a href={tweeter}><i className="ti-twitter"></i></a></li>
                                    <li><a href={instagram}><i className="ti-instagram"></i></a></li>
                                    <li><a href={linkedin}><i className="ti-linkedin"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
	}
}
