import mustache from 'mustache';

const data = {
  icon_1: 'Twitter',
  icon_2: 'Facebook',
};

Promise.all([
  fetch('../pages/partials/header.html').then((res) => res.text()),
  fetch('../pages/partials/footer.html').then((res) => res.text()),
  fetch('../pages/location-page.html').then((res) => res.text()),
]).then(([header, footer, locationPage]) => {
  const rendered = mustache.render(
    locationPage,
    { name: 'Daniel', ...data },
    {
      header,
      footer,
    }
  );

  document.body.innerHTML = rendered;
});
