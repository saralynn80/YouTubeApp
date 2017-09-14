import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail_buttons';

const API_KEY = 'AIzaSyCxaM8_iwrErYJtOdemm4TkDX8uhyhkY6w';

class App extends Component {
	constructor(props) {
		super(props);

		// Creating the structure of the state of the component and putting in placeholder data
		this.state = {
			videos: [],
			selectedVideo: {}
		};

		this.videoSearch('motivation');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			const listOfVideoReturnedFromYoutubeApi = videos.map(video => {
				video.likes = 0;
				video.hearts = 0;
				return video
			})

			// Updating the state with whatever you pass into it
			this.setState({ 
				videos: listOfVideoReturnedFromYoutubeApi,
				selectedVideo: listOfVideoReturnedFromYoutubeApi[0]
			});
		});
	}

	handleSelectedVideo = (videoSelectedFromSideList) => {
		console.log(videoSelectedFromSideList)
		this.setState({selectedVideo: videoSelectedFromSideList})

	}

	handleReaction = (reactionType) => {
		console.log('handleReaction called with: ', reactionType);
		// make copy of item in state, so we can make changes to it without affecting state
		// you cant directly mutate state if you want to make changes make a copy and then use this.setState to push your changes to state object
		const currentVideo = { ...this.state.selectedVideo}
		const copyOfVideos = [ ...this.state.videos]

		// find the selectedVideo in the video list and update its reaction type
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
		const style = {
			base: {
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'wrap',
			},
			videoContent: {
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-between'
			}
		}

		return(
			<div style={style.base}>
				<SearchBar onSearchTermChange={videoSearch} /> 
				<div style={style.videoContent}>
					<VideoDetail 
						video={ this.state.selectedVideo } 
						onReaction={this.handleReaction}
					/>
					<VideoList 
						onVideoSelect={ this.handleSelectedVideo }
						videos={this.state.videos} />

				</div>
				
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));