import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Button from './components/love_button';

const API_KEY = 'AIzaSyCxaM8_iwrErYJtOdemm4TkDX8uhyhkY6w';

class App extends Component {
	constructor(props) {
		super(props);

		//this.state = { videos: [] };
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('cats');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			const enrichedVideos = videos.map(video => {
				video.likes = 0;
				video.hearts = 0;
				return video
			})
			console.log(videos[0])
			this.setState({ 
				videos: enrichedVideos,
				selectedVideo: videos[0]
			});
		});
	}

	handleSelectedVideo = (videoSelectedFromSideList) => {
		console.log(videoSelectedFromSideList)
		this.setState({selectedVideo: videoSelectedFromSideList})

	}

	// TODO: sara look at this and figure what it is doing....
	handleReaction = (reactionType) => {
		console.log('handleReaction called with: ', reactionType);
		// make copy of item in state, so we can make changes to it without affecting state
		// you cant directly mutate state if you want to make changes make a copy and then use this.setState to push your changes to state object
		const currentVideo = { ...this.state.selectedVideo}
		const copyOfVideos = [ ...this.state.videos]

		// find the selectedVideo in the video list and update its reaction type by 1
		const updatedVideoList = copyOfVideos.map(video => {
			if (video.id.videoId === currentVideo.id.videoId) {
				video[reactionType] += 1
			}
			return video
		})
		
		// update the current video
		currentVideo[reactionType] += 1

		// now we can update state bc we have made the changes we want to the current video
		this.setState({selectedVideo: currentVideo, videos: updatedVideoList})
	}
	

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return(
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={ this.handleSelectedVideo }
					videos={this.state.videos} />
				<Button text='&hearts;' reaction={'hearts'} onReaction={this.handleReaction}/>
				<span> | </span>
				<Button text='&#128077;' reaction={'likes'} onReaction={this.handleReaction}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));