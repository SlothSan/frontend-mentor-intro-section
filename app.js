const navBarOpen = document.getElementById('nav-bar-menu-open');
const navBarClose = document.getElementById('nav-bar-menu-close');
const navBarContainer = document.getElementById('nav-bar-container');
const overlay = document.getElementById('overlay');

const handleMenu = () => {
    overlay.classList.toggle('hidden');
    navBarOpen.classList.toggle('hidden');
    navBarClose.classList.toggle('hidden');
    navBarContainer.classList.toggle('hidden');
}

navBarOpen.addEventListener('click', handleMenu);
navBarClose.addEventListener('click', handleMenu);