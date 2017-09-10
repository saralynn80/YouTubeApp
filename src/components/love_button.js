import React, { Component, PropTypes } from 'react';

class Button extends Component {
	static PropTypes = {
		text: PropTypes.string.isRequired,
		reaction: PropTypes.string,
		onReaction: PropTypes.func
	}
	state = ({color: '#ecf0f1'})

	handleClick = () => {
		this.props.onReaction(this.props.reaction)
		// toggle button color
		this.setState({color: this.state.color === '#e74c3c' ? '#ecf0f1' : '#e74c3c'})

	}

	render() {

		const style = {
			backgroundColor: '#3498db',
			color: this.state.color,
			width: 100,
			fontSize: 18,
			border: 'none'
		}
		return (
			<button onClick={this.handleClick} style={style}>{this.props.text}</button>
		)
	}

}

export default Button;