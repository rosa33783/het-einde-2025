/*code van de menuopdracht*/

/* menu openen de MENU button */

const menuOpenButton = document.querySelector(".menubar button:nth-of-type(1)");
const deNav = document.querySelector(".uitklapmenu");
const menuSluitButton = document.querySelector(".menubar button:nth-of-type(2)");

if (menuOpenButton && menuSluitButton && deNav) {
  menuOpenButton.onclick = openMenu;
  menuSluitButton.onclick = sluitMenu;
}

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


// submenu open en dicht src chatgpt
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.submenu-toggle');
  const submenu = document.querySelector('.submenu');

  if (!toggleButton || !submenu) return;
  // standaard dicht zetten
  submenu.classList.add('collapsed');

  toggleButton.addEventListener('click', () => {
    submenu.classList.toggle('collapsed');
  });
});



// carrouselcode src chatgt
const prevButtons = document.querySelectorAll(".carrousel button:nth-of-type(1)");
const nextButtons = document.querySelectorAll(".carrousel button:nth-of-type(2)");
const deUl = document.querySelector(".carrousel ul");

function goToNextPhoto() {
	const deULWidth = deUl.offsetWidth;
	deUl.scrollLeft = deUl.scrollLeft + deULWidth;
}

function goToPrevPhoto() {
	const deULWidth = deUl.offsetWidth;
	deUl.scrollLeft = deUl.scrollLeft - deULWidth;
}

nextButtons.forEach(btn => {
	btn.addEventListener("click", goToNextPhoto);
});

prevButtons.forEach(btn => {
	btn.addEventListener("click", goToPrevPhoto);
});





/*zoekbalk src chatgpt */
const form = document.querySelector(".menubar form");
const zoekOpenBtn = document.querySelector(".zoekknop");
const zoekCloseBtn = document.querySelector(".zoekclose");
const input = document.querySelector(".search-input");
const pijltje = document.querySelector(".pijltje");

function openSearch() {
  input.classList.remove("hidden");
  pijltje?.classList.remove("hidden");
  zoekOpenBtn.classList.add("hidden");
  zoekCloseBtn.classList.remove("hidden");
  input.focus();
}

function closeSearch() {
  input.classList.add("hidden");
  pijltje?.classList.add("hidden");
  zoekCloseBtn.classList.add("hidden");
  zoekOpenBtn.classList.remove("hidden");
}

if (zoekOpenBtn && zoekCloseBtn) {   
  zoekOpenBtn.addEventListener("click", openSearch);
  zoekCloseBtn.addEventListener("click", closeSearch);
}      


//menu subscriptions src chatgpt
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.subscrmenu');
  const menu = document.querySelector('.subscrUitklapMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpening = !menu.classList.contains('open');
    menu.classList.toggle('open', isOpening);
    document.body.classList.toggle('menu-open', isOpening);
  });
});

//uitklap footer
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("footer .dropdown").forEach((btn) => {
    // het UL moet het volgende sibling zijn dat een UL is
    const ul = btn.parentElement.querySelector("ul");
    if (!ul) return;

    btn.addEventListener("click", (e) => {
      ul.classList.toggle("open");
    });
  });
});