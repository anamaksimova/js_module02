const plusZero = (num) => {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
};
const fetchRequest = async (url, {
  method = 'GET',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };
    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      if (callback) callback(null, data);
      return data;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {

    //   callback(err);
  }
};
const renderNewsCard = ({title, description, url, urlToImage, publishedAt, author}) => {
  const newsCard = document.createElement('li');

  newsCard.classList.add('news-item');
  newsCard.insertAdjacentHTML('beforeend', `
    <img src="${urlToImage}" alt="" class="news-image" height="200">
    <h3 class="news-title">
      <a href="${url}" class="news-link" target="_blank">${title}</a>
    </h3>
    <p class="news-description">${description}</p>
    <div class="news-footer">
      <time class="news-datetime" datetime="${publishedAt}">
        <span class="news-date">
        ${plusZero(new Date(publishedAt).getDate())}/${plusZero(new Date(publishedAt).getMonth())}/
        ${plusZero(new Date(publishedAt).getFullYear())}
        </span> ${plusZero(new Date(publishedAt).getHours())}:${plusZero(new Date(publishedAt).getMinutes())}
      </time>
      <p class="news-author">${author || ''}</p>
    </div>
    `);
  return newsCard;
};

const renderHeadlines = async (err, data) => {
  const newsWrapper = document.createElement('ul');
  newsWrapper.classList.add('news-list');
  const allNews = [];
  for (let item = 0; item <= 3; item++) {
    const item1 = data['articles'][item];
    const {title, description, url, urlToImage, publishedAt, author} = item1;
    const news = renderNewsCard({title, description, url, urlToImage, publishedAt, author});
    allNews.push(news);
  }
  newsWrapper.append(...allNews);
  const container = document.createElement('div');
  container.classList.add('container');
  container.append(newsWrapper);
  return container;
};


const renderSearchNews = async (err, data) => {
  const newsWrapper = document.createElement('ul');
  newsWrapper.classList.add('news-list');
  const allNews = [];
  for (let item = 0; item <= 7; item++) {
    const item1 = data['articles'][item];
    const {title, description, url, urlToImage, publishedAt, author} = item1;
    const news = renderNewsCard({title, description, url, urlToImage, publishedAt, author});
    allNews.push(news);
  }

  newsWrapper.append(...allNews);
  const container = document.createElement('div');
  container.classList.add('container');
  container.append(newsWrapper);
  return container;
};

const loadFreshNews = async (url) => {
  const data = fetchRequest(url,
      {
        headers: {
          'X-Api-Key': '069c3e87d1244ff692b6ef120db21084',
        },
      });

  const freshNews = await renderHeadlines(null, await data);
  document.querySelector('.headlines').append(freshNews);
};
const init = () => {
  document.querySelector('.title-wrapper').style.display = 'none';
  document.querySelector('.search_result').style.display = 'none';
  const form = document.querySelector('.form-search');
  const search = document.querySelector('.search-input');
  const lang = document.querySelector('.js-choice');
  const urlHeadlinesFirst = `./search.json`;
  loadFreshNews(urlHeadlinesFirst);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('.headlines').textContent = '';
    document.querySelector('.search_result').textContent = '';
    const searchWord = search.value;
    const language = lang.options[lang.selectedIndex].value;

    document.querySelector('.title-wrapper').style.display = '';

    document.querySelector('.search_result').style.display = '';

    const urlNews = `https://newsapi.org/v2/everything?q=${searchWord}`;

    const urlHeadlines = `https://newsapi.org/v2/top-headlines?country=${language || 'ru'}`;
    const load = (url, url2) => Promise.all([
      fetchRequest(url,
          {
            headers: {
              'X-Api-Key': '069c3e87d1244ff692b6ef120db21084',
            },
          }),
      fetchRequest(url2,
          {
            headers: {
              'X-Api-Key': '069c3e87d1244ff692b6ef120db21084',
            },
          },
      ),
    ]);

    load(urlHeadlines, urlNews).then(async (data) => {
      if (data[0].totalResults !== 0) {
        const headlines = await renderHeadlines(null, data[0]);
        document.querySelector('.headlines').append(headlines);
      } else {
        document.querySelector('.fresh_news').textContent = 'Свежих новостей нет';
      }
      if (data[1].totalResults !== 0) {
        const search = await renderSearchNews(null, data[1]);
        document.querySelector('.search_result').append(search);
        document.querySelector('.title').textContent = `По вашему запросу “${searchWord}” найдено 8 результатов`;
      } else {
        document.querySelector('.title').textContent = `По вашему запросу “${searchWord}” найдено 0 результатов`;
      }
    });
  });
};
init();

