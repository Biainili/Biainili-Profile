// Open_Mobile_menu
document.getElementById("menu").addEventListener("click", function () {
  const menu_conatiner = document.getElementById("mobile_menu_container");
  menu_conatiner.style.display = "block";
  setTimeout(() => {
    menu_conatiner.classList.add("open");
  }, 10);
  document.body.classList.add("no-scroll");
});

// Clouser_Bobile_menu
document.getElementById("menu_clouse").addEventListener("click", function () {
  const menu_conatiner = document.getElementById("mobile_menu_container");
  setTimeout(() => {
    menu_conatiner.style.display = "none";
    menu_conatiner.classList.remove("open");
  }, 10);

  document.body.classList.remove("no-scroll");
});

const menu_mobile = document.querySelectorAll("#mobile_menu_items_id a");
const menu_container = document.getElementById("mobile_menu_container");


//  for scroll mobile link
menu_mobile.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }

    if (menu_container.style.display === "block") {
      setTimeout(() => {
        menu_container.style.display = "none";
        menu_container.classList.remove("open");
      }, 10);

      document.body.classList.remove("no-scroll");
    }
  });
});
