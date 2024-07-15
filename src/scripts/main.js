'use strict';

const subList = document.querySelectorAll('ul');

[...document.querySelectorAll('li')]
  .filter((item) => {
    let containsList = false;

    subList.forEach((list) => {
      if (item.contains(list)) {
        containsList = true;
      }
    });

    return containsList;
  })
  .forEach((item) => {
    const text = item.firstChild.textContent.trim();

    item.lastElementChild.style.maxHeight = '300px';

    const newChild = document.createElement('span');

    newChild.style.cursor = 'pointer';

    newChild.innerText = text;
    item.firstChild.replaceWith(newChild);
  });

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const list = e.target.parentElement.lastElementChild;
    const isDisplayed = list.style.opacity !== '0';

    list.style.transition = 'all 1s linear';
    list.style.maxHeight = isDisplayed ? '0' : '200px';
    list.style.opacity = isDisplayed ? '0' : '1';
  }
});
