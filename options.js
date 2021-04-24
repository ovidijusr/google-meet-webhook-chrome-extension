function save_options() {
  var webhookOn = document.getElementById('webhook-on').value;
  var webhookOff = document.getElementById('webhook-off').value;
  chrome.storage.sync.set({
    webhookOn,
    webhookOff
  }, function () {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    webhookOn: '',
    webhookOff: ''
  }, function (items) {
    document.getElementById('webhook-on').value = items.webhookOn;
    document.getElementById('webhook-off').value = items.webhookOff;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
  save_options);
