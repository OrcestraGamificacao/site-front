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
			<div>
				<div className="text-center">
					<h3>Conheça o blog</h3>
				</div>
				<div className="row mx-auto">
					<div className="col-sm-10 offset-sm-2 col-xs-10 offset-xs-2">
						<div className="card col-sm-6 col-xs-6 card-center-left">
							<img className="card-img-top image w-100" src={cat1} alt="Card image cap" />
							<div className="card-body p-5">
								<h5 className="card-title">Gatos para adoção</h5>
								<p className="card-text">Falar com Toyoshima</p>
							</div>
						</div>
						<div className="col-sm-6 col-xs-6">
							<div className="row">
								<div className="card w-100 card-center-right">
									<img className="card-img-top smaller-image w-100" src={cat2} alt="Card image cap" />
									<div className="card-body p-5">
										<h5 className="card-title">Gatos para adoção</h5>
										<p className="card-text">Falar com Toyoshima</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div class="card card-center-right">
									<img class="card-img-top" src={cat3} alt="Card image cap" />
									<div class="card-body">
										<h5 className="card-title">Gatos para adoção</h5>
										<p class="card-text">Falar com Toyoshima.</p>
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