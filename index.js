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

//criar um metodo que aceita parametro
server.get('/tabuada',(req, res) => {
    //tabuada de qual numero e ate qual sequencia?
    const numero = parseInt(req.query.numero);
    const sequencia = parseInt(req.query.sequencia);
    if(!numero || !sequencia){
        res.send('Por favor, informe o numero e a sequencia na URL <br> Exemplo: /tabuada?numero=5&sequencia=10');
    }else{
        res.setHeader('Content-Type', 'text/html');//definindo o tipo de conteudo que sera enviado
        res.write(`Tabuada do ${numero} ate a ${sequencia}: `);

        for(let i = 1; i <= sequencia; i++){
            res.write(`<br> ${numero} x ${i} = ${numero * i}`);
        }

        res.end();//finaliza o envia
    }
    console.log("requisicao tabuada");
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});