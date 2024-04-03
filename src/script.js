const MENU_BARS = document.getElementById("menu-bars");
const OVERLAY = document.getElementById("overlay");

const NAV_1 = document.getElementById("nav-1");
const NAV_2 = document.getElementById("nav-2");
const NAV_3 = document.getElementById("nav-3");
const NAV_4 = document.getElementById("nav-4");
const NAV_5 = document.getElementById("nav-5");

const NAV_ITEM = [NAV_1, NAV_2, NAV_3, NAV_4, NAV_5];

/**
 * Control navigation animation
 * @param {String} direction1 The direction you whant to remove.
 * @param {String} direction2 The direction you whant to add.
 */
function navAnimation(direction1, direction2) {
  NAV_ITEM.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

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
    OVERLAY.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate In - Nav Item
    navAnimation("out", "in");
  } else {
    // animate Out - overlay
    OVERLAY.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate Out - Nav Item
    navAnimation("in", "out");
  }
}

// event listener
MENU_BARS.addEventListener("click", toggleNav);
NAV_ITEM.array.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
