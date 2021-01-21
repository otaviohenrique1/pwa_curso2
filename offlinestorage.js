/* Exemplo com localStorage */
const valor1 = JSON.stringify({ name: 'Erik', age: 32 });
const chave1 = 'user';
window.localStorage.setItem(chave1, valor1);
const nome1 = window.localStorage.getItem(chave1);
console.log(JSON.parse(nome1));

/* Exemplo com sessionStorage */
const valor2 = JSON.stringify({ name: 'Erik', age: 32 });
const chave2 = 'user';
window.sessionStorage.setItem(chave2, valor2);
const nome2 = window.sessionStorage.getItem(chave2);
console.log(JSON.parse(nome2));