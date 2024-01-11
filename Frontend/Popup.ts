document.getElementById('loop').addEventListener('click', () => {
    const startTime = parseFloat(document.getElementById('start').value); // Get the start time from the input field.
    const endTime = parseFloat(document.getElementById('end').value); // Get the end time from the input field.

    // Create a request object to send to the content script
    const request = {
      action: 'loopVideo', // The action to be performed in the content script.
      start: startTime,     // The start time for the video loop.
      end: endTime          // The end time for the video loop.
    };
  
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, request, (response) => {
        console.log(response.status); // Log the response from the content script.
      });
    });
});

  