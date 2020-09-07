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
    e => {
      e.preventDefault();
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
  const navAnchor = nav.querySelectorAll('a');
  navAnchor.forEach((item) => {
  	item.addEventListener(
      "click",
      e => {
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

  //modal
  const download = document.querySelector('.download');
  const openModal = (e) => {
    download.setAttribute('data-open-modal', 'true');
  }
  const closeModal = (e) => {
    download.setAttribute('data-open-modal', 'false');
  }
  const downloadClose = document.querySelector('.download__close');
	downloadClose.addEventListener(
    "click",
    e => {
      closeModal();
    },
    false
  );
  document.addEventListener(
    "click",
    e => {
      if ( !e.target.closest('.download__wrap') && !e.target.closest('.button') ) {
        closeModal();
      }
    },
    false
  );
  const downloadAnchor = download.querySelectorAll('a');
  downloadAnchor.forEach((item) => {
  	item.addEventListener(
      "click",
      e => {
        closeModal();
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
