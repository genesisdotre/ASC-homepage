// Some settings coming from: http://stackoverflow.com/questions/35044594/youtube-how-to-present-embed-video-with-sound-muted
// More documentation: https://developers.google.com/youtube/player_parameters#modestbranding

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('YouTube-player', {
    videoId: 'wIxQXsr00F0', // YouTube Video ID
    width: 560,               // Player width (in px)
    height: 316,              // Player height (in px)
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 1,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      autohide: 1,         // Hide video controls when playing
      rel: 0,             // Not showing related
      // loop: 0,            // Run the video in a loop
      // fs: 0,              // Hide the full screen button
      // cc_load_policy: 0, // Hide closed captions
      // iv_load_policy: 3,  // Hide the Video Annotations
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
 }

// Detecting when YouTube video finished playing: http://stackoverflow.com/questions/7853904/how-to-detect-when-a-youtube-video-finishes-playing
function onPlayerStateChange(event) {
  if(event.data === 0) {
      alert('done');
  }
}
