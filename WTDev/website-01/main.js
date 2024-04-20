const navBar = document.getElementById('navbar');
const mobNavBar = document.getElementById('mobnavbar');

function showNavBar(){
    navBar.style.display = 'none';
    mobNavBar.style.display = 'flex';
}

function hideNavBar(){
    navBar.style.display = 'flex';
    mobNavBar.style.display = 'none';
}

