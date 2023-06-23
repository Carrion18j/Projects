'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

//Nav Links HOver Effect
const navFn = (e, opa) => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opa;
    });
    logo.style.opacity = opa;
  }
};

nav.addEventListener('mouseover', e => navFn(e, '0.5'));
nav.addEventListener('mouseout', e => navFn(e, '1'));

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(e => e.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.querySelector('.btn--scroll-to').addEventListener('click', () => {
  document.querySelector('#section--1').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  if (e.target.className === 'nav__link') {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});

//Tapped Component
tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(e => e.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(e => e.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Making nav bar sticky
const header = document.querySelector('.header');

const stickyNav = entries => {
  const [entri] = entries;
  nav.classList.remove('sticky');
  if (!entri.intersectionRatio) nav.classList.add('sticky');
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

// Slowly reaviling sections
const allSection = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;
  entry.isIntersecting && entry.target.classList.remove('section--hidden');
  // observer.unobserve(entry.target);
};

const secSloRevObsObj = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(
  revealSection,
  secSloRevObsObj
);
allSection.forEach(e => {
  e.classList.add('section--hidden');
  sectionObserver.observe(e);
});

//Lazy loading img
const imgTargets = document.querySelectorAll('img[data-src]');

const loadingImg = (entries, observe) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );
  observe.unobserve(entry.target);
};

const imgObj = {
  root: null,
  threshold: 0,
  rootMargin: '200px',
};

const imageObserver = new IntersectionObserver(loadingImg, imgObj);

imgTargets.forEach(e => imageObserver.observe(e));

//Implementing slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  
};
slider();
