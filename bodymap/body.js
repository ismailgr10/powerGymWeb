function showSection(id) {
    // cacher toutes les sections
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
    });

    // si aucun id fourni, on s'arrête (retour à l'accueil)
    if (!id) return;

    // afficher la section cliquée (si elle existe)
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
}