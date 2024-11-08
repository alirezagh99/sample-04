const searchIcon = document.querySelector(".li-search");
const searchPopup = document.querySelector(".search-popup");
const remove = document.querySelector(".remove");
searchIcon.addEventListener("click", function () {
  searchPopup.style.display = "block";
});
searchPopup.addEventListener("click", function () {
  searchPopup.style.display = "none";
});
