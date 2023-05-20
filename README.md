<img src=".github/preview.png" alt="layout do projeto Buscador de Jogos" /> 

# Buscador de Jogos 🎮

Bem-vindo ao Buscador de Jogos! Este foi desafio no qual desenvolvi um sistema de busca de jogos utilizando HTML, CSS e JavaScript.

## Funcionalidades

Na tela ficou contido um campo de busca no qual o usuário pode digitar o nome de um jogo.
Após digitar o nome do jogo, se o mesmo tiver registrado no banco de dados, a foto e o nome do jogo correspondente devem ser exibidos. Caso,
contrário vem uma tela de erro.
Para obter os dados necessários, foi consumida uma API utilizando o Fetch.
O servidor da API foi criado utilizando o json-server, você poderá ver sua documentação [aqui](https://www.npmjs.com/package/json-server).

## Requisitos do sistema

<ul>
  <li>O sistema é capaz de aceitar nomes de jogos em letras maiúsculas ou minúsculas.</li>
  <li>Foi criado um arquivo CSS separado para estilizar o card de exibição do jogo.</li>
  <li>A busca e filtragem dos dados foram realizadas utilizando o Fetch.</li>
</ul>

## Instruções de execução

Para executar a aplicação, siga os passos abaixo:

<ol>
  <li>Certifique-se de que você possui o npm instalado.</li>
  <li>Clone este repositório em sua máquina local.</li>
  <li>No diretório raiz do projeto, abra o terminal e execute o comando npm install para instalar as dependências.</li>
  <li>Após a instalação, execute o comando npm start para iniciar a aplicação e o json-server.</li>
  <li>Acesse a aplicação em seu navegador através da URL http://localhost:3001.</li>
 </ol>
 
## Testando a aplicação

Para testar a aplicação, siga as instruções abaixo:
<ol>
  <li>Na página inicial, você verá um campo de busca.</li>
  <li>Digite o nome de um jogo(lista de jogos cadastrados abaixo) e pressione Enter ou clique no botão de busca.</li>
  <ul>
    <li>God of War</li>
    <li>The Last of Us</li>
    <li>Halo</li>
    <li>Resident Evil 4</li>
    <li>Atomic Heart</li>
    <li>Dying Light</li>
    <li>Rocket League</li>
    <li>Life is Strange</li>
    <li>Uncharted 4</li>
    <li>GTA 5</li>
  </ul>
  <li>O sistema buscará os dados correspondentes ao jogo digitado e exibirá a foto e o nome do jogo em um card.</li>
  <li>Experimente digitar nomes de jogos que não estão na lista, nomes em letras maiúsculas ou minúsculas para verificar se a busca está funcionando corretamente.</li>
  </ol>

Divirta-se buscando seus jogos favoritos! 🎮
