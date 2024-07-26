'use strict';

// write code here
const tree = document.querySelector('.tree');
const headlines = [...tree.querySelectorAll('li')];
const indexTitle = 1;

const SpanElement = (text) => {
  const span = document.createElement('span');

  span.textContent = text;

  return span;
};

const App = () => {
  for (const headline of headlines) {
    const span = SpanElement();

    if (headline.firstChild.textContent.includes('  ')) {
      span.textContent = headline.firstChild.textContent;
      headline.firstChild.replaceWith(span);
    }

    span.addEventListener('click', () => {
      const list = headline.children[indexTitle];

      if (list.style.display === '') {
        list.style.display = 'none';
      } else {
        list.style.display = '';
      }
    });
  }
};

App();
