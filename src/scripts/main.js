'use strict';

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

function hideList() {
  if (event.target.nextSibling !== null) {
    if (!event.target.nextSibling.hidden) {
      event.target.nextSibling.style.display = 'none';
      event.target.nextSibling.hidden = true;
    } else if (event.target.nextSibling.hidden) {
      event.target.nextSibling.style.display = 'block';
      event.target.nextSibling.hidden = !event.target.nextSibling.hidden;
    }
  }
}

for (const span of document.querySelectorAll('span')) {
  span.addEventListener('click', hideList);
}
