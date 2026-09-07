// Dark mode toggle, persisted across visits
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}

const savedTheme = localStorage.getItem('marginalia-theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
}

toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    localStorage.setItem('marginalia-theme', isDark ? 'dark' : 'light');
});

// Auto-fill current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Estimate reading time for the featured excerpt based on word count
const excerpt = document.querySelector('.excerpt');
const readTimeEl = document.getElementById('read-time');
if (excerpt && readTimeEl) {
    const words = excerpt.textContent.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    readTimeEl.textContent = `${minutes} min read`;
}