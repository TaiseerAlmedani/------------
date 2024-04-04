document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});



// enable grid & list view
const listViewButton = document.querySelector('.list-view-button');
const gridViewButton = document.querySelector('.grid-view-button');
const list = document.querySelector('.list-items');
const listItem = document.querySelectorAll('.listItem');
const detils = document.querySelectorAll('.detils');
const priceSection = document.querySelectorAll('.priceSection');
const menuCardPrice = document.querySelectorAll('.menu-card-price');
const detilsTable = document.querySelectorAll('.detilsTable');

listViewButton.onclick = function () {
  listItem.forEach(element => {
    element.classList.remove('is-6-mobile');
  });
  detils.forEach(element => {
    element.classList.remove('is-flex-wrap-wrap');
  });
  priceSection.forEach(element => {
    element.classList.remove('has-gap-20' , 'mt-4');
    element.classList.add('is-flex-direction-column');
  });
  detilsTable.forEach(element => {
    element.classList.remove('fs-10');
  });
  menuCardPrice.forEach(element => {
    element.classList.remove('full-width', 'small-f-on-mobile', 'lh-39');
  });
}

gridViewButton.onclick = function () {
  listItem.forEach(element => {
    element.classList.add('is-6-mobile');
  });
  detils.forEach(element => {
    element.classList.add('is-flex-wrap-wrap');
  });  
  priceSection.forEach(element => {
    element.classList.remove('is-flex-direction-column');
    element.classList.add('has-gap-20' , 'mt-4');
  });
  detilsTable.forEach(element => {
    element.classList.add('fs-10');
  });
  menuCardPrice.forEach(element => {
    element.classList.add('full-width', 'small-f-on-mobile', 'lh-39');
  });
}