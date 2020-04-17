$(function () {

  let images = document.querySelectorAll(".header-content__item-img");
  let items = document.querySelectorAll(".header-content__item");

  for (let item of items) {
    item.addEventListener('mouseover', () => {
      for (let elem of items) {
        elem.className += " inactive"
      }
      item.className = "header-content__item active"
    });
    item.addEventListener('mouseout', () => {
      for (let elem of items) {
        elem.className = "header-content__item"
      }
    })
  }

});