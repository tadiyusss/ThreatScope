const menu_toggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');


menu_toggle.addEventListener('click', () => {
    sidebar.classList.toggle('translate-x-full');
});

document.addEventListener('click', (event) => {
    if (!menu_toggle.contains(event.target) && !sidebar.contains(event.target)) {
        sidebar.classList.add('translate-x-full');
    }
});