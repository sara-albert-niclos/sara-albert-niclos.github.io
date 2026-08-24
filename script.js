const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☼";
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");

        themeToggle.textContent = isDark ? "☼" : "☾";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}
