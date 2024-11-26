// Light/Dark Mode Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleButton.innerText = document.body.classList.contains('dark-mode')
        ? 'Toggle Light Mode'
        : 'Toggle Dark Mode';
});

