"use script";

const btnsRating = document.querySelectorAll(".btn-rating");
const btnSubmit = document.querySelector(".btn-submit");
const displayRating = document.querySelector(".display__rating");
const containers = document.querySelectorAll(".container");

btnsRating.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.focus();
    btnSubmit.addEventListener("click", function () {
      e.preventDefault();
      containers.forEach(function (container) {
        container.classList.toggle("hidden");
      });
      displayRating.innerHTML = `You selected ${btn.innerHTML} out of 5`;
    });
  });
});
