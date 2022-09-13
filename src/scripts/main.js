'use strict';

const headersLi = document.querySelectorAll('li');

for (const itemLi of headersLi) {
  const header = itemLi.firstChild.textContent;

  itemLi.firstChild.textContent = '';

  itemLi.insertAdjacentHTML('afterbegin', `
    <span>
      ${header}
    </span>`);

  itemLi.children[0].addEventListener('click', () => {
    if (itemLi.children[1].style.display !== 'none') {
      itemLi.children[1].style.display = 'none';

      return;
    }

    itemLi.children[1].style.display = 'block';
  });
}
