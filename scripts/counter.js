// Compatible Firefox et Chrome
const api = typeof browser !== "undefined" ? browser : chrome;

document.addEventListener("DOMContentLoaded", async function () {
  const counterDisplay = document.getElementById("nbEh");
  const incrementButton = document.getElementById("nbEh_Button");

  const duCoupDisplay = document.getElementById("nbDuCoup");
  const duCoupButton = document.getElementById("nbDuCoup_Button");

  const doncDisplay = document.getElementById("nbDonc");
  const doncButton = document.getElementById("nbDonc_Button");

  const resetButton = document.getElementById("reset_Button");

  try {
    // Charger les compteurs sauvegardés
    const result = await api.storage.local.get([
      "nbEh",
      "nbDuCoup",
      "nbDonc"
    ]);

    console.log("Valeurs chargées :", result);

    counterDisplay.textContent = result?.nbEh ?? 0;
    duCoupDisplay.textContent = result?.nbDuCoup ?? 0;
    doncDisplay.textContent = result?.nbDonc ?? 0;

    // Activer les boutons une fois les données chargées
    incrementButton.disabled = false;
    duCoupButton.disabled = false;
    doncButton.disabled = false;
    resetButton.disabled = false;

  } catch (error) {
    console.error("Erreur lors du chargement des compteurs :", error);
  }

  // =========================
  // Compteur "eh"
  // =========================

  incrementButton.addEventListener("click", async function () {
    const currentCount = Number(counterDisplay.textContent) || 0;
    const newCount = currentCount + 1;

    counterDisplay.textContent = newCount;

    try {
      await api.storage.local.set({
        nbEh: newCount
      });

      console.log("Nombre de eh sauvegardé :", newCount);
    } catch (error) {
      console.error("Erreur sauvegarde nbEh :", error);
    }
  });

  // =========================
  // Compteur "du coup"
  // =========================

  duCoupButton.addEventListener("click", async function () {
    const currentCount = Number(duCoupDisplay.textContent) || 0;
    const newCount = currentCount + 1;

    duCoupDisplay.textContent = newCount;

    try {
      await api.storage.local.set({
        nbDuCoup: newCount
      });

      console.log("Nombre de du coup sauvegardé :", newCount);
    } catch (error) {
      console.error("Erreur sauvegarde nbDuCoup :", error);
    }
  });

  // =========================
  // Compteur "donc"
  // =========================

  doncButton.addEventListener("click", async function () {
    const currentCount = Number(doncDisplay.textContent) || 0;
    const newCount = currentCount + 1;

    doncDisplay.textContent = newCount;

    try {
      await api.storage.local.set({
        nbDonc: newCount
      });

      console.log("Nombre de donc sauvegardé :", newCount);
    } catch (error) {
      console.error("Erreur sauvegarde nbDonc :", error);
    }
  });

  // =========================
  // Réinitialisation
  // =========================

  resetButton.addEventListener("click", async function () {
    counterDisplay.textContent = 0;
    duCoupDisplay.textContent = 0;
    doncDisplay.textContent = 0;

    try {
      await api.storage.local.set({
        nbEh: 0,
        nbDuCoup: 0,
        nbDonc: 0
      });

      console.log("Compteurs réinitialisés");
    } catch (error) {
      console.error("Erreur lors de la réinitialisation :", error);
    }
  });
});