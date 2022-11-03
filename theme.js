document.addEventListener("DOMContentLoaded",()=>{
    var theme;
    var dispButton;
    const themeSwitcher1 = document.getElementById("theme-switcher1");
    const themeSwitcher2 = document.getElementById("theme-switcher2");
    const themePreferenceDark = ()=>window.matchMedia("(prefers-color-scheme: dark");
    
    const checkThemePreference = ()=>{

        const getOSThemePref = ()=>{
            console.log("themePreferenceDark: ", themePreferenceDark().matches);
            if(themePreferenceDark().matches){
                if(!(document.body.classList.contains("dark-theme"))){
                    document.body.classList.add("dark-theme");
                    document.querySelector(".intro").classList.add("dark-theme");
                    document.querySelector("#nav-header").classList.add("dark-theme");
                    document.querySelector(".default-nav").classList.add("dark-theme");
                    document.querySelector(".ingrid").classList.add("dark-theme");
                    document.querySelector("#div-sections").classList.add("dark-theme");
                    document.querySelector("h1").classList.add("dark-theme");
                    document.querySelector("h2").classList.add("dark-theme");
                    document.querySelector(".card").classList.add("dark-theme");
                    document.querySelector("#contact-me form input").classList.add("dark-theme");
                    document.querySelector("#contact-me form textarea").classList.add("dark-theme");
                    document.querySelector("#contact-me form #submit").classList.add("dark-theme");
                }   
                return "dark";
            }
            else {
                if(document.body.classList.contains("dark-theme")){
                document.body.classList.remove("dark-theme");
                document.querySelector(".intro").classList.remove("dark-theme");
                document.querySelector("#nav-header").classList.remove("dark-theme");
                document.querySelector(".default-nav").classList.remove("dark-theme");
                document.querySelector(".ingrid").classList.remove("dark-theme");
                document.querySelector("#div-sections").classList.remove("dark-theme");
                document.querySelector("h1").classList.remove("dark-theme");
                document.querySelector("h2").classList.remove("dark-theme");
                document.querySelector(".card").classList.remove("dark-theme");
                document.querySelector("#contact-me form input").classList.remove("dark-theme");
                document.querySelector("#contact-me form textarea").classList.remove("dark-theme");
                document.querySelector("#contact-me form #submit").classList.remove("dark-theme");
                return "light";
                }
            }
        };

        console.log("getOSThemePref: ", getOSThemePref());
        const getThemePrefFromLocalStorage = ()=>{
            return localStorage.getItem("theme");
        }
        const defaultTheme = getOSThemePref();
        const currentTheme = getThemePrefFromLocalStorage();
        console.log("currentTheme: ", currentTheme);
        if ((currentTheme==="dark")&&(!(document.body.classList.contains("dark-theme")))){
            document.body.classList.add("dark-theme");
            document.querySelector(".intro").classList.add("dark-theme");
            document.querySelector("#nav-header").classList.add("dark-theme");
            document.querySelector(".default-nav").classList.add("dark-theme");
            document.querySelector(".ingrid").classList.add("dark-theme");
            document.querySelector("#div-sections").classList.add("dark-theme");
            document.querySelector("h1").classList.add("dark-theme");
            document.querySelector("h2").classList.add("dark-theme");
            document.querySelector(".card").classList.add("dark-theme");
            document.querySelector("#contact-me form input").classList.add("dark-theme");
            document.querySelector("#contact-me form textarea").classList.add("dark-theme");
            document.querySelector("#contact-me form #submit").classList.add("dark-theme");    
        } else if (currentTheme==="light"){
            if(document.body.classList.contains("dark-theme")){
                document.body.classList.remove("dark-theme");
                document.querySelector(".intro").classList.remove("dark-theme");
                document.querySelector("#nav-header").classList.remove("dark-theme");
                document.querySelector(".default-nav").classList.remove("dark-theme");
                document.querySelector(".ingrid").classList.remove("dark-theme");
                document.querySelector("#div-sections").classList.remove("dark-theme");
                document.querySelector("h1").classList.remove("dark-theme");
                document.querySelector("h2").classList.remove("dark-theme");
                document.querySelector(".card").classList.remove("dark-theme");
                document.querySelector("#contact-me form input").classList.remove("dark-theme");
                document.querySelector("#contact-me form textarea").classList.remove("dark-theme");
                document.querySelector("#contact-me form #submit").classList.remove("dark-theme");
            }
        }
        
        setButtonText(currentTheme??defaultTheme);
    }

    const setButtonText = (theme)=>{
        themeSwitcher1.textContent = theme==="dark"? "Light": "Dark";
        themeSwitcher2.textContent = theme==="dark"? "Light": "Dark";
        // console.log("theme-switcher text: ", themeSwitcher1.textContent);

    }

    const switchTheme = ()=>{
        // if(themePreferenceDark().matches){
        if(theme==="dark")
            theme = "light";
        else
            theme = "dark";

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
        localStorage.setItem("theme", theme);
        setButtonText(theme);
        
    }
    
    // localStorage.setItem("theme","light");
    
    checkThemePreference();
    themeSwitcher1.addEventListener("click",  switchTheme);
    themeSwitcher2.addEventListener("click",  switchTheme);
    // console.log("theme: ", theme);
 

})

