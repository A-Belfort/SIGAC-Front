function checkAuth() {
    console.log(sessionStorage["autenticado"])
    return sessionStorage["autenticado"];
}

checkAuth();

async function loginUsuario(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    const dados = { // dicionário com dados
        email: email,
        senha: senha
    };

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        }); //envia pro backend

        const resultado = await response.json();
        console.log('Resposta do backend:', resultado);
        if (resultado.success) {
            sessionStorage["autenticado"] = true;
            sessionStorage["user"] = email
            //sessionStorage para lembrar se o usuário está autenticado
            //as informações guardadas na sessionStorage serão excluídas ao fechar a janela/aba
            setTimeout(() => {
                window.location.href = "home.html";
            }, 900);
        }
    } catch (error) {
        console.error('Erro:', error);
        //alert('Erro de conexão com o servidor');
    } //erro
}

function logout() {
    sessionStorage.clear()
    setTimeout(() => {
        window.location.href = "index.html";
    }, 900);
}

function novoCurso () {
    // a fazer: verificar se o usuário é admin
    const nome = document.getElementById("nome_curso");
    const carga = document.getElementById("carga_horaria");

    const dados = {
        nome: nome,
        carga_horaria: carga
    };

    try {
        // MUDAR ROTA
        const response = await fetch('http://localhost:5000/api/cadastrar_curso', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        }); //envia pro backend

        const resultado = await response.json();
        console.log('Resposta do backend:', resultado);
        if (resultado.success) {
            setTimeout(() => {
                alert("Curso cadastrado com sucesso!");
            }, 900);
        }
    } catch (error) {
        console.error('Erro:', error);
        //alert('Erro de conexão com o servidor');
    } //erro
}

function novoAluno () {
    // a fazer: verificar se o usuário é admin
    const nome = document.getElementById("nomeAluno");
    const matricula = document.getElementById("matricula");
    const cpf = document.getElementById("cpf"); // mudar isso depois
    const tel = document.getElementById("telefone")

    const dados = {
        nome: nome,
        matricula: matricula,
        cpf: cpf,
        telefone: tel
    };

    try {
        // MUDAR ROTA
        const response = await fetch('http://localhost:5000/api/cadastrar_aluno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        }); //envia pro backend

        const resultado = await response.json();
        console.log('Resposta do backend:', resultado);
        if (resultado.success) {
            setTimeout(() => {
                alert("Curso cadastrado com sucesso!");
            }, 900);
        }
    } catch (error) {
        console.error('Erro:', error);
        //alert('Erro de conexão com o servidor');
    } //erro
}
