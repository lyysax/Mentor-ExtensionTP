document.addEventListener('DOMContentLoaded', function () {
  const counterDisplay = document.getElementById('nbEh');
  const incrementButton = document.getElementById('nbEh_Button');
  const resetButton = document.getElementById('reset_Button');

  chrome.storage.sync.get(['nbEh'], function (result) {
      counterDisplay.textContent = result.nbEh || 0;
  });

  incrementButton.addEventListener('click', function () {
      let currentCount = parseInt(counterDisplay.textContent);
      currentCount++;
      counterDisplay.textContent = currentCount;

      chrome.storage.sync.set({ nbEh: currentCount });
  });

  resetButton.addEventListener('click', function () {
    counterDisplay.textContent = 0;

    chrome.storage.sync.set({ nbEh: 0 });
  });
});
