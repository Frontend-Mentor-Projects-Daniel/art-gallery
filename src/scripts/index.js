import mustache from 'mustache';

fetch('../../index.html')
  .then((res) => res.text())
  .then((template) => {
    const rendered = mustache.render(template, {});
    document.body.innerHTML = rendered;
  });
