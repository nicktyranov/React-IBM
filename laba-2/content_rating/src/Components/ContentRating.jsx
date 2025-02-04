import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
	constructor() {
		super();
		this.state = {
			likes: 0,
			dislikes: 0,
			totalReactions: 0,
			handleLike: () => {
				this.setState((prev) => ({
					likes: prev.likes + 1,
					totalReactions: prev.totalReactions + 1
				}));
			},
			handleDislike: () => {
				this.setState((prev) => ({
					dislikes: prev.dislikes + 1,
					totalReactions: prev.totalReactions + 1
				}));
			}
		};
	}

	render() {
		return (
			<div className="content-rating">
				<div className="content-rating">
					<p>//Add text here</p>
				</div>
				<div className="rating-buttons">
					<button className="like-button" onClick={this.state.handleLike}>
						Like ({this.state.likes})
					</button>
					<button className="dislike-button" onClick={this.state.handleDislike}>
						Dislike ({this.state.dislikes})
					</button>
					{this.state.totalReactions ? this.state.totalReactions : ''}
				</div>
			</div>
		);
	}
}

export default ContentRating;
