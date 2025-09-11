/******************************/
/* menu openen de MENU button */
/******************************/

const menuOpenButton = document.querySelector("menu");
const deNav = document.querySelector("header nav");

menuOpenButton.onclick = openMenu;

function openMenu(){
  deNav.classList.add("toonMenu")
}






/************************************/
/* menu sluiten met de sluit button */
/************************************/

const menuSluitButton = document.querySelector("nav button");

menuSluitButton.onclick = sluitMenu;

function sluitMenu(){
  deNav.classList.remove("toonMenu");
}





const prevButton = document.querySelector(" main button:nth-of-type(1)");
const nextButton = document.querySelector(" main button:nth-of-type(2)");
const deUl = document.querySelector("main ul");


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