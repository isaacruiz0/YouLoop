chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // 'request' is an object containing data sent from the popup script.
  if (request.action === 'loopVideo' && request.start && request.end) {
    // 'request.action' is a string that specifies what action to perform.
    // 'request.start' and 'request.end' are the start and end times for the video loop.

    const videoPlayer = document.querySelector('video'); // Selects the video player element on YouTube.

    if( !videoPlayer ) {
      sendResponse({status: "No video player found"});
      return;
    }
    
    const checkTime = () => {
      if (videoPlayer.currentTime >= request.end) { 
        videoPlayer.currentTime = request.start;
      }
    };

    setInterval(checkTime, 1000); // Regularly check the video time every second.

    sendResponse({status: "Looping started"}); // Send a response back to the popup script.
  }
});
