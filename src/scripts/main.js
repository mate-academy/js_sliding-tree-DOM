'use strict';

const liList = document.querySelectorAll('li');

for (let i = 0; i < [...liList].length; i++) {
  if (liList[i].children.length > 0) {
    const span = document.createElement('span');

    liList[i].prepend(span);

    span.classList = 'toggler';

    span.innerText = `${span.nextSibling.textContent.trim()}`;

    span.nextSibling.remove();
  }
}

document.addEventListener('click', e => {
  const item = e.target;

  if (!item.classList.contains('toggler')) {
    return;
  }

  item.nextSibling.style.display = item.nextSibling.style.display === 'none'
    ? 'block'
    : 'none';
});
