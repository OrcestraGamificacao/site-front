import React, { Component } from 'react'
import './blogPosts.css';

class BlogPosts extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const cat1 = require('../../assets/images/cat1.jpg')
		const cat2 = require('../../assets/images/cat2.jpg')
		const cat3 = require('../../assets/images/cat3.jpg')
		return (
			<div className="container">
				<div className="blog-title-container text-center">
					<h3 className="blog-title">Conheça o blog</h3>
				</div>
				<div className="row">
					<div className=" col-10 offset-1 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1">
						<div className="row h-500">
							<div className="col-12 col-sm-5 col-xs-5">
								<div className="row upper-card">
									<div className="col-12 col-md-12 col-xs-12">
										<a href="https://www.google.com.br" target="_blank">
											<div className="card bigger-card">
													<img className="card-img-top image w-100" src={cat1} alt="Card image cap" />
													<div className="card-body bigger-body text-center vertical-middle">
														<h5 className="card-title bigger-text">Postagem de Destaque</h5>
													</div>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-7 col-xs-7">
								<div className="row upper-card">
									<div className="col-12 col-md-10 offset-md-1">
										<a href="https://www.google.com.br" target="_blank">
												<div className="card smaller-card">
													<img className="card-img-top smaller-image w-100" src={cat2} alt="Card image cap" />
													<div className="card-body smaller-body text-center">
														<h5 className="card-title">Postagem de Destaque</h5>
													</div>
												</div>
										</a>
									</div>
								</div>
								<div className="row">
									<div className="col-12 col-md-10 offset-md-1">
										<a href="https://www.google.com.br" target="_blank">
											<div class="card smaller-card">
												<img class="card-img-top smaller-image w-100" src={cat3} alt="Card image cap" />
												<div class="card-body smaller-body text-center">
													<h5 className="card-title">Postagem de Destaque</h5>											
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default BlogPosts