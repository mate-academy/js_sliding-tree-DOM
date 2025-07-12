'use strict';

// write code here
const liItems = document.querySelectorAll('li');

liItems.forEach((item) => {
  const nestedUl = item.querySelector('ul');

  if (nestedUl) {
    const titleText = item.firstChild?.textContent?.trim();

    if (titleText) {
      const spanTag = document.createElement('span');

      spanTag.textContent = titleText;

      item.removeChild(item.firstChild);
      item.prepend(spanTag);

      spanTag.addEventListener('click', (e) => {
        nestedUl.style.display =
          nestedUl.style.display === 'none' ? 'block' : 'none';
      });
    }
  }
});
