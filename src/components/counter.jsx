import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
		tags: ["tag1", "tag2", "tag3"],
	};
	render() {
		return (
			<div>
				<span className={this.getBadgeClass()}>{this.formatCount()}</span>{" "}
				<button className="btn btn-secondary btn-sm">Increment</button>
				<ul>{this.formatTags()}</ul>
			</div>
		);
	}

	getBadgeClass() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;

		return count === 0 ? "Zero" : count;
	}

	formatTags() {
		const { tags } = this.state;
		return tags.length === 0 ? (
			<p>"There no tags"</p>
		) : (
			this.state.tags.map((tag) => <li key={tag}>{tag}</li>)
		);
	}
}
export default Counter;
