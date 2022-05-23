# Teste técnico eWally

##  Aplicação construida em NodeJS como parte do teste tecnico para a ewally.

### Clonando o projeto:
`git clone`

### Instalando as dependências do projeto:
`yarn init`

### Iniciando o servidor:
`yarn dev`

### A porta padrão é 8080 mas pode ser alterada no documento 8080.

## Rota GET /boleto/:numero do boleto
### Número de boleto correto:
``` 
Status 200: OK
{
    "barCode": "34193899200000136401090046091532938530637000",
    "amount": "136.40",
    "expDate": "2022-05-21"
}
```
### Caso o boleto nao tenha data de validade na linha digitável, retorna o padrão de vencimento para 15 dias.:
```
{
  "barCode": "34193000000000136401090046091532938530637000",
  "amount": "136.40",
  "expDate": "2022-06-07"
}
```
### Número errado:
```
Status 400: Bad Request
{
  "erro": "O código digitado está errado, verifique os numeros e tente novamente"
}
```
## A aplicação recebe um número de cógigo de barras  de título de arrecadação/recebimento:
```
Status 200: OK
{
  "barCode": "81880000001201000002020052200000000000000000",
  "amount": "120.10",
  "expDate": "2020-05-22"
}
```