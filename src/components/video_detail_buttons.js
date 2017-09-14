import React, { Component, PropTypes } from 'react';

class VideoDetail extends Component {
	static PropTypes = {
		video: PropTypes.object.isRequired,
		onReaction: PropTypes.func
	}
	
	onReaction = (reactionType) => {
		alert('hi ', reactionType)
	}
	
	render() {
		const { video, onReaction} = this.props

		const videoId = video.hasOwnProperty('id') ? video.id.videoId : null;
		const url = videoId === null ? null : `https://www.youtube.com/embed/${videoId}`;

		const style = {
			base: {
				display: 'flex',
				flexDirection: 'column',
				border: '1px solid green',
				width: '70%'
			}
		}
		
		return ( <div style={style.base}>
		{
			videoId === null ? <div> Loading Videos... </div> :
			 <div>
				<div>
					<iframe src={url}></iframe>
				</div>
				<div>
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
					<div>
						<button onClick={ () => onReaction('likes') }>&#128077;</button>
						<p>{video.likes}</p>
					</div>
					<div>
						<button onClick={ () => this.onReaction('hearts') }>&hearts;</button>
						<p>{video.hearts}</p>
					</div>
				</div>
			</div> 
		}
		</div>
		)
	}

}

export default VideoDetail 