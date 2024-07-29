'use strict';

// write code here
const tree = document.querySelector('.tree');
const headlines = [...document.querySelectorAll('li')];

headlines.forEach((el) => {
  const span = document.createElement('span');
  const headline = el;

  span.textContent = headline.firstChild.textContent;

  headline.firstChild.replaceWith(span);
});

const clickHandler = (e) => {
  if (e.target.tagName === 'SPAN') {
    const spanChild = e.target.nextSibling;

    if (spanChild.style.display === 'none') {
      spanChild.style.display = 'block';
    } else {
      spanChild.style.display = 'none';
    }
  }
};

tree.addEventListener('click', clickHandler);
