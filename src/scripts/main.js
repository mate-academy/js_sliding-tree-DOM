'use strict';

const slidingLists = document.querySelectorAll('span');

slidingLists.forEach((span) => {
  span.addEventListener('click', () => {
    const parentLi = span.parentElement;
    const childUl = parentLi.querySelector('ul');

    if (childUl) {
      toggleVisibility(childUl);
    }
  });
});

const toggleVisibility = (element) => {
  if (element.style.display !== 'none') {
    element.style.display = 'none';
  } else {
    element.style.display = '';
  }
};
