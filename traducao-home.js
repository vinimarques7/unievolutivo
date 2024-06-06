// Tradução dos textos para inglês
const traducoes = {
    "Bem-vindo a Universidade Evolutiva!": "Welcome to Evolutionary University!",
    "Unidade, Universo e Futuro": "Unity, Universe, and Future",
    "Quem somos nós?": "Who are we?",
    "Conheça nossas áreas!": "Explore our areas!",
    "Representantes do Corpo Docente": "Faculty Representatives",
    "Deixe sua mensagem ou faça uma pergunta!": "Leave your message or ask a question!",
    "Nome:": "Name:",
    "Digite seu nome": "Enter your name",
    "Email:": "Email:",
    "Seu email": "Your email",
    "Você é:": "You are:",
    "Responsável": "Responsible",
    "Aluno": "Student",
    "Aluno Independente": "Independent Student",
    "Contribua com um feedback!": "Provide feedback!",
    "Enviar": "Submit",
    "Email: evolutiva@uniev.com": "Email: evolutiva@uniev.com",
    "Ouvidoria +12 3456-7890": "Ombudsman +12 3456-7890",
    "Nossos Parceiros": "Our Partners",
    "Política de Privacidade": "Privacy Policy",
    "Para mais informações, clique aqui": "For more information, click here",
    "Todos os direitos reservados Uniev | 2024*": "All rights reserved Uniev | 2024*"
};

// Função para traduzir o conteúdo da página
function traduzirParaIngles() {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (traducoes[key]) {
            element.textContent = traducoes[key];
        }
    });
}

// Adicionando manipuladores de eventos para os itens do dropdown de idioma
document.getElementById("pt-br").addEventListener("click", function(event) {
    event.preventDefault();
    // Lógica para mudar para o idioma português
    // Você pode adicionar essa lógica se necessário
});

document.getElementById("en").addEventListener("click", function(event) {
    event.preventDefault();
    traduzirParaIngles();
});
