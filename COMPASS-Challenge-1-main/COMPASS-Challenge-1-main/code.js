// Seleciona todos os botões de opção
const buttons = document.querySelectorAll('.option-button');
const buttonSend = document.getElementById('buttonSend');

// Seleciona os campos do formulário
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formFields = document.getElementById('formFields');

// Função para alternar a classe de seleção
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Alterna a classe 'selected' no botão
        button.classList.toggle('selected');
        
        // Habilita o botão de envio se pelo menos um botão estiver selecionado
        validateForm();
    });
});

// Função para validar o formulário
function validateForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();   

    // Nome: deve ter pelo menos 2 palavras e conter letras
    const isNameValid = name.split(' ').length >= 2 && /^[a-zA-Z\s]+$/.test(name);

    // Email: validação de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Mensagem: deve ter pelo menos 20 caracteres
    const isMessageValid = message.length > 20;

    // Verificar se pelo menos um botão foi selecionado
    const isButtonSelected = document.querySelectorAll('.option-button.selected').length > 0;

    // Habilitar o botão de envio se todos os campos forem válidos
    buttonSend.disabled = !(isNameValid && isEmailValid && isMessageValid && isButtonSelected);
}

// Adiciona o evento para validar os campos quando o usuário digita
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);

// Função para salvar no localStorage e redirecionar
formFields.addEventListener("submit", (e) => {
    e.preventDefault();  // Impede o envio do formulário até validar

    // Se todos os campos forem válidos, salva no localStorage
    if (buttonSend.disabled === false) {
        const formData = {
            "name": nameInput.value,
            "email": emailInput.value,
            "message": messageInput.value,
            "selectedButtons": []
        };

        // Coleta os botões selecionados e os adiciona ao array
        document.querySelectorAll('.option-button.selected').forEach(button => {
            formData.selectedButtons.push(button.innerText);  // Armazena o texto do botão
        });

        // Salvar no localStorage
        localStorage.setItem("form", JSON.stringify(formData));

        // Redirecionar após o envio
        window.location.href = "local-storage.html";  
    } else {
        alert("Preencha todos os campos corretamente antes de enviar.");
    }
});