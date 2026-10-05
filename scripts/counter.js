document.addEventListener("DOMContentLoaded", function () {
  const counterDisplay = document.getElementById("nbEh");
  const incrementButton = document.getElementById("nbEh_Button");

  const duCoupDisplay = document.getElementById("nbDuCoup");
  const duCoupButton = document.getElementById("nbDuCoup_Button");

  const doncDisplay = document.getElementById("nbDonc");
  const doncButton = document.getElementById("nbDonc_Button");

  const resetButton = document.getElementById("reset_Button");

  // Charger les trois valeurs sauvegardées.
  chrome.storage.sync.get(["nbEh", "nbDuCoup", "nbDonc"], function (result) {
    counterDisplay.textContent = result.nbEh || 0;
    duCoupDisplay.textContent = result.nbDuCoup || 0;
    doncDisplay.textContent = result.nbDonc || 0;

    // Autoriser les clics une fois les valeurs chargées.
    incrementButton.disabled = false;
    duCoupButton.disabled = false;
    doncButton.disabled = false;
    resetButton.disabled = false;
  });

  // Compteur « eh ».
  incrementButton.addEventListener("click", function () {
    let currentCount = parseInt(counterDisplay.textContent, 10);
    currentCount++;
    counterDisplay.textContent = currentCount;

    chrome.storage.sync.set({ nbEh: currentCount });
  });

  // Compteur « du coup ».
  duCoupButton.addEventListener("click", function () {
    let currentCount = parseInt(duCoupDisplay.textContent, 10);
    currentCount++;
    duCoupDisplay.textContent = currentCount;

    chrome.storage.sync.set({ nbDuCoup: currentCount });
  });

  // Compteur « donc ».
  doncButton.addEventListener("click", function () {
    let currentCount = parseInt(doncDisplay.textContent, 10);
    currentCount++;
    doncDisplay.textContent = currentCount;

    chrome.storage.sync.set({ nbDonc: currentCount });
  });

  // Remettre les trois compteurs à zéro.
  resetButton.addEventListener("click", function () {
    counterDisplay.textContent = 0;
    duCoupDisplay.textContent = 0;
    doncDisplay.textContent = 0;

    chrome.storage.sync.set({
      nbEh: 0,
      nbDuCoup: 0,
      nbDonc: 0,
    });
  });
});
