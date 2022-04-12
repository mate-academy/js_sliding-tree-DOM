'use strict';

function wrapHeadlines(ul) {
  const items = ul.querySelectorAll('li');
  const headlines = [...items]
    .filter(item => item.querySelector('ul'));

  headlines.forEach(headline => {
    const span = document.createElement('span');

    span.innerText = headline.innerText.split('\n')[0];

    headline.firstChild.replaceWith(span);
  });
}

function hideChildList(e) {
  const list = e.target.closest('li');
  const childList = list.querySelector('ul');

  if (!childList) {
    return;
  }

  if (childList.style.display !== 'none') {
    childList.style.display = 'none';
  } else {
    childList.style.display = '';
  }
}

const tree = document.querySelector('.tree');

wrapHeadlines(tree);
tree.addEventListener('click', hideChildList);
