import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClass()}>{this.formatCount()}</span>{" "}
				<button
					className="btn btn-secondary btn-sm"
					onClick={() => this.props.onIncrement(this.props.counter)}
				>
					Increment
				</button>
				<button
					className="btn m-2 btn-secondary btn-sm"
					onClick={() => this.props.onDecrement(this.props.counter)}
				>
					Decrement
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClass() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;

		return count === 0 ? "Zero" : count;
	}

	// formatTags() {
	// 	const { tags } = this.state;
	// 	return tags.length === 0 ? (
	// 		<p>"There no tags"</p>
	// 	) : (
	// 		this.state.tags.map((tag) => <li key={tag}>{tag}</li>)
	// 	);
	// }
}
export default Counter;
