document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado e funcionando!');

    // Seleciona o formulário
    const form = document.getElementById('contactForm');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Cria um objeto FormData com os dados do formulário
        const formData = new FormData(form);

        // Cria um objeto com os dados do formulário
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Envia os dados para o backend
        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        })
        .then(response => response.text())
        .then(result => {
            // Exibe o alerta com a mensagem de confirmação e a mensagem enviada
            alert(`Formulário enviado com sucesso!\nMensagem: ${data.message}`);
            // Opcional: Limpa o formulário após o envio
            form.reset();
        })
        .catch(error => {
            console.error('Erro ao enviar o formulário:', error);
            alert('Erro ao enviar o formulário.');
        });
    });
});
