var popup = document.querySelector(".modal-bg_js");
var buttonOpen = document.querySelector(".header__search-button_js");
var buttonClose = document.querySelector(".modal-close_js");
var input = document.querySelector(".contact-us-form__input_js");

buttonOpen.addEventListener("click", function () {
  popup.classList.remove("modal-bg_hidden");
  input.focus();
});

buttonClose.addEventListener("click", function () {
  popup.classList.add("modal-bg_hidden");
  buttonOpen.focus();
});
// Escape
window.addEventListener("keydown", function (event) {
  if(!popup.classList.contains("modal-bg_hidden") && event.code === "Escape"){
    popup.classList.add("modal-bg_hidden");
    buttonOpen.focus();
  }
});