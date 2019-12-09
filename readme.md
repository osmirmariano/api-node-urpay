- npm init -y
- npm install express
- npm install mongoose
- npm install -D nodemon
- npm install require-dir
- npm install cors

# Projeto Teste - Urpay

Projeto teste para avaliação dos candidatos a compor a equipe Urpay. Este projeto tem o intuito de demonstrar a capacidade de codificação, abstração dos conhecimentos necessários e organização.

## Veículos

O projeto consiste em criar uma API REST para gerenciamento de veículos. Esta API deve ser feita utilizando Node.js com MongoDB. Sugerimos as seguintes biliotecas Node para este projeto:

* [__Express.js__](https://expressjs.com/) - Framework para aplicações web em Node.js.
* [__Mongoose__](https://mongoosejs.com/) - Modelagem de objetos Mongo para Node.js.

### Estrutura do Banco de dados

O banco deve possuir apenas uma Collection chamada `veiculo`. Dentro dessa Collection deve ter os seguintes campos:

* __placa__: Número da placa do veículo, no formato `AAA9999`. **Este campo deve ser único para cada veículo.**
* __marca__: Marca da montadora do veículo.
* __modelo__: Modelo do veículo.
* __cor__: Cor do veículo.
* __ano_fabricacao__: Ano de fabricação do veículo.
* __data_cadastro__: Data do cadastro do veículo no sistema.
* __revisoes__: Uma lista de objetos contendo informações sobre as revisões do veículo. Os objetos devem conter os seguintes campos:
  * __data_revisao__: Dia em que foi feita a revisão
  * __valor__: Valor pago pelo serviço de revisão.
  
### API WEB

A API do projeto deve possuir os seguintes endpoints:
* Cadastrar Veículo
* Listar Veículos (com filtros para marca e cor do veículo)
* Consultar Veículo pela placa
* Editar Veículo pela placa
* Deletar Veículo pela placa
* Adicionar Revisão pela placa
* Consultar Total de gasto em revisões do veículo pela placa
* Consultar Total de gasto em revisões do veículo pela marca

### Hints

* A verificação do formato da placa pode ser feita utilizando expressões regulares.
* Para calcular o total de gastos das revisões, é aconselhado utilizar `aggregation`, ferramenta disponível pelo mongoose.

