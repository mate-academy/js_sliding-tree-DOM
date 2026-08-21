'use strict';

const tree = document.querySelector('.tree');

const allElements = tree.querySelectorAll('li');

for (let i = allElements.length - 1; i >= 0; i--) {
  const element = allElements[i];
  let innerHtmlOfElement = element.innerHTML;

  innerHtmlOfElement = innerHtmlOfElement.split('<ul>');

  if (innerHtmlOfElement.length > 1) {
    innerHtmlOfElement[0] = `<span>${innerHtmlOfElement[0].trim()}</span>`;
  }

  element.innerHTML = innerHtmlOfElement.join('<ul>');
}

tree.addEventListener('click', (e) => {
  const element = e.target.closest('span');

  if (!element) {
    return;
  }

  const parentElement = element.parentElement;
  const elementsToHide = parentElement.children;

  [...elementsToHide].forEach((el) => {
    if (el.tagName === 'UL') {
      if (el.style.display === 'none') {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    }
  });
});
