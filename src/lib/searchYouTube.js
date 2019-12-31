
import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,

    },
    dataType: 'json',
    videoEmbeddable: true,
   // success: callback,
    complete: callback

    // error: errorCB || function(error) {
    //   console.error('chatterbox: Failed to fetch messages', error);
    // }
  });
  // TODO
};

export default searchYouTube;
