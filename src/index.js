// TODO: Render the `App` component to the DOM
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';

ReactDOM.render(<App searchYouTube={searchYouTube} API_KEY={YOUTUBE_API_KEY} name='Matt'/>, document.getElementById('app'));
