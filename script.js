function setLang(lang) {
    localStorage.setItem("preferredLang", lang);
    applyLang(lang);
}

function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-switch button')
        .forEach(btn => btn.classList.remove('active'));

    document
        .querySelector(`.lang-switch button[data-lang="${lang}"]`)
        .classList.add('active');

    document.querySelectorAll("div[data-lang]").forEach(el => {
        el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
    });
}

function detectLang() {
    const saved = localStorage.getItem("preferredLang");
    if (saved) return saved;

    const browserLang = navigator.language;
    return browserLang.startsWith("de") ? "de" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
    applyLang(detectLang());
});
