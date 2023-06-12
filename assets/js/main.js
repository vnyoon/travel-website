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
// 头部添加模糊

/*=============== SHOW SCROLL UP ===============*/ 
// 显示滚动顶部


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// 滚动部分活动链接


/*=============== SCROLL REVEAL ANIMATION ===============*/
// 显示滚动动画
