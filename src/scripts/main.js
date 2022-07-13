'use strict';

for (const item of document.querySelectorAll('li')) {
  if (!item.children.length) {
    continue;
  }

  const span = document.createElement('span');

  span.innerText = item.childNodes[0].textContent;
  item.childNodes[0].remove();
  item.prepend(span);

  item.addEventListener('click', (clickEvent) => {
    clickEvent.stopPropagation();

    clickEvent.target
      .nextSibling.hidden = !clickEvent.target.nextSibling.hidden;
  });
}
