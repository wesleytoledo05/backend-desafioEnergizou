# Backend Desafio Energizou
É uma API RESTful construída em NodeJS + Express + MySql que recebe todos os dados relacionados cliente de uma empresa registra/fornece ao usuário todos esses dados através de uma API REST.

### Pré-Requisitos

Para executar este projeto, você precisará ter um ambiente básico com NodeJS 8+ instalado. Para utilizar o banco de dados, você precisará ter o MySql instalado e rodando em sua máquina na porta padrão (3306).

### Instalando 

**Clonando repositório**

```
$ git clone https://github.com/wesleytoledo05/backend-desafioEnergizou.git

$ cd backend-desafioEnergizou
```

**Instalando dependências**

```
$ npm install
```

**Configurando banco de dados**

Abra o arquivo [.env](https://github.com/wesleytoledo05/backend-desafioEnergizou/blob/main/.env) e configure o banco de dados para rodar na sua máquina.

**Em seu MySQL Workbench execute o seguinte comando:**
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

![Preview-Screens](https://github.com/wesleytoledo05/backend-desafioEnergizou/blob/main/CorrecaoDeErro.png)

Crie um banco de dados com nome "energizou":
```sql
CREATE DATABASE energizou;
USE energizou;
```

Com todas as dependências instaladas, o Banco de Dados rodando e o ambiente devidamente configurado, crie as tabelas no banco de dados com o comando:

```
$ yarn migration:run
```




Depois de tudo configurado e as tabelas criadas, inicie o servidor com o comando:

```
$ yarn dev
```

## Rotas

A URL Base é: http://localhost:3333/

**Se tudo estiver correto, você verá uma mensagem escrito "Server funcionando!**

### Cadastrar uma empresa

| Endpoint | Método| Descrição |
|----------|--------|------------|
| /createcompany | POST  | Cadastrar uma empresa.|

### Exemplo

```json
{
	"nameClient": "José Wesley",
	"email": "vntoledo05@gmail.com",
	"password": "1234",
	"companyname": "Wesley Toledo LTDA",
	"cnpj": 00000000000000,
	"cep": 12545583,
	"address": "Rua exemplo",
	"number": 123,
	"phone": 12787578876
}
```

### Listar todas empresas cadastradas

| Endpoint | Método| Descrição |
|----------|--------|------------|
| /listcompanies | GET  | Listar todas empresas cadastradas. |


### Consultar empresa por CNPJ.

| Endpoint | Método| Descrição |
|----------|--------|------------|
| /findcompaniesbycnpj/cnpj aqui | GET  | Consultar uma empresa específica por CNPJ. |


### Atualizar os dados de uma empresa.

| Endpoint | Método| Descrição |
|----------|--------|------------|
| /updatecompany/id aqui | PUT  | Atualizar os dados de uma empresa usando ID como parâmetro. |


### Deletar o cadastro de uma empresa.

| Endpoint | Método| Descrição |
|----------|--------|------------|
| /deletecompany/id aqui | DELETE  | Deletar o cadastro de uma empresa usando ID como parâmetro. |
