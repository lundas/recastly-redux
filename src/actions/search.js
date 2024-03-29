import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube({YOUTUBE_API_KEY, q}, (data) => {
      dispatch(changeVideoList(data));
    });
  };
};

export default handleVideoSearch;
