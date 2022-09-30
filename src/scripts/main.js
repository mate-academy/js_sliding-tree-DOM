'use strict';

const ul = document.querySelector('.tree');
const listElements = [...ul.children];

wrapInSpan(listElements);

function wrapInSpan(elements) {
  elements.forEach((elem) => {
    if (elem.children.length > 0) {
      wrapInSpan([...elem.children]);

      const title = elem.firstChild.textContent.trim();

      if (title.length > 0) {
        const insert = `<span>${title}</span>`;

        elem.firstChild.remove();
        elem.insertAdjacentHTML('afterbegin', insert);
      }

      // eslint-disable-next-line no-undef
      elem.addEventListener('click', accordeon);
    }
  });
}

function accordeon(e) {
  if (e.target.tagName.toLowerCase() === 'span') {
    const slideElement = e.target.nextElementSibling;

    slideElement.style.overflow = 'hidden';

    if (slideElement.clientHeight !== 0) {
      slideElement.style.maxHeight = `${slideElement.scrollHeight}px`;

      const hideList = slideElement
        .animate({ maxHeight: ['0px'] }, 400);

      hideList.addEventListener('finish', () => {
        slideElement.style.maxHeight = '0px';
      });
    } else {
      const showList = slideElement
        .animate({ maxHeight: [`${slideElement.scrollHeight}px`] }, 400);

      showList.addEventListener('finish', () => {
        slideElement.style.maxHeight = null;
      });
    }
  }
}
