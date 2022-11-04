'use strict';

const headlines = document.querySelectorAll('li');

const createSpan = () => {
  return document.createElement('span');
};

[...headlines].map(headline => {
  if (!headline.children.length) {
    return;
  }

  headline.prepend(createSpan());

  const span = headline.firstChild;

  span.prepend(headline.firstChild.nextSibling);

  span.addEventListener('click', (e) => {
    const items = e.target.closest('span').nextSibling;

    items.hidden = !items.hidden;
  });
});
