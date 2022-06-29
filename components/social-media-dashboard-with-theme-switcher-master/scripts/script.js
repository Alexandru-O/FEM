const btn = document.querySelector('.btn-toggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if(prefersDarkScheme.matches)
    btn.checked = true;
else
    btn.checked = false;

//get user's theme pref
const currentTheme = localStorage.getItem('theme');

if(currentTheme == "dark") {
    document.body.classList.toggle("dark-mode");
} else if ("currentTheme" == "light") {
    document.body.classList.toggle("light-mode");
}

//listen for click on change theme btn
btn.addEventListener("click", () => {
    if(prefersDarkScheme.matches) {
        console.log("e aici 1");
        document.body.classList.toggle("light-mode");
        var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    } else {
        console.log("e aici 2");
        document.body.classList.toggle("dark-mode");
        var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    }
    localStorage.setItem("theme", theme);
})
