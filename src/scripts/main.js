'use strict';

const list = document.querySelectorAll('ul');

list.forEach((element) => {
  const lis = element.querySelectorAll('li');

  lis.forEach((li) => {
    const header = li.firstChild.textContent;
    const span = document.createElement('span');
    const ulInLi = li.querySelector('ul');

    if (header && ulInLi) {
      li.firstChild.textContent = '';

      span.textContent = header;

      li.insertBefore(span, ulInLi);
    }

    let isHidden = false;

    span.addEventListener('click', () => {
      if (isHidden) {
        ulInLi.style.display = 'block';
      } else {
        ulInLi.style.display = 'none';
      }

      isHidden = !isHidden;
    });
  });
});
