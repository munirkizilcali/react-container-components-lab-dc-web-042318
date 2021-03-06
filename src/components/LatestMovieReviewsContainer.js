import React, { Component } from "react";
import "isomorphic-fetch";

import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
	"https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
	`api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.fetchMovies = this.fetchMovies.bind(this);
		this.state = {
			reviews: []
		};
	}

	fetchMovies() {
		fetch(URL)
			.then(resp => resp.json())
			.then(json => {
				let prevState = this.state;
				this.setState((prevState, props) => ({
					reviews: json.results
				}));
			});
	}

	componentDidMount() {}

	render() {
		this.fetchMovies();
		return (
			<div className="latest-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />{" "}
			</div>
		);
	}
}
