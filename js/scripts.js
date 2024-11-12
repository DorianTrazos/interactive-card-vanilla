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

const validateForm = event => {
  event.preventDefault();
};

formElement.addEventListener('submit', validateForm);
