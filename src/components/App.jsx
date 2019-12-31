import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
// import VideoListEntry from './VideoListEntry.jsx';

var App = (props) => {
  //console.log(props);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view asdfasdhere</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={props.videos[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={props.videos} />
        </div>
      </div>
    </div>
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
