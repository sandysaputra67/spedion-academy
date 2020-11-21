import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import CardComponents from './card-components';

export default class KursusViews extends Component {
	state = {

		gigs: [
			{
				id: 1,
				kursus: {

					thumbnail: "assets/img/co-3.jpg",
					link: "/course_detail",
					harga: "99.000",
					judul: "Teknik Dasar Hipnotis",
					views: 0,
					times: 20,
					review: 4.9

				},

				instruktur: {
					avatar: "assets/img/user-3.jpg",
					nama: "Alam Wibowo",
					materi: 42,

				}
			},

			{
				id: 2,
				kursus: {

					thumbnail: "assets/img/co-2.jpg",
					link: "/course_detail",
					harga: "157.000",
					judul: "Teknik Dasar Gendam",
					views: 0,
					times: 20,
					review: 4.9

				},

				instruktur: {
					avatar: "assets/img/user-2.jpg",
					nama: "Fitri Santika",
					materi: 24,

				}
			},

			{
				id: 3,
				kursus: {

					thumbnail: "assets/img/co-4.jpg",
					link: "/course_detail",
					harga: "217.000",
					judul: "Teknik Dasar NLP",
					views: 0,
					times: 25,
					review: 4.9

				},

				instruktur: {
					avatar: "assets/img/user-4.jpg",
					nama: "Karlina Paramita",
					materi: 42,

				}
			},

			{
				id: 4,
				kursus: {

					thumbnail: "assets/img/co-5.jpg",
					link: "/course_detail",
					harga: "217.000",
					judul: "Teknik Dasar NLP",
					views: 0,
					times: 25,
					review: 4.9

				},

				instruktur: {
					avatar: "assets/img/user-4.jpg",
					nama: "Karlina Paramita",
					materi: 42,

				}
			},

			{
				id: 5,
				kursus: {

					thumbnail: "assets/img/co-5.jpg",
					link: "/course_detail",
					harga: "217.000",
					judul: "Teknik Dasar NLP",
					views: 0,
					times: 25,
					review: 4.9

				},

				instruktur: {
					avatar: "assets/img/user-4.jpg",
					nama: "Karlina Paramita",
					materi: 42,

				}
			},

			{
				id: 6,
				kursus: {

					thumbnail: "assets/img/co-5.jpg",
					link: "/course_detail",
					harga: "217.000",
					judul: "Teknik Dasar NLP",
					views: 0,
					times: 25,
					review: 4.9

				},

				instruktur: {
					avatar: "assets/img/user-4.jpg",
					nama: "Karlina Paramita",
					materi: 42,

				}
			}
		]
	}

	render() {


			const onClickHandler = () => {
				sessionStorage.setItem('detail_kursus', JSON.stringify(this.state.gigs));

			}

			const daftarKursus = this.state.gigs;
			const tampilKursus = daftarKursus.map(data => {

			const { thumbnail, link, harga, judul, views, times, review } = data.kursus;
			const { nama, materi, avatar } = data.instruktur;

			return (

				<>
					
					<div className="col-lg-4 col-md-6">
						<div className="education_block_grid style_2" onClick={onClickHandler}>

							<div className="education_block_thumb n-shadow">

								<Link to={link}>
									<img src={thumbnail} className="img-fluid" alt={judul} />
								</Link>

								<div className="cources_price">Rp {harga}</div>
							</div>

							<div className="education_block_body">
								<h4 className="bl-title">
									<Link to={link}>{judul}</Link>
								</h4>
							</div>

							<div className="cources_info_style3">
								<ul>
									<li><i className="ti-eye mr-2"></i> {views} Views</li>
									<li><i className="ti-time mr-2"></i>{times} Menit</li>
									<li><i className="ti-star text-warning mr-2"></i>{review} Reviews</li>
								</ul>
							</div>

							<div className="education_block_footer">
								<div className="education_block_author">
									<div className="path-img">
										<Link to="instructor-detail.html">
											<img src={avatar} className="img-fluid" alt={nama} />
										</Link>
									</div>
									<h5><Link to={link}>{nama}</Link></h5>
								</div>
								<div className="foot_lecture"><i className="ti-control-skip-forward mr-2"></i>{materi} Materi</div>
							</div>

						</div>
					</div>

				</>

			)
		})
		return (
			<div>
				
				<section className="pt-4">
					<div className="container">

						<div className="row">

							<div className="col-lg-12 col-md-12 col-sm-12">

								<div className="row">

									{tampilKursus}

								</div>

								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12">


										<div className="row">
											<div className="col-lg-12 col-md-12 col-sm-12 text-center">
												<button type="button" className="btn btn-loader">Load More<i className="ti-reload ml-3"></i></button>
											</div>
										</div>

									</div>
								</div>


							</div>

						</div>


					</div>
				</section>

			</div>
		);
	}
}
