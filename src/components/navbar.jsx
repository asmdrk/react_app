import React, { Component } from "react";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar bg-body-tertiary">
				<div classname="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar{" "}
						<span className="badge badge-pill badge-secondary">
							{this.props.numCounters}
						</span>
					</a>
				</div>
			</nav>
		);
	}
}

export default NavBar;
