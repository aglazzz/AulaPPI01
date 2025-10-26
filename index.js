import express from 'express';

const host = '0.0.0.0';
const porta = 3000;
const server = express();//oferecendo ao dev um servidor http de modo expresso


//rechear o servidor com funcionalidades

server.get('/', (req, res) => {
    res.send('Olá, mundo! Servidor Express está funcionando.');
});
server.get('/horaAtual', (req, res) => {
    const horaAtual = new Date();
    const hora = horaAtual.getHours() + ":" + horaAtual.getMinutes() + ":" + horaAtual.getSeconds();
    res.send('Hora atual: ' + hora);
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});