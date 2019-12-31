
import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      type: 'video'
    },
    //dataType: 'json',

    success: function (result) {
      console.log('myresult: ', result.items);
      callback(result.items);
    }
  });
  // TODO
};

export default searchYouTube;
