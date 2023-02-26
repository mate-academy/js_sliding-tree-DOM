'use strict';

const liElements = document.querySelectorAll('li');

liElements.forEach(li => {
  const newSpanElement = document.createElement('span');
  const item = li.children;

  if (item.length > 0) {
    li.prepend(newSpanElement);
    newSpanElement.append(newSpanElement.nextSibling);
  }
});

const spanElements = document.querySelectorAll('span');

for (const span of spanElements) {
  span.addEventListener('click', (e) => {
    const children = e.target.parentNode.querySelector('ul');

    if (!children) {
      return;
    }

    if (children.style.display === 'none') {
      children.style.display = 'initial';

      return;
    }

    children.style.display = 'none';
  });
}
