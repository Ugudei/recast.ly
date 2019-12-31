import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import ExampleVideoData from '../data/exampleVideoData.js';
// import VideoListEntry from './VideoListEntry.jsx';

class App extends React.Component {
//console.log(props);
  constructor(props) {
    super(props);
    this.state = {
      videos: ExampleVideoData,
      currentVideo: ExampleVideoData[0]
    };
  }
  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar" >
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5" >
            <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
// var App = (props) => {
//   //console.log(props);

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="col-md-6 offset-md-3">
//           <div><h5><em>search</em> view asdfasdhere</h5></div>
//         </div>
//       </nav>
//       <div className="row">
//         <div className="col-md-7">
//           <VideoPlayer video={props.videos[0]}/>
//         </div>
//         <div className="col-md-5">
//           <VideoList videos={props.videos} />
//         </div>
//       </div>
//     </div>
//   );
// };
// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// export default App;
