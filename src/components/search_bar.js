import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// whenever we use state, we initialize it with a new object and assign it to this.state
		// we only do this when initializing state, not modifying it
		this.state = { term: ''};
	}

	onInputChange(term) { 
		this.setState({term});
		this.props.onSearchTermChange(term);
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

}

export default SearchBar;