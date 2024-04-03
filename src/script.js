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
    // Animate In - Nav Item
    NAV_1.classList.remove("slide-out-1");
    NAV_1.classList.add("slide-in-1");
    NAV_2.classList.remove("slide-out-2");
    NAV_2.classList.add("slide-in-2");
    NAV_3.classList.remove("slide-out-3");
    NAV_3.classList.add("slide-in-3");
    NAV_4.classList.remove("slide-out-4");
    NAV_4.classList.add("slide-in-4");
    NAV_5.classList.remove("slide-out-5");
    NAV_5.classList.add("slide-in-5");
  } else {
    // animate Out - overlay
    OVERLAY.classList.remove("overlay-slide-right");
    OVERLAY.classList.add("overlay-slide-left");
    // Animate Out - Nav Item
    NAV_1.classList.remove("slide-in-1");
    NAV_1.classList.add("slide-out-1");
    NAV_2.classList.remove("slide-in-2");
    NAV_2.classList.add("slide-out-2");
    NAV_3.classList.remove("slide-in-3");
    NAV_3.classList.add("slide-out-3");
    NAV_4.classList.remove("slide-in-4");
    NAV_4.classList.add("slide-out-4");
    NAV_5.classList.remove("slide-in-5");
    NAV_5.classList.add("slide-out-5");
  }
}

// event listener
MENU_BARS.addEventListener("click", toggleNav);
NAV_1.addEventListener("click", toggleNav);
NAV_2.addEventListener("click", toggleNav);
NAV_3.addEventListener("click", toggleNav);
NAV_4.addEventListener("click", toggleNav);
NAV_5.addEventListener("click", toggleNav);
