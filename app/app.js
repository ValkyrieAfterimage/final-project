import { loadData } from "../model/model.js";

const navLinks = document.querySelectorAll("nav a");

function setActiveLink(pageID) {
  if (pageID == "home") {
    document.querySelector("header").classList.remove("dark");
    document.querySelector("header").classList.add("light");
  } else {
    document.querySelector("header").classList.remove("light");
    document.querySelector("header").classList.add("dark");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") == `#${pageID}`) {
      link.classList.add("active");
    }
  });
}

function route() {
  const hash = window.location.hash || "#home";
  let pageID = hash.replace("#", "");
  setActiveLink(pageID);
  loadData(pageID);
}

window.addEventListener("hashchange", route);

route();
