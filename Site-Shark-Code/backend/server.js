const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rota padrão
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Rota de teste
app.get('/teste', (req, res) => {
    res.send('Esta é uma rota de teste!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
