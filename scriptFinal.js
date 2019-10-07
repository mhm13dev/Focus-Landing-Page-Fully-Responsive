let navBtn = document.getElementById("nav-btn");
let topNav = document.getElementById("top-nav");
let signup = document.getElementById("signup");
let navLink = document.querySelectorAll(".nav-link");
console.log(getComputedStyle(topNav).getPropertyValue("visibility"));

navBtn.addEventListener("click", e => {
  if (getComputedStyle(topNav).getPropertyValue("visibility") == "hidden") {
    topNav.setAttribute(
      "style",
      "animation: fadein 0.5s ease-in-out 0s 1 normal forwards; visibility:visible"
    );
    signup.setAttribute(
      "style",
      "animation: fadein 0.5s ease-in-out 0s 1 normal forwards; visibility:visible"
    );
  } else {
    topNav.setAttribute(
      "style",
      "animation: fadeout 0.5s ease-in-out 0s 1 normal forwards;"
    );
    signup.setAttribute(
      "style",
      "animation: fadeout 0.5s ease-in-out 0s 1 normal forwards;"
    );
  }
});

// console.log(navLink);
navLink.forEach(link => {
  // console.log(link);
  link.addEventListener("click", e => {
    navLink.forEach(link => {
      link.classList.remove("active");
    });
    link.classList.toggle("active");
  });
});
