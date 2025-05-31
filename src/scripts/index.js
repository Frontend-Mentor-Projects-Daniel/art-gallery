import mustache from 'mustache';

const data = {};

Promise.all([
  fetch('/partials/header.html').then((res) => res.text()),
  fetch('/partials/footer.html').then((res) => res.text()),
  fetch('index.html').then((res) => res.text()),
]).then(([header, footer, locationPage]) => {
  const rendered = mustache.render(
    locationPage,
    { data },
    {
      header,
      footer,
    }
  );

  document.body.innerHTML = rendered;
});
