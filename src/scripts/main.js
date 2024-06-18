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

function createSpansForCategories() {
  const tree = document.querySelector('.tree');

  const listItemsWithUl = tree.querySelectorAll('li > ul');

  listItemsWithUl.forEach((ul) => {
    const parentText = ul.parentElement.firstChild.textContent;

    ul.parentElement.firstChild.textContent = '';

    if (!ul.parentElement.querySelector('span.sliding-span')) {
      const span = document.createElement('span');

      span.textContent = parentText;
      span.classList.add('sliding-span');

      span.addEventListener('click', () => {
        toggleVisibility(ul);
      });

      ul.parentElement.insertBefore(span, ul);
    }
  });
}

createSpansForCategories();
