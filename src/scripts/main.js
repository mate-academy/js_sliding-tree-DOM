'use strict';

// write code here
const tree = document.querySelector('.tree');
const liCollection = Array.from(document.querySelectorAll('li'));

const wrapWithSpan = (collection) => {
  collection.forEach(element => {
    const span = document.createElement('span');

    if (element.children[0]) {
      span.append(element.childNodes[0]);
      element.prepend(span);
    }
  });
};

wrapWithSpan(liCollection);

tree.addEventListener('click', (e) => {
  const headline = e.target.closest('span');

  if (!headline) {
    return;
  }

  const headlineContent = headline.nextElementSibling;

  if (!headlineContent.style.display) {
    headlineContent.style.display = 'none';
  } else {
    headlineContent.style.display = '';
  }
});
