/*
**ASYNC e AWAIT**

- As funções assíncronas funcionam como Promises, 
  porém com uma sintaxe mais simples;
- Precisamos declarar a função com a palavra async;
- E quando precisamos aguardar por algo a instrução
  precisa de await;
- Podemos aplicar o recurso em funções anônimas e métodos de classes;
- Tentar usar o await sem o async gera um erro;
- Exemplo de uso: inserção de dado no banco;

*/

// **SINTAXE**
// function primeiraFuncao(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Esperou isso aqui");
//       resolve()
//     }, 1000);
//   })
// }

// async function segundaFuncao(){
//   console.log("Iniciou");

//   await primeiraFuncao();

//   console.log("Terminou");
// }

// segundaFuncao();

// **PRÁTICA**
// Função que busca os dados de um usuário baseado no ID
function getUser(id) {
  // Faz uma requisição HTTP para a API com o ID do usuário
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json()) // Converte a resposta da requisição em JSON
    .catch(err => console.log(err)); // Captura e exibe erros, caso a requisição falhe
}

// Função assíncrona que exibe o nome do usuário no console
async function showUserName(id) {
  try {
    // Chama a função getUser e espera até que os dados do usuário sejam recebidos
    const user = await getUser(id);

    // Exibe o ID do usuário no console
    console.log(`O id: ${user.data.id}`);
    
    // Exibe o primeiro nome do usuário no console
    console.log(`O nome: ${user.data.first_name}`);
    
    // Exibe o sobrenome do usuário no console
    console.log(`O sobrenome: ${user.data.last_name}`);
    
    // Exibe o avatar do usuário no console
    console.log(`O avatar: ${user.data.avatar}`);

  } catch (err) {
    // Caso ocorra um erro, ele será capturado e exibido no console
    console.log(err);
  }
}

// Chama a função showUserName com o ID 3 para buscar os dados do usuário e exibi-los
showUserName(3);
