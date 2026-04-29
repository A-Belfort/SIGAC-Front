document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim().toLowerCase();
            const password = document.getElementById('password').value;

            // Define os acessos
            if (email === 'admin@senac.br' && password === 'admin123') {
                localStorage.setItem('perfilLogado', 'admin');
                localStorage.setItem('nomeUsuario', 'Administrador');
                window.location.href = 'dashboard.html';
            } 
            else if (email === 'coordenador@senac.br' && password === 'senac123') {
                localStorage.setItem('perfilLogado', 'coordenador');
                localStorage.setItem('nomeUsuario', 'Coordenadora Ameliara Freire');
                window.location.href = 'dashboard.html';
            } 
            else {
                alert('Credenciais incorretas. Tente novamente.');
            }

            // Dentro do seu DOMContentLoaded
const formAluno = document.getElementById('formCadastroAluno');

if (formAluno) {
    formAluno.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nomeAluno').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;

        // Simulação de salvamento
        alert(`Sucesso!\nAluno: ${nome}\nCPF: ${cpf}\nTelefone: ${telefone}\nCadastrado com sucesso!`);
        
        formAluno.reset();
    });
}
        });
    }

    // ==========================================
    // 2. PARTE DO DASHBOARD (Roda no dashboard.html)
    // ==========================================
    if (window.location.pathname.includes('dashboard.html')) {
        const perfil = localStorage.getItem('perfilLogado');
        const nome = localStorage.getItem('nomeUsuario');

        // Se o cara tentar entrar sem logar, expulsa pro login
        if (!perfil) {
            window.location.href = 'index.html';
            return;
        }

        // Coloca o nome de quem logou no topo
        const elementoNome = document.getElementById('nome-usuario-topo');
        if (elementoNome) {
            elementoNome.innerText = nome;
        }

        // MOSTRAR/ESCONDER ITENS POR PERFIL
        if (perfil === 'coordenador') {
            // Esconde tudo que tiver a classe 'only-admin'
            const itensAdmin = document.querySelectorAll('.only-admin');
            itensAdmin.forEach(item => {
                item.style.display = 'none';
            });
        }
    }
});

