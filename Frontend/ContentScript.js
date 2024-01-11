"use strict";
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'startLoop') {
        const videoPlayer = document.querySelector('video'); // YouTube's video player
        const { startTimestamp, endTimestamp } = request;
        if (!videoPlayer) {
            return;
        }
        const interval = setInterval(() => {
            if (videoPlayer.currentTime >= endTimestamp) {
                videoPlayer.currentTime = startTimestamp;
            }
        }, 1000);
        // Additional logic to clear interval when needed
    }
});
