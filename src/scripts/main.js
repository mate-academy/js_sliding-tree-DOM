'use strict';

const list = document.querySelector('.tree');

const addSpan = listEl => {
  const liArray = [...listEl.querySelectorAll('li')];

  for (const li of liArray) {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;

    li.replaceChild(span, li.firstChild);
  }
};

addSpan(list);

list.addEventListener('click', e => {
  const targetList = e.target.parentNode.querySelector('ul');

  if (e.target.tagName !== 'SPAN' || !targetList) {
    return;
  }

  if (targetList.style.display === 'none') {
    targetList.style.display = 'block';
  } else {
    targetList.style.display = 'none';
  }
});
