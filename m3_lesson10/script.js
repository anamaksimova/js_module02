import {el, setChildren} from './node_modules/redom/dist/redom.es.js';
import Inputmask from './node_modules/inputmask/dist/inputmask.es6.js';
const cardBuild = () => {
  const card = el('div', {className: 'credit-card'},
      el('span', {className: 'card__number'}, '____-____-____-____'),
      el('div', {className: 'card__personal'},
          el('span', {className: 'card__name'}, 'John Doe'),
          el('span', {className: 'card__date'}, '__/__'),
      ),
  );

  const form = el('form', {className: 'form'}, {id: 'form'},
      [
        el('div', {className: 'form__input-wrap form__input-wrap_holder'},
            [el('label', {className: 'form__label form__holder-label'}, 'Card Holder'),
              el('input', {type: 'text'}, {className: 'input input__holder'}),
            ]),

        el('div', {className: 'form__input-wrap form__input-wrap_number'},
            [el('label', {className: 'form__label form__number-label'}, 'Card Number'),
              el('input', '#cardNumber', {className: 'input input__number'}),
            ]),

        el('div', {className: 'form__input-wrap form__input-wrap_date'},
            [el('label', {className: 'form__label form__date-label'}, 'Card Expiry'),
              el('input', {type: 'text'}, {className: 'input input__date'}),
            ]),

        el('div', {className: 'form__input-wrap form__input-wrap_cvv'},
            [el('label', {className: 'form__label form__cvv-label'}, 'CVV'),
              el('input', {type: 'text'}, {className: 'input input__cvv'}),
            ]),

        el('button', {className: 'form__button'}, 'CHECK OUT'),

      ],
  );

  return el('div', {className: 'wrapper'},
      el('div', {className: 'card'},
          [el('p', {className: 'secure'}, 'Secure Checkout'),
            card,
            form,
          ]),

  );
};

setChildren(document.body, cardBuild());
const cardHolder = document.querySelector('.card__name');
const cardDate = document.querySelector('.card__date');
const cardNumber = document.querySelector('.card__number');

const inputHolder = document.querySelector('.input__holder');
const inputNumber = document.querySelector('.input__number');
const inputDate = document.querySelector('.input__date');
const cvvInput = document.querySelector('.input__cvv');
const form = document.querySelector('.form');

const cardNumberMask = new Inputmask('9999-9999-9999-9999');
cardNumberMask.mask(inputNumber);
const cardDateMask = new Inputmask('99/99');
cardDateMask.mask(inputDate);

const cardNameMask = new Inputmask('a{1,20} a{1,20}');
cardNameMask.mask(inputHolder);
const cvvMask = new Inputmask('999');
cvvMask.mask(cvvInput);

form.addEventListener('input', (e) => {
  if (e.target === inputHolder) cardHolder.textContent = inputHolder.value;
  if (e.target === inputNumber) cardNumber.textContent = inputNumber.value;
  if (e.target === inputDate) cardDate.textContent = inputDate.value;
});
