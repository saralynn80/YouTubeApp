import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// whenever we use state, we initialize it with a new object and assign it to this.state
		// we only do this when initializing state, not modifying it
		this.state = { term: ''};
	}

	render() {
		return (
		<div>
			<input onChange={event => this.setState({ term: event.target.value })} />
		</div>
		);
	}
}

export default SearchBar;