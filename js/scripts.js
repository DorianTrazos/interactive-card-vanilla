const formElement = document.getElementById('form');

const inputNameElement = document.getElementById('input-name');
const inputNumberElement = document.getElementById('input-number');
const inputMonthElement = document.getElementById('input-month');
const inputYearElement = document.getElementById('input-year');
const inputCVCElement = document.getElementById('input-cvc');

const cardNameElement = document.getElementById('card-name');
const cardNumberElement = document.getElementById('card-number');
const cardMonthElement = document.getElementById('card-month');
const cardYearElement = document.getElementById('card-year');
const cardCVCElement = document.getElementById('card-cvc');

const cardNameErrorElement = document.getElementById('card-name-error');
const cardNumberErrorElement = document.getElementById('card-number-error');
const cardDateErrorElement = document.getElementById('card-date-error');
const cardCVCErrorElement = document.getElementById('card-cvc-error');

const onlyDigitsRegExp = /[0-9]+/;

const validateForm = event => {
  event.preventDefault();
  if (inputNameElement.value === '') {
    cardNameErrorElement.classList.remove('hide');
  } else {
    cardNameErrorElement.classList.add('hide');
  }

  if (inputNumberElement.value === '') {
    cardNumberErrorElement.classList.remove('hide');
  } else {
    cardNumberErrorElement.classList.add('hide');
  }

  if (inputMonthElement.value === '' || inputYearElement.value === '') {
    cardDateErrorElement.classList.remove('hide');
  } else {
    cardDateErrorElement.classList.add('hide');
  }

  if (inputCVCElement.value === '') {
    cardCVCErrorElement.classList.remove('hide');
  } else {
    cardCVCErrorElement.classList.add('hide');
  }
};

const writeNameInCard = event => {
  const value = event.target.value;
  cardNameElement.textContent = value.toUpperCase() || 'JANE APPLESEED';
};

const writeNumberInCard = event => {
  let value = event.target.value;

  if (value.length > 16 || !onlyDigitsRegExp.test(value)) {
    inputNumberElement.value = value.substring(0, 16);
    value = value.substring(0, 16);
  }

  cardNumberElement.textContent = value.toUpperCase() || '0000 0000 0000 0000';
};

const writeMonthInCard = event => {
  let value = event.target.value;

  if (value.length > 2 || !onlyDigitsRegExp.test(value)) {
    inputMonthElement.value = value.substring(0, 2);
    value = value.substring(0, 2);
  }

  cardMonthElement.textContent = value || '00';
};

const writeYearhInCard = event => {
  let value = event.target.value;

  if (value.length > 2 || !onlyDigitsRegExp.test(value)) {
    inputYearElement.value = value.substring(0, 2);
    value = value.substring(0, 2);
  }

  cardYearElement.textContent = value || '00';
};

const writeCVChInCard = event => {
  let value = event.target.value;

  if (value.length > 3 || !onlyDigitsRegExp.test(value)) {
    inputCVCElement.value = value.substring(0, 3);
    value = value.substring(0, 3);
  }

  cardCVCElement.textContent = value || '000';
};

inputNameElement.addEventListener('input', writeNameInCard);
inputNumberElement.addEventListener('input', writeNumberInCard);
inputMonthElement.addEventListener('input', writeMonthInCard);
inputYearElement.addEventListener('input', writeYearhInCard);
inputCVCElement.addEventListener('input', writeCVChInCard);

formElement.addEventListener('submit', validateForm);
