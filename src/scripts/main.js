'use strict';

const mainList = document.querySelector('.tree');

spanHeaders(mainList);

mainList.addEventListener('click', ev => {
  if (ev.target.tagName === 'SPAN') {
    const nextElement = ev.target.nextElementSibling;

    nextElement.hidden = !nextElement.hidden;
  }
});

function spanHeaders(list) {
  const items = list.querySelectorAll('li');

  items.forEach(item => {
    if (item.children.length > 0) {
      const headerText = item.firstChild.nodeValue.trim();

      item.firstChild.nodeValue = item.firstChild.nodeValue
        .slice(headerText.length);

      item.insertAdjacentHTML('afterbegin',
        `<span>${headerText}</span>`
      );
    }
  });
}
