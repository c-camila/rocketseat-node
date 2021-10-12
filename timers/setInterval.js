//setInterval função que irá rodar indefinidamente depois de X milissegundos ctrl+c faz aplicação parar
const timeOut = 1000;
const checking = () => console.log('checking!');
setInterval(checking, timeOut);
