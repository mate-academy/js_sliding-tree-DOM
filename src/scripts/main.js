'use strict';

const listItemsWithUl = document.querySelectorAll('li:has(ul)');

listItemsWithUl.forEach((item) => {
  const headerText = item.childNodes[0];
  const span = document.createElement('span');

  span.textContent = headerText.textContent;
  headerText.replaceWith(span);

  span.addEventListener('click', (ev) => {
    const currentChildList = item.querySelector('ul');

    if (currentChildList) {
      const isVisible = currentChildList.style.display === 'block';

      currentChildList.style.display = isVisible ? 'none' : 'block';
    }
    ev.stopPropagation();
  });
});
