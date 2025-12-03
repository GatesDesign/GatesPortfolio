if (nav.style.display === "flex") {
  nav.style.display = "none";
} else {
  nav.style.display = "flex";
}
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("header nav");
menuBtn.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";

    }
}   );