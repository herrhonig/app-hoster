// script.js — ванильный JS, живой поиск + фильтрация
(() => {
  const searchInput = document.getElementById("search");
  const filterButtons = document.querySelectorAll(".filters__btn");
  const cardsList = document.querySelectorAll(".cards__item");
  const emptyMessage = document.querySelector(".cards__empty");

  let currentFilter = "all";

  // simple normalize
  const norm = (s) => (s || "").toString().toLowerCase().trim();

  // Update visibility based on search + filter
  function updateVisibility() {
    const q = norm(searchInput.value);

    let visibleCount = 0;
    cardsList.forEach((li) => {
      const name = norm(li.dataset.name);
      const category = norm(li.dataset.category);

      const matchesFilter =
        currentFilter === "all" || category === currentFilter;
      const matchesSearch = q === "" || name.includes(q);

      if (matchesFilter && matchesSearch) {
        li.style.display = "";
        visibleCount++;
      } else {
        li.style.display = "none";
      }
    });

    emptyMessage.hidden = visibleCount > 0;
  }

  // Live search (no debounce necessary for small lists; add debounce for large)
  searchInput.addEventListener("input", updateVisibility);

  // Filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach((b) => b.classList.remove("filters__btn--active"));
      e.currentTarget.classList.add("filters__btn--active");

      currentFilter = e.currentTarget.dataset.filter || "all";
      updateVisibility();
    });
  });

  // Keyboard accessibility: allow Enter on buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Init
  updateVisibility();
})();
