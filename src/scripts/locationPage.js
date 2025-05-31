import mustache from 'mustache';

const data = {
  icon_1: 'Twitter',
  icon_2: 'Facebook',
};

Promise.all([
  fetch('/partials/header.html').then((res) => res.text()),
  fetch('/partials/footer.html').then((res) => res.text()),
  fetch('location-page.html').then((res) => res.text()),
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
