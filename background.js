chrome.runtime.onInstalled.addListener(function (object) {
  chrome.tabs.create({
    url: chrome.extension.getURL("options.html")
  });
})

chrome.runtime.onMessage.addListener(
  async function (request) {
    chrome.storage.sync.get({
      checkURL: '',
      webhookOn: '',
      webhookOff: ''
    }, function ({
      webhookOn,
      webhookOff
    }) {
      if (request.state === 'webhookOn') {
        fetch(webhookOn, {
          method: 'POST'
        })
      }
      if (request.state === 'webhookOff') {
        fetch(webhookOff, {
          method: 'POST'
        })
      }
    });
  }
);
