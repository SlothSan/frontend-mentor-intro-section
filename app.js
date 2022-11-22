const navBarOpen = document.getElementById('nav-bar-menu-open');
const navBarClose = document.getElementById('nav-bar-menu-close');
const openFeatures = document.getElementById('open-features-menu');
const openCompanies = document.getElementById('open-company-menu');
const arrowDownFeatures = document.getElementById('arrow-down-features');
const arrowDownCompany = document.getElementById('arrow-down-company');
const arrowUpFeatures = document.getElementById('arrow-up-features');
const arrowUpCompany = document.getElementById('arrow-up-company');
const featuresDropdown = document.getElementById('features-dropdown');
const companyDropdown = document.getElementById('company-dropdown');
const navBarContainer = document.getElementById('nav-bar-container');
const featuresDropdownDesktop = document.getElementById('features-dropdown-desktop');
const featuresDropdownOpen = document.getElementById('features-dropdown-desktop-open');
const featuresDropdownClose = document.getElementById('features-dropdown-desktop-close')
const featuresDropdownContainer = document.getElementById('features-dropdown-desktop-container');
const companyDropdownDesktop = document.getElementById('company-dropdown-desktop');
const companyDropdownOpen = document.getElementById('company-dropdown-desktop-open');
const companyDropdownClose = document.getElementById('company-dropdown-desktop-close');
const companyDropdownContainer = document.getElementById('company-dropdown-desktop-container');
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

const handleCompanyClick = () => {
    arrowDownCompany.classList.toggle('hidden');
    arrowUpCompany.classList.toggle('hidden');
    companyDropdown.classList.toggle('hidden');

}

const handleFeaturesClickDesktop = () => {
    featuresDropdownOpen.classList.toggle('hidden');
    featuresDropdownClose.classList.toggle('hidden');
    featuresDropdownContainer.classList.toggle('hidden');

}

const handleCompanyClickDesktop = () => {
    companyDropdownOpen.classList.toggle('hidden');
    companyDropdownClose.classList.toggle('hidden');
    companyDropdownContainer.classList.toggle('hidden');
}

navBarOpen.addEventListener('click', handleMenu);
navBarClose.addEventListener('click', handleMenu);
openFeatures.addEventListener('click', handleFeaturesClick);
openCompanies.addEventListener('click', handleCompanyClick);
featuresDropdownDesktop.addEventListener('click', handleFeaturesClickDesktop);
companyDropdownDesktop.addEventListener('click', handleCompanyClickDesktop);