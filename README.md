<h1>MEANstack</h1>

<h3>MEAN:</h3>
<ul>
  <li>M: MongoDB - Banco de dados orientado a documentos</li>
  <li>E: Express - Servidor WEB para a plataforma node.js</li>
  <li>A: Angular</li>
  <li>N: Node</li>
</ul>

<h3>Sistema CRUD para gerenciamento de fotos</h3>

<h1>Montando o ambiente para utilizar o sistema:</h1>

<ul>
  <li>Instalar o <a href="https://nodejs.org/en/download/">Node.js</a></li>
  <li>Clonar repositório, <code>$ git clone https://github.com/MatheusNougueira/MEANstack.git</code></li>
  <li>Executar o comando <code>$ npm install</code>, para instalar as dependências no package.json</li>
  <li>Instalar o <a href="https://www.mongodb.com/download-center">MongoDB</a></li>
  <li>Executar o servidor do MongoDB, mongod.exe na pasta bin</li>
  <li>Abrir o MongoDB shell, mongo.exe na pasta bin</li>
  <li>Utilizar o banco de dados <b>alurapic</b> com o seguinte comando: <code>use alurapic</code></li>
  <li>Criar um usuário para login no sistema com o seguinte comando: <code>db.usuarios.insert({login: 'login', senha: 'senha'});</code></li>
  <li>Startar o servidor com o comando <code>$ npm start </code></li>
  <li>Pronto, servidor rodando na porta <a href="http://localhost:3000">3000</a></li>
</ul>

