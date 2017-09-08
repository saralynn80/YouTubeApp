import React from 'react'; // Reacts with components
import ReactDOM from 'react-dom'; // Reacts with the dom
import SearchBar from './components/search_bar'; // Import the search bar component

const API_KEY = 'AIzaSyCxaM8_iwrErYJtOdemm4TkDX8uhyhkY6w';

// Create a new component. This component should produce some html
// http://babeljs.io/repl/ will show what the JSX will render

//const App = function() {
	//return <div>Hi!</div>;
//}

const App = () => {
	return(
	<div>
		<SearchBar />
	</div>
	);
}

// Take this component's generated HTML and put it on the page (in the DOM)
// ReactDOM.render(<component instance/>, target on the page)
ReactDOM.render(<App />, document.querySelector('.container'));