// Saves options to chrome.storage
const saveOptions = () => {
  const url = document.getElementById('url').value;
  const token = document.getElementById('token').value;

  chrome.storage.sync.set(
    { token, url },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores token using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { token: '', url: '' },
    (items) => {
      document.getElementById('url').value = items.url;
      document.getElementById('token').value = items.token;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
