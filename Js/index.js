function toggleCategory(id) {
    let category = document.getElementById(id);
    category.classList.toggle("hidden");
}

function toggleItem(element) {
    let description = element.querySelector(".description");
    let ingredients = element.querySelector(".ingredients");
    description.classList.toggle("hidden");
    ingredients.classList.toggle("hidden");
}
