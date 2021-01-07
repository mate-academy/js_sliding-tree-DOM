'use strict';

const lists = [...document.querySelectorAll('li')];

lists.forEach(list => {
  const titleWrap = document.createElement('span');

  titleWrap.textContent = list.firstChild.textContent;
  list.firstChild.remove();
  list.prepend(titleWrap);

  titleWrap.addEventListener('click', (event) => {
    if (event.target === titleWrap) {
      const nestedList = list.querySelector('ul');

      if (nestedList) {
        if (nestedList.style.display === 'none') {
          nestedList.style.display = 'block';
        } else {
          nestedList.style.display = 'none';
        }
      }
    }
  });
});
