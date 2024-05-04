const modal = document.querySelector(".modal");
const loginButton = document.querySelector(".login-btn");
const closeButton = document.querySelector(".close");

const openModal = () => {
  modal.classList.add("show");
};

const closeModal = () => {
  modal.classList.remove("show");
};

const outsideClick = (e) => {
  if (e.target == modal) {
    closeModal();
  }
};

loginButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

window.addEventListener("load", () => {
  const elementsToFadeIn = document.querySelectorAll(".header, .sub-header, .categories, .live, .live-sports, .footer, .modal");
  elementsToFadeIn.forEach(element => {
    element.classList.add("fade-in");
  });
});
