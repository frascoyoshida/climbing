const scroll=new SmoothScroll('a[href*="#"]',{header:".header",speed:300}),menu=document.querySelector(".header__menu"),nav=document.querySelector(".header__nav");menu.addEventListener("click",e=>{e.preventDefault();"false"==menu.getAttribute("data-nav-open")?(menu.setAttribute("data-nav-open","true"),nav.setAttribute("data-nav-open","true")):(menu.setAttribute("data-nav-open","false"),nav.setAttribute("data-nav-open","false"))},!1);const nav_anchor=nav.querySelectorAll("a");nav_anchor.forEach(e=>{e.addEventListener("click",e=>{"false"==menu.getAttribute("data-nav-open")?(menu.setAttribute("data-nav-open","true"),nav.setAttribute("data-nav-open","true")):(menu.setAttribute("data-nav-open","false"),nav.setAttribute("data-nav-open","false"))},!1)});const swiper=new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},autoplay:{delay:5e3},centeredSlides:!0,slidesPerView:1,breakpoints:{768:{slidesPerView:2}}});