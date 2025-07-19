const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(`Element ${entry.target.className} is intersecting: ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const icon = toggle.querySelector('i');
    const dropdowns = document.querySelectorAll('.dropdown');
    const navItems = document.querySelectorAll('.nav-links > li:not(.dropdown)');
    const dropdownMenuItems = document.querySelectorAll('.dropdown-menu li');

    toggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        icon.classList.toggle('bx-menu');
        icon.classList.toggle('bx-x');
    });

    dropdowns.forEach(drop => {
        drop.addEventListener('click', function (e) {
            if (window.innerWidth <= 1100) {
                e.stopPropagation();

                if (drop.classList.contains('active')) {
                    drop.classList.remove('active');
                } else {
                    dropdowns.forEach(other => other.classList.remove('active'));
                    drop.classList.add('active');
                }
            }
        });
    });

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth <= 1100) {
                navLinks.classList.remove('active');
                icon.classList.add('bx-menu');
                icon.classList.remove('bx-x');
                dropdowns.forEach(drop => drop.classList.remove('active'));
            }
        });
    });

    dropdownMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth <= 1100) {
                navLinks.classList.remove('active');
                icon.classList.add('bx-menu');
                icon.classList.remove('bx-x');
                dropdowns.forEach(drop => drop.classList.remove('active'));
            }
        });
    });
});
