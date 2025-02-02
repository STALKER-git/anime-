let information = [];
const NameElement = window.document.querySelector('.js-name');
const PasswordElement = window.document.querySelector('.js-password');
const AnnuleElement = window.document.querySelector('.js-Annule');
const signElement = window.document.querySelector('.js-sign');
signElement.addEventListener('click', ()=> {
   const value1 = NameElement.value;
   const value2 = PasswordElement.value;
   information.push({value1,value2});
   NameElement.value = '';
   PasswordElement.value = '';
});

