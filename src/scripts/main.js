'use strict';

const headlines = document.querySelectorAll('li');

for (const elem of headlines) {
  if (elem.children.length > 0) {
    const span = document.createElement('span');
    const firstChildContent = elem.firstChild.textContent;

    span.textContent = firstChildContent;
    span.classList.add('active');
    elem.firstChild.remove();
    elem.prepend(span);
  }
}

const spans = document.querySelectorAll('span');

spans.forEach(span => {
  span.addEventListener('click', () => {
    span.classList.toggle('active');

    const spanChildren = [...span.nextElementSibling.children];

    spanChildren.forEach(child => {
      child.style.display = span.classList.contains('active')
        ? 'list-item' : 'none';
    });
  });
});
