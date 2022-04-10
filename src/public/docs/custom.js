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

const head = document.querySelector('head');
head.innerHTML += `
  <meta
  name="description"
  content="Api do app Téskiando, que tem como objetivo ajudar usuários a gerenciar tarefas de maneira fácil e rápida."
  />
  <meta name="author" content="Miguel Retroz" />
  <meta
    property="og:url"
    content="https://teskiando-api.herokuapp.com"
  />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Téskiando" />
  <meta
    property="og:description"
    content="Api do app Téskiando, que tem como objetivo ajudar usuários a gerenciar tarefas de maneira fácil e rápida."
  />
  <meta property="og:image" content="https://i.ibb.co/4f9VYRn/T-skiando-Banner.png" />
  <meta
    property="canonical"
    content="https://teskiando-api.herokuapp.com"
  />
  <meta property="keywords" content="api, task, tasks, organization" />
  <meta property="robots" content="api, task, tasks, organization" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:domain"
    content="teskiando-api.herokuapp.com"
  />
  <meta
    property="twitter:url"
    content="https://teskiando-api.herokuapp.com"
  />
  <meta name="twitter:title" content="Api do app Téskiando, que tem como objetivo ajudar usuários a gerenciar tarefas de maneira fácil e rápida." />
  <meta
    name="twitter:description"
    content="Api do app Téskiando, que tem como objetivo ajudar usuários a gerenciar tarefas de maneira fácil e rápida."
  />
  <meta name="twitter:image" content="https://i.ibb.co/4f9VYRn/T-skiando-Banner.png" />
  <meta name="theme-color" content="#3051FF" />
`;

setTimeout(() => {
  const topBar = document.querySelector('.topbar');
  topBar.style.backgroundColor = '#3051FF';

  const topBarImg = document.querySelector('.topbar img');
  topBarImg.src = '/docs/teskiando-logo.svg';
  topBarImg.alt = 'Téskiando Logo';
  topBarImg.height = 60;
}, 100);