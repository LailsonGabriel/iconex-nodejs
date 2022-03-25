# iconex-nodejs

# Como usar a aplicação??
<ul>
  <li><strong>npm install - </strong>vai instalar as dependências no projeto**IMPORTANTE!**</li>
  <li>Crie um arquivo .env **Na pasta raíz**</strong></li>
  **Atenção preencha os campo DB_USER, DB_PASS de acordo com o seu user do MYSQL
  **Como exemplo abaixo:
</ol>

![Exemplo](https://github.com/LailsonGabriel/iconex-nodejs/blob/main/Screenshot%20from%202022-03-25%2013-56-43.png)
  <li><strong>npm run start</strong> vai iniciar rodar O Sequelize e rodar a API(Obs: Antes de inicar esse comando configure o seu .env)</li>
</ul>

# Docker MYSQL

Você também pode utilizar o Docker:

<p>Para finalizar as tarefas do MySQL em sua máquina:</p>
<strong>Linux: <code>sudo systemctl stop mysql</code> | para Windows consulte esse <a href="https://admininfo.info/iniciar-detener-o-reiniciar-servicio-mysql-en-linux">link</a></strong>
<p>E depois:</p>
<code>docker container run --name taks-mysql -e MYSQL_ROOT_PASSWORD=iconex-db -d -p 3306:3306 mysql:5</code>
<p>Para rodar o Mysql em um container Docker</p>

<p>E o seu .env deve ficar assim:</p>

![Exemplo](https://github.com/LailsonGabriel/iconex-nodejs/blob/main/Screenshot%20from%202022-03-25%2014-03-57.png)


# Rotas de Login e Cadastro de Usuário

<h2>Registro</h2>
<h3><strong>POST</strong> /auth/user/register OU /auth/company/register  - Registra um usuário(Motorista) ou Companhia no banco de dados e retorna um Token.</h3>

<h4>Exemplo do Body:</h4>

```json
{
  "name": "Teste"
  "email": "teste@gmail.com",
  "password": "teste123",
}
```

<h4>Exemplo do que ser retornado deverá ser parecido com esse</h4>

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY0ODIyODEyOH0.NMviPxHCN4QVAD4Iy2Ja9a3MTvLKMjJXaPzxhXeA0DY",
    "result": {
        "totalOrder": 409,
        "completedOrders": 361,
        "id": 1,
        "name": "Teste",
        "email": "teste@teste.com",
        "password": "teste"
    }
}
```

<h2>Login</h2>
<h3><strong>POST</strong> /auth/user/login OU /auth/company/login  - Loga um usuário(Motorista) ou Companhia no banco de dados e retorna um Token.</h3>
<h4>Exemplo do Body:</h4>

<h4>Exemplo do Body:</h4>

```json
{
  "email": "teste@gmail.com",
  "password": "teste123",
}
```
<h4>Exemplo do que ser retornado deverá ser parecido com esse</h4>

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY0ODIyODEyOH0.NMviPxHCN4QVAD4Iy2Ja9a3MTvLKMjJXaPzxhXeA0DY",
    "result": {
        "totalOrder": 409,
        "completedOrders": 361,
        "id": 1,
        "name": "Teste",
        "email": "teste@teste.com",
        "password": "teste"
    }
}
```

## Rotas Companies e Users

<h4>Exemplo do Body:</h4>
<h3><strong>POST</strong> /company OU /user  - Registra um usuário(Motorista) ou Companhia no banco de dados e retorna o mesmo.</h3>

```json
{
  "name": "Teste"
  "email": "teste@gmail.com",
  "password": "teste123",
}
```


<h4>Exemplo do que ser retornado deverá ser parecido com esse</h4>

```json
{
      "totalOrder": 409,
      "completedOrders": 361,
      "id": 1,
      "name": "Teste",
      "email": "teste@teste.com",
      "password": "teste"
}
```

<h3><strong>GET</strong> user/:id OU company/:id - Lista um Usuário(Motorista) ou uma Companhia de acordo com ID.</h3>

```json
{
    "id": 1,
    "name": "Teste",
    "email": "teste@teste.com",
    "password": "teste",
    "totalOrder": 409,
    "completedOrders": 361
}
```

<h3><strong>PUT</strong> user/:id OU company/:id - Edita um Usuário(Motorista) ou uma Companhia de acordo com ID.</h3>

<h4>Exemplo do Body:</h4>

```json
{
  "name": "Mudando nome"
}
```


<h4>Exemplo da alteração no banco de dados:</h4>

```json
{
    "id": 1,
    "name": "Mudando Nome",
    "email": "teste@teste.com",
    "password": "teste",
    "totalOrder": 409,
    "completedOrders": 361
}
```

<h3><strong>DELETE</strong> user/:id OU company/:id - Deleta um Usuário(Motorista) ou uma Companhia de acordo com ID.</h3>


<h4>Vai deletar seu Usuário(Motorista) ou Companhia do banco de dados:</h4>







