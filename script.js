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
