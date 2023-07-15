import React, { Component } from "react";

class Counter extends Component {
	state = {
		value: this.props.value,
		tags: ["tag1", "tag2", "tag3"],
	};

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};
	handleDecrement = () => {
		this.setState({ value: this.state.value - 1 });
	};

	render() {
		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClass()}>{this.formatCount()}</span>{" "}
				<button
					className="btn btn-secondary btn-sm"
					onClick={this.handleIncrement}
				>
					Increment
				</button>
				<button
					className="btn m-2 btn-secondary btn-sm"
					onClick={this.handleDecrement}
				>
					Decrement
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
				<ul>{this.formatTags()}</ul>
			</div>
		);
	}

	getBadgeClass() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.state;

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
