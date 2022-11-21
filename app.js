const navBarOpen = document.getElementById('nav-bar-menu-open');
const navBarClose = document.getElementById('nav-bar-menu-close');
const openFeatures = document.getElementById('open-features-menu');
const arrowDownFeatures = document.getElementById('arrow-down-features');
const arrowUpFeatures = document.getElementById('arrow-up-features')
const featuresDropdown = document.getElementById('features-dropdown');
const navBarContainer = document.getElementById('nav-bar-container');
const overlay = document.getElementById('overlay');

const handleMenu = () => {
    overlay.classList.toggle('hidden');
    navBarOpen.classList.toggle('hidden');
    navBarClose.classList.toggle('hidden');
    navBarContainer.classList.toggle('hidden');
}

const handleFeaturesClick = () => {
    arrowDownFeatures.classList.toggle('hidden');
    arrowUpFeatures.classList.toggle('hidden');
    featuresDropdown.classList.toggle('hidden');
}

navBarOpen.addEventListener('click', handleMenu);
navBarClose.addEventListener('click', handleMenu);
openFeatures.addEventListener('click', handleFeaturesClick);