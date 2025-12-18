// Script pour la page principale
function navigateToProduct(productId) {
  // Navigation via un lien avec paramètre URL
  const link = document.createElement("a");
  link.href = `productDetails.html?product=${productId}`;
  link.click();
}

// Ajouter les événements de clic sur tous les produits
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".prod");

  // Produits disponibles (cliquables)
  const availableProducts = [
    "prod1",
    "prod2",
    "prod3",
    "prod5",
    "prod6",
    "prod8",
  ];

  products.forEach((product) => {
    // recuperer ID du produit basé sur le grid-area
    const gridArea = product.style.gridArea;

    // Vérifier si le produit est disponible
    if (availableProducts.includes(gridArea)) {
      // Rendre le produit cliquable
      product.style.cursor = "pointer";

      // Ajouter l'événement de clic
      product.addEventListener("click", () => {
        navigateToProduct(gridArea);
      });
    } else {
      // Produit non disponible
      product.style.cursor = "not-allowed";
      product.style.opacity = "0.7";
    }
  });

  // Ajouter un effet visuel pour indiquer que les produits sont cliquables
  const style = document.createElement("style");
  style.textContent = `
    .prod {
      transition: all 0.3s ease;
    }
    .prod:active {
      transform: scale(0.98);
    }
  `;
  document.head.appendChild(style);
});
