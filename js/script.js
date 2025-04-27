// Mobile menu toggle
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

// Search Filter
const searchInput = document.getElementById("search-input");
const mobileSearchInput = document.getElementById("mobile-search-input");
const recipeCards = document.querySelectorAll(".recipe-card");
const noResults = document.getElementById("no-results");

function filterRecipes(term) {
  const searchTerm = term.toLowerCase();
  let matches = 0;

  recipeCards.forEach(card => {
    const title = card.dataset.title?.toLowerCase() || '';
    const author = card.dataset.author?.toLowerCase() || '';

    const matchesSearch = title.includes(searchTerm) || author.includes(searchTerm);

    if (matchesSearch) {
      card.classList.remove("hidden");
      matches++;
    } else {
      card.classList.add("hidden");
    }
  });

  noResults.classList.toggle("hidden", matches > 0);
}

if (searchInput) {
  searchInput.addEventListener("input", () => filterRecipes(searchInput.value));
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener("input", () => filterRecipes(mobileSearchInput.value));
}
