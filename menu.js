document.addEventListener("DOMContentLoaded", function(){

  
    function showMenu(){
        const menu = document.querySelector(".menu");
        menu.style.height="28%";
    }
    function closeMenu(){
        const menu = document.querySelector(".menu");
        menu.style.height = "0%";
    }
    function clickMenuItems(){
        const menuItems = document.querySelectorAll("section.menu nav ul>li");
        for(let menuItem of menuItems) {
            menuItem.addEventListener("click",closeMenu);
        }
    }
    document.getElementById("menu-button").addEventListener("click", showMenu);
    document.getElementById("close-menu").addEventListener("click", closeMenu);
    clickMenuItems();

    //set #nav-header position:static before using the ff:
    window.addEventListener("scroll", function(){
        // console.log(this.window.scrollY);
        let intro = this.document.querySelector(".intro");
        if(this.window.scrollY >= (intro.offsetHeight+intro.offsetTop)){
            this.document.querySelector("#nav-header").style.position = "sticky";
        } else 
        this.document.querySelector("#nav-header").style.position = "revert";
    });

})