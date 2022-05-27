// 1
const files = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
const reg = /\.[j|t]sx?/;

const newFiles = (array, regEx) => {
  const newArray = array.filter(item => regEx.test(item));
  console.log('newArray: ', newArray);
};
newFiles(files, reg);
// 2
const reg2 = /(\w+)@([A-Za-z]{3,})\.([A-Za-z]{2,5})/;
const emails = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io', 'my-mail@yandex.ru',
  'tom_yam@ya.ru', 'zero@mai1.xyz'];
newFiles(emails, reg2);

// 3
const reg3 = /\(.{1,}\)/g;

const str = `Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината,
 гречки и вареной куриной грудки. Самыми лучшими способами приготовления 
 еды (по мнению моей мамы) являются следующие: варка
  на пару, запекание или варка в воде. Помимо стандартных
   мандаринов и ананасов, отличным украшением любого стола станут 
   необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой 
   может быть даже выпечка, если она приготовлена на пару`;

const text = str.match(reg3);
console.log('text: ', text);

// 4
const str2 = `Здоровый http://site.ru ужин вовсе не https://site.com `;
const foo = (str) => {
  str = str.replace(/(https?)\:\/\/(\w+)\.([A-Za-z]{2,5})/g, (...str) =>
    `<a href="${str[0]}">${str[2]}.${str[3]}</a>`,
  );
  console.log('str: ', str);
};

foo(str2);


