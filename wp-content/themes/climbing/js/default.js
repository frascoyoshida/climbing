  //smoothScroll
  const scroll = new SmoothScroll('a[href*="#"]', {
    header: '.header',
    speed: 300
  });

  //nav
  const menu = document.querySelector('.header__menu');
  const nav = document.querySelector('.header__nav');
	menu.addEventListener(
    'click',
    event => {
      event.preventDefault();
      const state = menu.getAttribute('data-nav-open');
      if ( state == 'false' ) {
        menu.setAttribute('data-nav-open', 'true');
        nav.setAttribute('data-nav-open', 'true');
      } else {
        menu.setAttribute('data-nav-open', 'false');
        nav.setAttribute('data-nav-open', 'false');
      }
    },
    false
  );
  const nav_anchor = nav.querySelectorAll('a');
  nav_anchor.forEach((item) => {
  	item.addEventListener(
      "click",
      event => {
        const state = menu.getAttribute('data-nav-open');
        if ( state == 'false' ) {
          menu.setAttribute('data-nav-open', 'true');
          nav.setAttribute('data-nav-open', 'true');
        } else {
          menu.setAttribute('data-nav-open', 'false');
          nav.setAttribute('data-nav-open', 'false');
        }
      },
      false
    );
  });

  //swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    centeredSlides:true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    }
  });
