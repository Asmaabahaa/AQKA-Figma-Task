const nav = document.querySelector("nav");
const menuLevels = nav.children;

var navBtn = document.getElementById("nav-menu");
var closeBtn = document.getElementById("close-menu");
var navMenu = document.getElementById("nav");
var mobileNav = document.getElementById("mobileNav")
var mobileNavLevel1 = document.getElementById("mobileNavLevel1")

const menus = {
  defaultMenu:["Bedingungen", "Behandlungen", "Veranstaltungen", "Werkzeuge", "Forschung und Erkenntnisse"],
  Bedingungen: [" "],
  Behandlungen : ["Adtralza", "Diavonex", "Diavobet", "Enstilar", "Fucidin", "Kyntheum","Protopic","Skinoren", "Tralokinumab", "Xamiol"],
  Veranstaltungen:[" "],
  Werkzeuge: ["  "],
  'Forschung und Erkenntnisse': [" "],
  Adtralza : ["Overview", "Mode of Action", "Efficacy","Quality of Life", "Safety", "Dosing", "News", "Technical Information"],
  Diavonex:[" "],
  Diavobet:[" "],
  Enstilar:[" "],
  Fucidin:[" "],
  Kyntheum:[" "],
  Protopic:[" "],
  Skinoren:[" "],
  Tralokinumab:[" "],
  Xamiol:[" "]
}

window.addEventListener('resize', function(event) {
  if($(document).width() > 1000){
    navMenu.style.display = "block"
    navBtn.style.display = "none"
    mobileNav.style.display = "none";
    mobileNavLevel1.style.display = "none"
    closeBtn.style.display = "none"

  }else{
    navMenu.style.display = "none"
    navBtn.style.display = "block"
  }
}, true);



function showMobileMenu(){
 
  mobileNav.style.display = "block"
  mobileNavLevel1.style.display = "block"
  navBtn.style.display = "none"
  closeBtn.style.display = "block"
}

function hideMobileMenu(){
  mobileNav.style.display = "none";
  mobileNavLevel1.style.display = "none"
  navBtn.style.display = "block";
  closeBtn.style.display = "none"
}

for (let i = 0; i < 3; i++) {
  level = menuLevels[i];
  for (let li of level.children) {
    li.addEventListener("click", () => {
      showMenuLevel(i + 2);
      setLevelItems(i + 1, menus[li.innerHTML])
    });
  }
}

function showMenuLevel(n) {
  for (let i = 0; i < 3; i++) {
    menuLevels[i].style.display = i < n ? "flex" : "none";
  }
}

function setLevelItems(n , items) {
  const level = menuLevels[n];
  for (let i = 0; i < level.children.length; i++) {
    level.children[i].innerHTML = items[i] || "";
  }
}

