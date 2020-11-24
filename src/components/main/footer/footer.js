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

            <footer class="udlite-footer ud-app-loader ud-app-loaded" data-module-id="common/udlite/desktop" data-module-args="{&quot;ufbNotice&quot;:{&quot;placement&quot;:&quot;footer-ad&quot;,&quot;link&quot;:&quot;https://business.sekolahpemberdayaandiri.com/request-demo/?ref=footer-ad\u0026locale=id_ID&quot;},&quot;localeSelect&quot;:{&quot;currentLanguageId&quot;:&quot;id_ID&quot;}}" data-module-priority="-10">
            
            <div class="ud-component--footer--bai-banner">
            <div class="footer-section bai-banner--bai-banner--25Ewk">
            <div><div class="udlite-heading-lg">
             mengajar di spedion academy
            <div class="udlite-text-md bai-banner--subtitle--36Adc">Buat kursus, jangkau siswa di seluruh indonesia </div>
            </div>
            </div>
            <div class="bai-banner--button-container--32up8" align="right" color="blue"><a href="/teacher/?ref=bai-sub-footer" class="udlite-btn udlite-btn-large udlite-btn-primary udlite-heading-md"><span>Mengajar di Spedion academy</span></a></div>
            </div>
            </div>
            </footer>

        
          
    
       
        
           
            

                <div className="footer-bottom">
                
                    <div className="container">
                    <div class="footer-section footer-section-main" align="right">
                    <div class="links-and-locale">
                    <select required id="u667-form-group--5" class="udlite-select udlite-text-sm udlite-select-with-icon" align="center"><option value="en_US">English</option><option value="id_ID">Bahasa Indonesia</option></select>
                    <div class="udlite-select-icon-container udlite-select-icon-right">
                    </div>
                    </div>
                    </div>
                    <ul class="unstyled-list list-column">
                    <li>
                    <a class="link udlite-text-sm ud-ufb-notice-click-event" href="https://business.sekolahpemberdayaandiri.com/?ref=footer&amp;mx_pg=home-page&amp;locale=id_ID" target="_blank" rel="noopener" data-placement="footer">
                    spedion for Business
                    </a>
                    </li>
                    <li>
                    <a class="link udlite-text-sm" href="/teacher/?ref=teach_footer">
                    Mengajar di Spedion academy
                    </a>
                    </li>
                    <li>
                    <a class="link udlite-text-sm" href="https://about.sekolahpemberdayaandiri.com/?locale=id-id">
                    Tentang kami
                    </a>
                    </li>
                    <li>
                    <a class="link udlite-text-sm" href="https://about.sekolahpemberdayaandiri.com/company?locale=id-id#offices">
                    Hubungi kami
                    </a>
                    </li>
                    </ul>
                    <ul>
                    </ul>
                    <ul class="unstyled-list link-column" align="justify">
                    <li>
                    <a class="link udlite-text-sm" href="https://blog.sekolahpemberdayaandiri.com/?ref=footer">
                    Blog
                    </a>
                    </li>
                    <li>
                    <a class="link udlite-text-sm" href="/support/">
                    Bantuan
                </a>
                    </li>
                    </ul>

                    
                    <ul class="unstyled-list list-column" align="left">
                    <li>
                    <a class="link udlite-text-sm" align="left" href="/terms/">
                    Persyaratan
                    </a>
                    </li>
                    <li>
                    <a class="link udlite-text-sm" href="/terms/privacy/">  
                    Kebijakan privasi dan kebijakan cookie
                    </a>
                    </li>
                    <li>
                    <a class="link udlite-text-sm" href="/id/popular-courses/">
                    Kursus unggulan
                    </a>
                    </li>
                    </ul>
                    
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
