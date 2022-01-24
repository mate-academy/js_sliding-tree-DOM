'use strict';

const tree = document.querySelector('.tree');

addSpan(tree);

document.addEventListener('click', (e) => {
  const element = e.target;

  if (element.tagName === 'SPAN') {
    if (element.nextElementSibling.hidden === true) {
      element.nextElementSibling.hidden = false;
    } else {
      element.nextElementSibling.hidden = true;
    }
  }
});

function addSpan(ul) {
  const list = [...ul.children];

  list.map((el) => {
    if (el.children.length > 0 && el.tagName === 'UL') {
      addSpan(el.children[0]);

      const arr = el.innerText.split('\n');
      const html = el.innerHTML.replace(arr[0], '');

      el.innerHTML = `<span>${arr[0]}</span>` + html;
    }
  });
}
