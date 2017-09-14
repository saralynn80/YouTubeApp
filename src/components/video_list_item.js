import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	const style = {
		base: {
			cursor: 'pointer',
			lineHeight: 1.3,
			fontSize: 15,
			marginBottom: 20
		},
		image: {
			width: '100%',
			marginBottom: 10
		}
	}
	return (
		<li style={style.base} className="videoListItem" onClick={() => onVideoSelect(video)}>
			<div>
				<img style={style.image} src={imageUrl} />

				<div>
					<div>{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;