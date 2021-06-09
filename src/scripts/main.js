'use strict';

const tree = document.querySelector('.tree');

const list = document.querySelectorAll('li');

for (const item of [...list]) {
  const element = document.createElement('span'); // created empty element span

  const [ text ] = item.childNodes; // text from the list of the childNodes;

  element.append(text);
  item.prepend(element);
}

tree.addEventListener('click', (evnt) => {
  const target = evnt.target;
  const check = document.elementFromPoint(evnt.clientX, evnt.clientY);

  if (check.tagName === 'SPAN') {
    if (target.nextElementSibling === null) {
      return;
    }

    if (target.nextElementSibling.nodeName === 'UL') {
      // console.log(target.nextElementSibling.style.display = 'none')
      target.nextElementSibling.style.display
      = (target.nextElementSibling.style.display === '')
          ? target.nextElementSibling.style.display = 'none'
          : target.nextElementSibling.style.display = '';
    }
  }
});
