"use strict";
const navBtn = document.querySelector(".btn-mobile-nav");
const navList = document.querySelectorAll(".main-nav-list");
const navLink = document.querySelectorAll(".main-nav-link");
const opensBtns = document.querySelectorAll(".openBtn");
const showAnswer = document.querySelectorAll(".answer-box");
const overlay = document.querySelectorAll(".question-box");

for (let i = 0; i < opensBtns.length; i++) {
  opensBtns[i].addEventListener("click", function () {
    showAnswer[i].classList.toggle("show");
  });
}
navBtn.addEventListener("click", function () {
  navList.classList.toggle("show");
});

navList.forEach((each) => {
  each.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});
