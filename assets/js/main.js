/*=============== SHOW MENU ===============*/
// Get DOM
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close');

// Menu Show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show_menu')
  })
};

// Menu Hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
  })
};

// REMOVE MENU MOBILE 
const navLinks = document.querySelectorAll('.nav_link');

function linkAction() {
  navMenu.classList.remove('show_menu')
};

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  
  if (this.scrollY >= 100) {
    header.classList.add('head-blur')
  } else {
    header.classList.remove('head-blur')
  }
}
window.addEventListener('scroll', scrollHeader);


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  
  if (this.scrollY >= 300) {
    scrollUp.classList.add('show-scroll-up')
  } else {
    scrollUp.classList.remove('show-scroll-up')
  }
}
window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
function scrollActiveSection() {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav_li a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
      sectionsClass.classList.add('active_link')
    } else {
      sectionsClass.classList.remove('active_link')
    }
  })
};
window.addEventListener('scroll', scrollActiveSection)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true //Animations repeat
});

sr.reveal('.home_caption, .explore_caption, .explore_user, .footer');

sr.reveal('.home_card', {
  delay: 600,
  distance: '100px',
  interval: 100
});

sr.reveal('.about_caption, .join_image', {
  origin: 'right'
});

sr.reveal('.about_image, .join_caption', {
  origin: 'left'
});

sr.reveal('.pop_card', {
  interval: 200
});
