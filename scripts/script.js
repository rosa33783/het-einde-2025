
/*code van opdracht  */
/******************************/
/* menu openen de MENU button */
/******************************/
const menuOpenButton = document.querySelector(".menubar button:nth-of-type(1)");
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

