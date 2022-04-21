'use strict';
const propsLists = document.querySelectorAll('.props__list');

const propsItems = document.querySelectorAll('.props__item');

const propsTitles = document.querySelectorAll('.item__title');

const propsContainers = document.querySelectorAll('.item');


propsItems[2].append(propsItems[14]);
propsItems[19].append(propsItems[43], propsItems[44]);

const cloneList4 = propsLists[4].cloneNode(true);
const cloneList3 = propsLists[3].cloneNode(true);
propsLists[4].replaceWith(cloneList3);
propsLists[3].replaceWith(cloneList4);

const cloneTitle3 = propsTitles[3].cloneNode(true);
const cloneTitle1 = propsTitles[1].cloneNode(true);
const cloneTitle4 = propsTitles[4].cloneNode(true);
propsTitles[3].replaceWith(cloneTitle4);
propsTitles[4].replaceWith(cloneTitle1);
propsTitles[1].replaceWith(cloneTitle3);

const cloneTitle2 = propsTitles[2].cloneNode();
const title = document.createTextNode('This и прототипы объектов');
cloneTitle2.append(title);
propsTitles[2].replaceWith(cloneTitle2);

propsContainers[4].before(propsContainers[0]);

