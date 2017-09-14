import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem 
					onVideoSelect={props.onVideoSelect}
					key={video.etag}
					video={video} />
	});

	const style = {
		base: {
			display: 'flex',
			flexDirection: 'column',
			width: '25%',
			border: '1px solid red',
			listStyle: 'none',
			padding: 10
		}
	}

	return (
		<ul style={style.base}>
			{videoItems}
		</ul>
	);
};

export default VideoList;