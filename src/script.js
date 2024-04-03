const MENU_BARS = document.getElementById("menu-bars");
const OVERLAY = document.getElementById("overlay");

const NAV_1 = document.getElementById("nav-1");
const NAV_2 = document.getElementById("nav-2");
const NAV_3 = document.getElementById("nav-3");
const NAV_4 = document.getElementById("nav-4");
const NAV_5 = document.getElementById("nav-5");

/**
 * Toogle the nav
 */
function toggleNav() {
  // toogle menu bars Open/Close
  MENU_BARS.classList.toggle("change");
  // toogle menu: active
  OVERLAY.classList.toggle("overlay-active");
  if (OVERLAY.classList.contains("overlay-active")) {
    // animate In - Overlay
    OVERLAY.classList.remove("overlay-slide-left");
    OVERLAY.classList.add("overlay-slide-right");
  } else {
    // animate Out - overlay
    OVERLAY.classList.remove("overlay-slide-right");
    OVERLAY.classList.add("overlay-slide-left");
  }
}

// event listener
MENU_BARS.addEventListener("click", toggleNav);
NAV_1.addEventListener("click", toggleNav);
NAV_2.addEventListener("click", toggleNav);
NAV_3.addEventListener("click", toggleNav);
NAV_4.addEventListener("click", toggleNav);
NAV_5.addEventListener("click", toggleNav);
