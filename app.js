const navBarOpen = document.getElementById('nav-bar-menu-open');
const navBarClose = document.getElementById('nav-bar-menu-close');
const navBarContainer = document.getElementById('nav-bar-container');

const handleMenu = () => {
    navBarOpen.classList.toggle('hidden');
    navBarClose.classList.toggle('hidden');
    navBarContainer.classList.toggle('hidden');
}

navBarOpen.addEventListener('click', handleMenu);
navBarClose.addEventListener('click', handleMenu);