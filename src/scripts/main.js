'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wrapTextWithSpan = (element) => {
    const children = Array.from(element.childNodes);

    children.forEach((chil) => {
      if (chil.nodeType === Node.TEXT_NODE && chil.textContent.trim() !== '') {
        const span = document.createElement('span');

        span.textContent = chil.textContent.trim();
        element.replaceChild(span, chil);
      }
    });
  };

  const listItems = document.querySelectorAll('li');

  listItems.forEach((item) => {
    wrapTextWithSpan(item);
  });

  const spans = document.querySelectorAll('li > span');

  spans.forEach((span) => {
    span.addEventListener('click', (events) => {
      const parentLi = events.target.parentElement;
      const subUl = parentLi.querySelector('ul');

      if (subUl) {
        subUl.hidden = !subUl.hidden;
      }
    });
  });
});
