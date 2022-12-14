document.addEventListener("DOMContentLoaded", () => {
    var theme;
    var dispButton;
    const dark = `<span class="material-symbols-outlined" style="font-size: 36px"> toggle_on </span>`;
    const light = `<span class="material-symbols-outlined" style="font-size: 36px"> toggle_off </span>`;

    const themeSwitcher1 = document.getElementById("theme-switcher1");
    const themeSwitcher2 = document.getElementById("theme-switcher2");
    const themePreferenceDark = () => window.matchMedia("(prefers-color-scheme: dark");

    const setButtonText = (theme) => {
        themeSwitcher1.innerHTML = theme === "dark" ? dark : light;
        themeSwitcher2.innerHTML = theme === "dark" ? dark : light;
        // console.log("theme-switcher text: ", themeSwitcher1.textContent);

    }
    const checkThemePreference = () => {

        const getOSThemePref = () => {
            console.log("themePreferenceDark: ", themePreferenceDark().matches);
            if (themePreferenceDark().matches) {
                if (!(document.body.classList.contains("dark-theme"))) {
                    document.body.classList.add("dark-theme");
                    document.querySelector(".intro")?.classList.add("dark-theme");
                    document.querySelector("#nav-header")?.classList.add("dark-theme");
                    document.querySelector(".default-nav")?.classList.add("dark-theme");
                    document.querySelector("#ingrid")?.classList.add("dark-theme");
                    document.querySelector("#div-sections")?.classList.add("dark-theme");
                    document.querySelector(".h2-divs")?.classList.add("dark-theme");
                    document.querySelector(".cardsection")?.classList.add("dark-theme");
                    document.querySelector("#contact-me form input")?.classList.add("dark-theme");
                    document.querySelector("#contact-me form textarea")?.classList.add("dark-theme");
                    document.querySelector("#contact-me form #submit")?.classList.add("dark-theme");
                    document.querySelector("footer p")?.classList.add("dark-theme");
                    const contactLabels = document.querySelectorAll("#contact label");
                    contactLabels?.forEach(element => {
                        element.classList.add("dark-theme");
                    });
                }
                return "dark";
            }
            else {
                if (document.body.classList.contains("dark-theme")) {
                    document.body.classList.remove("dark-theme");
                    document.querySelector(".intro")?.classList.remove("dark-theme");
                    document.querySelector("#nav-header")?.classList.remove("dark-theme");
                    document.querySelector(".default-nav")?.classList.remove("dark-theme");
                    document.querySelector("#ingrid")?.classList.remove("dark-theme");
                    document.querySelector("#div-sections")?.classList.remove("dark-theme");
                    document.querySelector(".h2-divs")?.classList.remove("dark-theme");
                    document.querySelector(".cardsection")?.classList.remove("dark-theme");
                    document.querySelector("#contact-me form input")?.classList.remove("dark-theme");
                    document.querySelector("#contact-me form textarea")?.classList.remove("dark-theme");
                    document.querySelector("#contact-me form #submit")?.classList.remove("dark-theme");
                    document.querySelector("footer p")?.classList.remove("dark-theme");
                    document.querySelectorAll("#contact label")?.classList.remove("dark-theme");
                    // const contactLabels = document.querySelectorAll("#contact label");
                    contactLabels?.forEach(element => {
                        element.classList.remove("dark-theme");
                    });

                    return "light";
                }
            }
        };

        console.log("getOSThemePref: ", getOSThemePref());
        const getThemePrefFromLocalStorage = () => {
            return localStorage.getItem("theme");
        }
        const defaultTheme = getOSThemePref();
        const currentTheme = getThemePrefFromLocalStorage() ?? defaultTheme;
        console.log("currentTheme: ", currentTheme);
        if (currentTheme === "dark") {
            if (!(document.body.classList.contains("dark-theme"))) {
                document.body.classList.add("dark-theme");
                document.querySelector(".intro")?.classList.add("dark-theme");
                document.querySelector("#nav-header")?.classList.add("dark-theme");
                document.querySelector(".default-nav")?.classList.add("dark-theme");
                document.querySelector("#ingrid")?.classList.add("dark-theme");
                document.querySelector("#div-sections")?.classList.add("dark-theme");
                document.querySelector(".h2-divs")?.classList.add("dark-theme");
                document.querySelector(".cardsection")?.classList.add("dark-theme");
                document.querySelector("#contact-me form input")?.classList.add("dark-theme");
                document.querySelector("#contact-me form textarea")?.classList.add("dark-theme");
                document.querySelector("#contact-me form #submit")?.classList.add("dark-theme");
                document.querySelector("footer p")?.classList.add("dark-theme");
                // document.querySelectorAll("#contact label")?.classList.add("dark-theme");
                const contactLabels = document.querySelectorAll("#contact label");
                contactLabels?.forEach(element => {
                    element.classList.add("dark-theme");
                });


            }
            if ((document.body.classList.contains("light-theme"))) {
                document.body.classList.remove("dark-theme");
                document.querySelector(".intro")?.classList.remove("light-theme");
                document.querySelector("#nav-header")?.classList.remove("light-theme");
                document.querySelector(".default-nav")?.classList.remove("light-theme");
                document.querySelector("#ingrid")?.classList.remove("light-theme");
                document.querySelector("#div-sections")?.classList.remove("light-theme");
                document.querySelector(".h2-divs")?.classList.remove("light-theme");
                document.querySelector(".cardsection")?.classList.remove("light-theme");
                document.querySelector("#contact-me form input")?.classList.remove("light-theme");
                document.querySelector("#contact-me form textarea")?.classList.remove("light-theme");
                document.querySelector("#contact-me form #submit")?.classList.remove("light-theme");
                document.querySelector("footer p")?.classList.remove("light-theme");
                // document.querySelectorAll("#contact label")?.classList.remove("light-theme");
                const contactLabels = document.querySelectorAll("#contact label");
                contactLabels?.forEach(element => {
                    element.classList.remove("light-theme");
                });

            }
        }
        else {  //if (currentTheme==="light")
            if (document.body.classList.contains("dark-theme")) {
                document.body.classList.remove("dark-theme");
                document.querySelector(".intro")?.classList.remove("dark-theme");
                document.querySelector("#nav-header")?.classList.remove("dark-theme");
                document.querySelector(".default-nav")?.classList.remove("dark-theme");
                document.querySelector("#ingrid")?.classList.remove("dark-theme");
                document.querySelector("#div-sections")?.classList.remove("dark-theme");
                document.querySelector(".h2-divs")?.classList.remove("dark-theme");
                document.querySelector(".cardsection")?.classList.remove("dark-theme");
                document.querySelector("#contact-me form input")?.classList.remove("dark-theme");
                document.querySelector("#contact-me form textarea")?.classList.remove("dark-theme");
                document.querySelector("#contact-me form #submit")?.classList.remove("dark-theme");
                document.querySelector("footer p")?.classList.remove("dark-theme");
                // document.querySelectorAll("#contact label")?.classList.remove("dark-theme");
                const contactLabels = document.querySelectorAll("#contact label");
                contactLabels?.forEach(element => {
                    element.classList.remove("dark-theme");
                });


            }
            if (!document.body.classList.contains("light-theme")) {
                document.body.classList.add("light-theme");
                document.querySelector(".intro")?.classList.add("light-theme");
                document.querySelector("#nav-header")?.classList.add("light-theme");
                document.querySelector(".default-nav")?.classList.add("light-theme");
                document.querySelector("#ingrid")?.classList.add("light-theme");
                document.querySelector("#div-sections")?.classList.add("light-theme");
                document.querySelector(".h2-divs")?.classList.add("light-theme");
                document.querySelector(".cardsection")?.classList.add("light-theme");
                document.querySelector("#contact-me form input")?.classList.add("light-theme");
                document.querySelector("#contact-me form textarea")?.classList.add("light-theme");
                document.querySelector("#contact-me form #submit")?.classList.add("light-theme");
                document.querySelector("footer p")?.classList.add("light-theme");
                // document.querySelectorAll("#contact label")?.classList.add("light-theme");  
                const contactLabels = document.querySelectorAll("#contact label");
                contactLabels?.forEach(element => {
                    element.classList.add("light-theme");
                });

            }
        }
        console.log("currentTheme for button: ", currentTheme);
        setButtonText(currentTheme);
        return currentTheme;
    }


    const switchTheme = () => {

        theme = localStorage.getItem("theme");
        console.log("theme before click: ", theme);
        if (theme === "dark")
            theme = "light";
        else
            theme = "dark";

        console.log("theme to display now: ", theme);


        document.body.classList.toggle("dark-theme");
        document.querySelector(".intro")?.classList.toggle("dark-theme");
        document.querySelector("#nav-header")?.classList.toggle("dark-theme");
        document.querySelector(".default-nav")?.classList.toggle("dark-theme");
        document.querySelector("#ingrid")?.classList.toggle("dark-theme");
        document.querySelector("#div-sections")?.classList.toggle("dark-theme");
        document.querySelector(".h2-divs")?.classList.toggle("dark-theme");
        document.querySelector(".cardsection")?.classList.toggle("dark-theme");
        document.querySelector("#contact-me form input")?.classList.toggle("dark-theme");
        document.querySelector("#contact-me form textarea")?.classList.toggle("dark-theme");
        document.querySelector("#contact-me form #submit")?.classList.toggle("dark-theme");
        document.querySelector("footer p")?.classList.toggle("dark-theme");
        // document.querySelectorAll("#contact label")?.classList.toggle("dark-theme");
        const contactLabels = document.querySelectorAll("#contact label");
        contactLabels?.forEach(element => {
            element.classList.toggle("dark-theme");
        });



        document.body.classList.toggle("light-theme");
        document.querySelector(".intro")?.classList.toggle("light-theme");
        document.querySelector("#nav-header")?.classList.toggle("light-theme");
        document.querySelector(".default-nav")?.classList.toggle("light-theme");
        document.querySelector("#ingrid")?.classList.toggle("light-theme");
        document.querySelector("#div-sections")?.classList.toggle("light-theme");
        document.querySelector(".h2-divs")?.classList.toggle("light-theme");
        document.querySelector(".cardsection")?.classList.toggle("light-theme");
        document.querySelector("#contact-me form input")?.classList.toggle("light-theme");
        document.querySelector("#contact-me form textarea")?.classList.toggle("light-theme");
        document.querySelector("#contact-me form #submit")?.classList.toggle("light-theme");
        document.querySelector("footer p")?.classList.toggle("light-theme");
        // document.querySelectorAll("#contact label")?.classList.toggle("light-theme");
        contactLabels?.forEach(element => {
            element.classList.toggle("light-theme");
        });

        localStorage.setItem("theme", theme);
        setButtonText(theme);
        console.log("theme after click: ", theme);

    }

    // localStorage.setItem("theme","light");

    var initialTheme = checkThemePreference();
    console.log("initialTheme:", initialTheme);
    localStorage.setItem("theme", initialTheme);
    themeSwitcher1.addEventListener("click", switchTheme);
    themeSwitcher2.addEventListener("click", switchTheme);
    // console.log("theme: ", theme);


})

