
var VideoListEntry = (props, video) => {
  //console.log(props);
  //console.log(props.video.snippet.thumbnails.default.url);
  //console.log(props);

  return (

    //console.log('vle', this)
    <div className={props.video.id.videoId} >
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.title} />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => props.onVideoClick(props.video)} >{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
