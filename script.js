const overlay = document.getElementById("overlay");
const menuBars = document.getElementById("menu-bars");

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleChange() {
  //close-open menu-bar icon
  menuBars.classList.toggle("change");

  function animateNavItems(direction1, direction2) {
    navItems.forEach((nav, i) => {
      nav.classList.replace(
        `slide-${direction1}-${i + 1}`,
        `slide-${direction2}-${i + 1}`
      );
    });
  }
  //hide-show overlay (on-of using un-exist class)
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-out", "overlay-slide-in");
    //Animate nav items -Slide In-
    animateNavItems("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-in", "overlay-slide-out");
    //Animate nav items -Slide Out-
    animateNavItems("in", "out");
  }
}

//Event Listners
menuBars.addEventListener("click", toggleChange);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleChange);
});
