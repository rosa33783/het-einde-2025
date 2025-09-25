
/*code van opdracht  */
/******************************/
/* menu openen de MENU button */
/******************************/
const menuOpenButton = document.querySelector(".menu");
const deNav = document.querySelector(".uitklapmenu");
const menuSluitButton = document.querySelector(".menubar button:nth-of-type(2)");



menuOpenButton.onclick = openMenu;
menuSluitButton.onclick = sluitMenu;

function openMenu() {
  deNav.classList.add("toonMenu");          // menu openen
  menuSluitButton.classList.add("sluitMenu"); // sluitbutton zichtbaar
  menuOpenButton.classList.add("hidden");   // open button verbergen
}

function sluitMenu() {
  deNav.classList.remove("toonMenu");        // menu sluiten
  menuSluitButton.classList.remove("sluitMenu"); // sluitbutton verbergen
  menuOpenButton.classList.remove("hidden");      // open button weer zichtbaar
}


document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.submenu-toggle');
  const submenu = document.querySelector('.submenu');

  // standaard dicht zetten
  submenu.classList.add('collapsed');

  toggleButton.addEventListener('click', () => {
    submenu.classList.toggle('collapsed');
  });
});




/*carrousel*/
const prevButton = document.querySelector(".carrousel button:nth-of-type(1)");
const nextButton = document.querySelector(".carrousel button:nth-of-type(2)");
const deUl = document.querySelector(".carrousel ul");


function goToNextPhoto() {
	const deULWidth = deUl.offsetWidth;
	const deULWidthHalf = deULWidth * 1;
	deUl.scrollLeft = deUl.scrollLeft + deULWidthHalf;
}


nextButton.onclick = goToNextPhoto;


function goToPrevPhoto() {
	const deULWidth = deUl.offsetWidth;
	const deULWidthHalf = deULWidth * 1;
	deUl.scrollLeft = deUl.scrollLeft - deULWidthHalf;
}


prevButton.onclick = goToPrevPhoto;






/*zoekbalk */

// selecteer elementen
const zoekknop = document.querySelector(".zoekknop");
const input = document.querySelector(".search-input");

// toggle bij klik
zoekknop.addEventListener("click", () => {
  input.classList.toggle("hidden");
  
  // optioneel: focus meteen op het input-veld als het zichtbaar wordt
  if (!input.classList.contains("hidden")) {
    input.focus();
  }
});


/*subscriptions hamburgermenu */
const menuButton = document.querySelector(".subscrmenu");
const menu = document.querySelector(".subscrUitklapMenu");

menuButton.onclick = toggleMenu;

function toggleMenu() {
  if (menu.classList.contains("open")) {
    sluitMenu();
  } else {
    openMenu();
  }
}

