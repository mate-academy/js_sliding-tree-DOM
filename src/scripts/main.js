'use strict';

const tree = document.getElementsByTagName('li');

[...tree].forEach(li => {
  if (li.children.length > 0) {
    const spanElem = document.createElement('span');
    const text = li.firstChild;

    li.prepend(spanElem);
    spanElem.append(text);
  }
});

document.body.addEventListener('click', e => {
  const { target } = e;

  if (target.localName === 'li') {
    const elem = target.firstElementChild;

    if (elem) {
      elem.hidden = !elem.hidden;
    };
  }
});
