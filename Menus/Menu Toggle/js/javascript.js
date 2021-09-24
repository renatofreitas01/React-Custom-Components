const btn = document.getElementById('bnt-menu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const hamburguer = document.getElementById('hamburguer');
    hamburguer.classList.toggle('active');
    const hamburguer2 = document.getElementById('hamburguer2');
    hamburguer2.classList.toggle('active');
    const hamburguer3 = document.getElementById('hamburguer3');
    hamburguer3.classList.toggle('active');
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('active');
}

btn.addEventListener('click', toggleMenu);