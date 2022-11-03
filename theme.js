document.addEventListener("DOMContentLoaded",()=>{
    var theme;
    const themeSwitcher1 = document.getElementById("theme-switcher1");
    const themeSwitcher2 = document.getElementById("theme-switcher2");
    const themePreferenceDark = ()=>window.matchMedia("(prefers-color-scheme: dark");
    
    const checkThemePreference = ()=>{
        const getOSThemePref = ()=>themePreferenceDark.matches?"dark":"light";

        const getThemePrefFromLocalStorage = ()=>{
            return localStorage.getItem("theme");
        }
        const defaultTheme = getOSThemePref();
        const currentTheme = getThemePrefFromLocalStorage();
        console.log("currentTheme: ", currentTheme);
        if (currentTheme==="dark"){
            document.body.classList.toggle("dark-theme");
        } else if (currentTheme==="light"){
            document.body.classList.toggle("light-theme");
        }
        setButtonText(currentTheme??defaultTheme);
    }

    const setButtonText = (theme)=>{
        themeSwitcher1.textContent = theme==="dark"? "Light": "Dark";
        themeSwitcher2.textContent = theme==="dark"? "Light": "Dark";
        // console.log("theme-switcher text: ", themeSwitcher1.textContent);

    }

    const switchTheme = ()=>{
        if(themePreferenceDark.matches){
            document.body.classList.toggle("light-theme");
            document.querySelector(".intro").classList.toggle("light-theme");
            document.querySelector("#nav-header").classList.toggle("light-theme");
            document.querySelector(".default-nav").classList.toggle("light-theme");
            document.querySelector(".ingrid").classList.toggle("light-theme");
            document.querySelector("#div-sections").classList.toggle("light-theme");
            document.querySelector("h1").classList.toggle("light-theme");
            document.querySelector("h2").classList.toggle("light-theme");
            document.querySelector(".card").classList.toggle("light-theme");
            document.querySelector("#contact-me form input").classList.toggle("light-theme");
            document.querySelector("#contact-me form textarea").classList.toggle("light-theme");
            document.querySelector("#contact-me form #submit").classList.toggle("light-theme");
            theme = document.body.classList.contains("light-theme")?"light":"dark";
        }
        else {
            document.body.classList.toggle("dark-theme");
            document.querySelector(".intro").classList.toggle("dark-theme");
            document.querySelector("#nav-header").classList.toggle("dark-theme");
            document.querySelector(".default-nav").classList.toggle("dark-theme");
            document.querySelector(".ingrid").classList.toggle("dark-theme");
            document.querySelector("#div-sections").classList.toggle("dark-theme");
            document.querySelector("h1").classList.toggle("dark-theme");
            document.querySelector("h2").classList.toggle("dark-theme");
            document.querySelector(".card").classList.toggle("dark-theme");
            document.querySelector("#contact-me form input").classList.toggle("dark-theme");
            document.querySelector("#contact-me form textarea").classList.toggle("dark-theme");
            document.querySelector("#contact-me form #submit").classList.toggle("dark-theme");
            theme = document.body.classList.contains("dark-theme")?"dark":"light";

        }
        localStorage.setItem("theme", theme);
        setButtonText(theme);
        
    }
    
    // localStorage.setItem("theme","light");
    checkThemePreference();
    themeSwitcher1.addEventListener("click", switchTheme);
    themeSwitcher2.addEventListener("click", switchTheme);
    // console.log("theme: ", theme);
    

})

