/*
 * GoldExpert24 — schlanker Cookie-Consent-Banner.
 * Es laufen derzeit ausschließlich technisch notwendige Speichertechniken
 * (sessionStorage für den Kurs-Cache, localStorage für diese Einwilligung).
 * Daher ist der Banner v. a. transparenz-/nachweisgetrieben und KEIN Cookie-Wall.
 * Die Seite bleibt ohne Zustimmung voll nutzbar.
 *
 * Hinweis: Sobald einwilligungspflichtige Dienste (z. B. extern eingebundene
 * Google Fonts, Analytics) hinzukommen, müssen diese hier blockiert werden,
 * bis "accepted" vorliegt. Sauberste Lösung: Fonts lokal einbinden.
 */
(function () {
  var STORAGE_KEY = "cookieConsent";

  window.GE24Consent = {
    get: function () {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch (e) { return null; }
    },
    set: function (choice) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice: choice, ts: new Date().toISOString() }));
      } catch (e) {}
    },
    reset: function () {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    }
  };

  function buildBanner() {
    var bar = document.createElement("div");
    bar.id = "cookieBanner";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookie-Hinweis");
    bar.className =
      "fixed bottom-0 inset-x-0 z-[100] bg-surface-container-lowest/95 backdrop-blur-md " +
      "border-t border-outline-variant/30 shadow-[0_-8px_40px_-12px_rgba(120,90,0,0.10)]";
    bar.innerHTML =
      '<div class="max-w-5xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">' +
        '<p class="text-sm text-on-surface-variant leading-relaxed flex-1">' +
          'Wir verwenden ausschließlich technisch notwendige Speichertechniken, damit diese Seite funktioniert. ' +
          'Es findet kein Tracking statt. Mehr dazu in den ' +
          '<a href="cookies.html" class="text-primary underline">Cookie-Einstellungen</a>.' +
        '</p>' +
        '<div class="flex gap-3 shrink-0">' +
          '<button id="cookieEssential" class="px-5 py-2.5 rounded-lg text-sm font-medium border border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary transition-all">Nur notwendige</button>' +
          '<button id="cookieAccept" class="px-5 py-2.5 rounded-lg text-sm font-bold text-on-primary bg-gradient-to-tr from-primary to-primary-container shadow-lg shadow-primary/20 hover:scale-95 transition-transform">Akzeptieren</button>' +
        '</div>' +
      '</div>';
    return bar;
  }

  function showBanner() {
    if (document.getElementById("cookieBanner")) return;
    var bar = buildBanner();
    document.body.appendChild(bar);
    document.getElementById("cookieAccept").addEventListener("click", function () {
      window.GE24Consent.set("accepted"); bar.remove();
    });
    document.getElementById("cookieEssential").addEventListener("click", function () {
      window.GE24Consent.set("essential"); bar.remove();
    });
  }

  function init() {
    if (!window.GE24Consent.get()) showBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
