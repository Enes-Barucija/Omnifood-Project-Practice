"use strict";

// Selecting elements
const yearEl = document.querySelector(".year");
const btnMobile = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const body = document.body;
const html = document.documentElement;
const allLinks = document.querySelectorAll("a:link");
const sectionHero = document.querySelector(".section-hero");

// Getting the current year
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Preventing scrolling with the movile nav open
btnMobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  //   html.classList.toggle("prevent-scrolling");
});

// Implementing a smooth scrolling animation
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scrolling back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

// Sticky navigation

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
