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
// 滚动部分活动链接


/*=============== SCROLL REVEAL ANIMATION ===============*/
// 显示滚动动画
