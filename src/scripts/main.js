'use strict';

document.querySelectorAll('.tree li').forEach((listItem) => {
  const headerSpan = document.createElement('span');

  headerSpan.textContent = listItem.firstChild.textContent;
  headerSpan.style.cursor = 'pointer';

  listItem.insertBefore(headerSpan, listItem.firstChild);
  listItem.firstChild.nextSibling.remove();

  headerSpan.addEventListener('click', () => {
    const subList = listItem.querySelector('ul');

    if (subList) {
      subList.hidden = !subList.hidden;
    }
  });
});
