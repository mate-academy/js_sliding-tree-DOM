'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const tree = document.getElementById("tree");

  // Wrap headline text in <span> for all <li> that have children
  for (const li of tree.querySelectorAll("li")) {
    const childUl = li.querySelector("ul");
    if (!childUl) continue; // skip leaf nodes

    // Extract the plain text from the li (the headline part)
    const textNode = li.firstChild;
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.textContent = textNode.textContent.trim();
      li.insertBefore(span, childUl);
      li.removeChild(textNode);
    }
  }

  // Handle clicks on the <span> headlines
  tree.addEventListener("click", (event) => {
    if (event.target.tagName !== "SPAN") return;

    const parentLi = event.target.closest("li");
    const childrenContainer = parentLi.querySelector("ul");
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
  });
});
