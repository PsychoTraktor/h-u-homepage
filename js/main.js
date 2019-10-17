
function scrollHome() {
    var home = document.getElementById("home");
    home.scrollIntoView();
}

function scrollAbout() {
    var headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    console.log(headerHeight);
    var topOfElement = document.getElementById('about').offsetTop - headerHeight;
    window.scroll({ top: topOfElement, behavior: "smooth" });
}

function scrollServices() {
    var headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    var topOfElement = document.getElementById('services').offsetTop - headerHeight
    window.scroll({ top: topOfElement, behavior: "smooth" });
}

function scrollGallery() {
    var headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    var topOfElement = document.getElementById('gallery').offsetTop - headerHeight
    window.scroll({ top: topOfElement, behavior: "smooth" });
}

function scrollReferences() {
    var headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    var topOfElement = document.getElementById('references').offsetTop - headerHeight
    window.scroll({ top: topOfElement, behavior: "smooth" });
}

function scrollContact() {
    var headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    var topOfElement = document.getElementById('contact').offsetTop - headerHeight
    window.scroll({ top: topOfElement, behavior: "smooth" });
}

function myFunction() {
    var nav = document.getElementsByClassName("navbar__nav")[0];
    nav.classList.toggle("hidden-s");
   
  }





