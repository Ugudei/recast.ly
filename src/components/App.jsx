import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import ExampleVideoData from '../data/exampleVideoData.js';
// import VideoListEntry from './VideoListEntry.jsx';

class App extends React.Component {
//console.log(props);
  constructor(props) {
    super(props);
    this.state = {
      playing: ExampleVideoData[0]
    };
  }
  onVideoClick(videoTitle) {

    console.log('this', this);
    this.setState({
      playing: videoTitle
    });
    console.log('state play:', this.state.playing);

  }
  render() {
    //console.log('evan', ExampleVideoData);
    //var videoPlaying = {this.state.playing ? defaultVideo = ExampleVideoData[0] : defaultVideo = this };
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view asdfasdhere</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing}/>
          </div>
          <div className="col-md-5" >
            <VideoList videos={ExampleVideoData} onVideoClick={this.onVideoClick.bind(this)}/>
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
