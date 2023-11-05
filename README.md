# Backend Desafio Energizou

Esse é o servidor da aplicação [FrontEnd desafio energizou](https://github.com/wesleytoledo05/frontend-desafioEnergizou)

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

**Se tudo estiver correto, você verá uma mensagem escrito "Server funcionando!"

