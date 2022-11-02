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
    const hidden = span.nextSibling.style;

    if (hidden.display === 'none') {
      hidden.display = '';

      return;
    };

    hidden.display = 'none';
  });
});
