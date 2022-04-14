const overlay = document.getElementById("overlay");
const menuBars = document.getElementById("menu-bars");

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");
const navItems = [nav1, nav2, nav3, nav4];

function toggleChange() {
  //close-open menu-bar icon
  menuBars.classList.toggle("change");

  //hide-show overlay (on-of using un-exist class)
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.remove("overlay-slide-out");
    overlay.classList.add("overlay-slide-in");
    //Animate nav items -Slide In-
    nav1.classList.remove("slide-out-1");
    nav1.classList.add("slide-in-1");
    nav2.classList.remove("slide-out-2");
    nav2.classList.add("slide-in-2");
    nav3.classList.remove("slide-out-3");
    nav3.classList.add("slide-in-3");
    nav4.classList.remove("slide-out-4");
    nav4.classList.add("slide-in-4");
    nav5.classList.remove("slide-out-5");
    nav5.classList.add("slide-in-5");
  } else {
    overlay.classList.remove("overlay-slide-in");
    overlay.classList.add("overlay-slide-out");
    //Animate nav items -Slide Out-
    nav1.classList.add("slide-out-1");
    nav1.classList.remove("slide-in-1");
    nav2.classList.add("slide-out-2");
    nav2.classList.remove("slide-in-2");
    nav3.classList.add("slide-out-3");
    nav3.classList.remove("slide-in-3");
    nav4.classList.add("slide-out-4");
    nav4.classList.remove("slide-in-4");
    nav5.classList.add("slide-out-5");
    nav5.classList.remove("slide-in-5");
  }
}

//Event Listners
menuBars.addEventListener("click", toggleChange);
nav1.addEventListener("click", toggleChange);
nav2.addEventListener("click", toggleChange);
nav3.addEventListener("click", toggleChange);
nav4.addEventListener("click", toggleChange);
nav5.addEventListener("click", toggleChange);
