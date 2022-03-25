document.querySelector('title').innerText = 'Téskiando Api - Docs';

let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = '/docs/favicon.ico';

const link16 = document.querySelector("link[sizes~='16x16']");
if (link16) {
  link16.href = '/docs/favicon-16x16.png';
}

setTimeout(() => {
  const topBar = document.querySelector('.topbar');
  topBar.style.backgroundColor = '#3051FF';

  const topBarImg = document.querySelector('.topbar img');
  topBarImg.src = '/docs/teskiando-logo.svg';
  topBarImg.alt = 'Téskiando Logo';
  topBarImg.height = 60;
}, 100);