'use strict';

const list = document.getElementsByTagName('li');

for (const li of [...list]) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);

  span.onclick = function(e) {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  };
}
