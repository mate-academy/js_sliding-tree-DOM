'use strict';

const list = document.querySelector('.tree');

function f(listss) {
  for (const key of [...listss.children]) {
    const span = document.createElement('span');
    const str = key.childNodes[0].textContent.trim();

    span.innerText = str;
    key.replaceChild(span, key.childNodes[0]);

    if ([...key.children][1]) {
      f(key.children[1]);
    }
  }
}

f(list);

document.body.addEventListener('click', e => {
  const item = e.target.closest('span');

  if (!item || !list.contains(item)) {
    return;
  }

  if (e.target.parentElement.children[1]) {
    if (e.target.parentElement.children[1].hidden) {
      e.target.parentElement.children[1].hidden = false;
    } else {
      e.target.parentElement.children[1].hidden = true;
    }
  }
});
