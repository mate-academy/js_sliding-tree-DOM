'use strict';

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

function hideList() {
  if (event.target.nextSibling !== null) {
    if (!event.target.nextSibling.isHidden) {
      event.target.nextSibling.style.display = 'none';
      event.target.nextSibling.isHidden = true;
    } else if (event.target.nextSibling.isHidden) {
      event.target.nextSibling.style.display = 'block';
      event.target.nextSibling.isHidden = false;
    }
  }
}

for (const span of document.querySelectorAll('span')) {
  span.addEventListener('click', hideList);
}
