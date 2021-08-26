'use strict';

const mainList = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');
const headlineItems = [ ...listItems ].filter(item =>
  item.firstElementChild !== null);

headlineItems.forEach(headline => {
  const span = document.createElement('span');
  const headlineText = headline.childNodes[0];

  headline.prepend(span);
  span.append(headlineText);
});

mainList.addEventListener('click', (e) => {
  const element = e.target.closest('span');

  if (!element || !mainList.contains(element)) {
    return;
  }

  const style = getComputedStyle(element.nextElementSibling);

  element.nextElementSibling.style.display = (style.display === 'block')
    ? 'none'
    : 'block';
});
