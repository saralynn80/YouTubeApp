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
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;