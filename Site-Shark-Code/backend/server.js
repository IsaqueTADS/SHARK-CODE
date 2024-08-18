const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Configura o body-parser para analisar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos do diretório 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Rota padrão
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Rota de teste
app.get('/teste', (req, res) => {
    res.send('Esta é uma rota de teste!');
});

// Rota para lidar com o envio do formulário
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${message}`);
    
    res.send('Formulário enviado com sucesso!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
